"use server";

import { del, put } from "@vercel/blob";
import type { SubmissionResult } from "@/utils/submission-result";
import { ExecuteContactFormSubmissionMutation } from "@/mutations/contact-submission";
import { ExecuteEventFormSubmissionMutation } from "@/mutations/event-submission";
import { ExecuteResumeSubmissionMutation } from "@/mutations/resume-submission";
import {
  ExecuteContactFormSubmissionMutationProps,
  SubmissionPayloadProps
} from "@/types/wp";
import { handleBody } from "@/utils/handle-body";
import { submissionResult } from "@/utils/resolve-submission";
import {
  parseContactSubmission,
  parseEventSubmission,
  parseResumeSubmission,
  SubmissionInputError
} from "@/utils/submission-input";
import { submissionFailure } from "@/utils/submission-result";

export async function resumeSubmissionAction(
  formData: FormData
): Promise<SubmissionResult> {
  let uploadedUrl: string | undefined;
  try {
    const { input, file, extension, contentType } =
      await parseResumeSubmission(formData);
    const blob = await put(`resumes/resume.${extension}`, file, {
      access: "public",
      addRandomSuffix: true,
      allowOverwrite: false,
      contentType,
      cacheControlMaxAge: 60,
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    console.log(blob)
    uploadedUrl = blob.url;
    const payload = (await ExecuteResumeSubmissionMutation({
      ...input,
      file: blob.url
    })) as unknown as SubmissionPayloadProps["data"];
    const result = submissionResult(payload);
    if (result.ok) uploadedUrl = undefined;
    return result satisfies SubmissionResult;
  } catch (error) {
    if (error instanceof SubmissionInputError)
      return { ok: false, message: error.message };
    return submissionFailure(error) satisfies SubmissionResult;
  } finally {
    // An upload without an accepted form entry should not remain publicly available.
    if (uploadedUrl) {
      await del(uploadedUrl).catch(() => {
        console.error(
          "Résumé upload cleanup failed; check Blob for an orphaned file."
        );
      });
    }
  }
}

export async function contactUsAction(formData: FormData) {
  try {
    const input = parseContactSubmission(formData);
    const payload = (await ExecuteContactFormSubmissionMutation(
      input
    )) as unknown as SubmissionPayloadProps["data"];
    return submissionResult(payload) satisfies SubmissionResult;
  } catch (error) {
    if (error instanceof SubmissionInputError)
      return { ok: false, message: error.message };
    return submissionFailure(error) satisfies SubmissionResult;
  }
}

export async function eventSubmissionAction(formData: FormData) {
  try {
    const input = parseEventSubmission(formData);
    const payload = (await ExecuteEventFormSubmissionMutation(
      input
    )) as unknown as SubmissionPayloadProps["data"];
    return submissionResult(payload) satisfies SubmissionResult;
  } catch (error) {
    if (error instanceof SubmissionInputError)
      return { ok: false, message: error.message };
    return submissionFailure(error) satisfies SubmissionResult;
  }
}
export async function contactUsActions(formData: FormData) {
  const additionalData = {
    city: (formData.get("city") as string) ?? "",
    lat: (formData.get("lat") as string) ?? "",
    lng: (formData.get("lng") as string) ?? "",
    flag: (formData.get("flag") as string) ?? "",
    ip: (formData.get("ip") as string) ?? "",
    tz: (formData.get("tz") as string) ?? "",
    body: (formData.get("body") as string) ?? "",
    ua: (formData.get("user-agent") as string) ?? "",
    country: (formData.get("country") as string) ?? "",
    postalCode: (formData.get("postalCode") as string) ?? "",
    locale: (formData.get("locale") as string) ?? "",
    qrAccess: (formData.get("qrAccess") as string) ?? "",
    region: (formData.get("region") as string) ?? "",
    browserName: (formData.get("browserName") as string) ?? "",
    browserVersion: (formData.get("browserVersion") as string) ?? "",
    deviceType: (formData.get("deviceType") as string) ?? ""
  };

  const enhancedBody = handleBody(additionalData);
  const derivedData = {
    firstName: (formData.get("first-name") as string) ?? "",
    lastName: (formData.get("last-name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    subject: formData.get("subject")
      ? (formData.get("subject") as string)
      : "No Subject",
    body: enhancedBody,
    ip: (formData.get("ip") as string) ?? "",
    userAgent: (formData.get("user-agent") as string) ?? ""
  } satisfies ExecuteContactFormSubmissionMutationProps;

  try {
    const data = await ExecuteContactFormSubmissionMutation(derivedData);
    const v = data as unknown as SubmissionPayloadProps["data"];
    if (v.submitGfForm.errors != null) {
      return {
        ok: false,
        message: v.submitGfForm?.errors.map(t => t.message).join(", ")
      } as const;
    } else
      return {
        ok: true,
        message: v.submitGfForm.confirmation.message
      } as const;
  } catch (err) {
    console.error(typeof err === "string" ? err : JSON.stringify(err, null, 2));
    return { ok: false, message: JSON.stringify(err, null, 2) } as const;
  }
}
