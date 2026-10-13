import "server-only";
import { isIP } from "node:net";
import type { ExecuteContactFormSubmissionMutationProps, ExecuteEventFormSubmissionMutationProps } from "@/types/wp";
import { handleBody } from "@/utils/handle-body";
import { resumeFileError, resumeFileFormat } from "@/lib/resume-file";

export class SubmissionInputError extends Error {}

function readText(formData: FormData, key: string, maxLength: number, label = key) {
  const value = formData.get(key);
  if (value === null) return "";
  if (typeof value !== "string") throw new SubmissionInputError(`${label} must be text.`);
  const trimmed = value.trim();
  if (trimmed.length > maxLength) throw new SubmissionInputError(`${label} must be ${maxLength} characters or fewer.`);
  return trimmed;
}

function requiredText(formData: FormData, key: string, maxLength: number, label: string) {
  const value = readText(formData, key, maxLength, label);
  if (!value) throw new SubmissionInputError(`Please enter your ${label.toLowerCase()}.`);
  return value;
}

function parseMessageSubmission(formData: FormData) {
  const firstName = requiredText(formData, "first-name", 100, "First name");
  const lastName = requiredText(formData, "last-name", 100, "Last name");
  const email = requiredText(formData, "email", 254, "Email");
  const body = requiredText(formData, "body", 10000, "Message");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new SubmissionInputError("Please enter a valid email address.");
  }

  // These cookie-derived values are advisory metadata, not an authorization signal.
  const suppliedIp = readText(formData, "ip", 64);
  const ip = isIP(suppliedIp) ? suppliedIp : "";
  const userAgent = readText(formData, "user-agent", 2048);
  const enhancedBody = handleBody({
    body,
    ip,
    ua: userAgent,
    country: readText(formData, "country", 100),
    city: readText(formData, "city", 256),
    region: readText(formData, "region", 256),
    postalCode: readText(formData, "postalCode", 32),
    locale: readText(formData, "locale", 64),
    lat: readText(formData, "lat", 32),
    lng: readText(formData, "lng", 32),
    tz: readText(formData, "tz", 128),
    browserName: readText(formData, "browserName", 128),
    browserVersion: readText(formData, "browserVersion", 128),
    deviceType: readText(formData, "deviceType", 64),
    qrAccess: readText(formData, "qrAccess", 8),
  });

  return { firstName, lastName, email, body: enhancedBody, ip, userAgent };
}

export function parseEventSubmission(formData: FormData) {
  const input = parseMessageSubmission(formData);
  const phone = readText(formData, "phone-number", 50, "Phone number");
  if (phone && (!/^[+\d\s().#x-]+$/i.test(phone) || phone.replace(/\D/g, "").length < 7)) {
    throw new SubmissionInputError("Please enter a valid phone number or leave it blank.");
  }
  return { ...input, phone } satisfies ExecuteEventFormSubmissionMutationProps;
}

export async function parseResumeSubmission(formData: FormData) {
  const input = parseEventSubmission(formData);
  const files = formData.getAll("file");
  const file = files[0];
  if (files.length !== 1 || !(file instanceof File)) {
    throw new SubmissionInputError("Please select one résumé file.");
  }
  const error = resumeFileError(file);
  if (error) throw new SubmissionInputError(error);
  const format = resumeFileFormat(file);
  if (!format) throw new SubmissionInputError("Please upload a PDF, DOC, or DOCX file.");

  const bytes = Buffer.from(await file.arrayBuffer());
  const validSignature = format.extension === "pdf"
    ? bytes.subarray(0, 5).toString("ascii") === "%PDF-"
    : format.extension === "doc"
      ? bytes.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]))
      : bytes.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))
        && bytes.includes(Buffer.from("[Content_Types].xml"))
        && bytes.includes(Buffer.from("word/document.xml"));
  if (!validSignature) throw new SubmissionInputError("The file content does not match its PDF, DOC, or DOCX extension.");
  return { input, file, ...format };
}

export function parseContactSubmission(formData: FormData) {
  const input = parseMessageSubmission(formData);
  const subject = readText(formData, "subject", 200, "Subject") || "no subject";
  return { ...input, subject } satisfies ExecuteContactFormSubmissionMutationProps;
}
