"use server";

import type {
  ExecuteContactFormSubmissionMutationProps,
  ExecuteEventFormSubmissionMutationProps
} from "@/types/wp";
import { ExecuteContactFormSubmissionMutation } from "@/mutations/contact-submission";
import { ExecuteEventFormSubmissionMutation } from "@/mutations/event-submission";

export async function contactUsAction(formData: FormData) {
  const derivedData = {
    firstName: (formData.get("first-name") as string) ?? "",
    lastName: (formData.get("last-name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    subject: formData.get("subject")
      ? (formData.get("subject") as string)
      : "No Subject",
    body: (formData.get("body") as string) ?? "",
    ip: (formData.get("ip") as string) ?? "",
    userAgent: (formData.get("user-agent") as string) ?? ""
  } satisfies ExecuteContactFormSubmissionMutationProps;

  try {
    const data = await ExecuteContactFormSubmissionMutation(derivedData);
    if (data.data.submitGfForm.errors != null) {
      return { res: data.data.submitGfForm.errors };
    } else return { res: data.data.submitGfForm.confirmation.message };
  } catch (err) {
    console.error(typeof err === "string" ? err : JSON.stringify(err, null, 2));
    return { res: JSON.stringify(err, null, 2) };
  }
}

export async function eventSubmissionAction(formData: FormData) {
  const derivedData = {
    firstName: (formData.get("first-name") as string) ?? "",
    lastName: (formData.get("last-name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    phone: formData.get("phone-number")
      ? (formData.get("phone-number") as string)
      : "+15555555555",
    body: (formData.get("body") as string) ?? "",
    ip: (formData.get("ip") as string) ?? "",
    userAgent: (formData.get("user-agent") as string) ?? ""
  } satisfies ExecuteEventFormSubmissionMutationProps;

  try {
    const data = await ExecuteEventFormSubmissionMutation(derivedData);
    if (data.data.submitGfForm.errors != null) {
      return { res: data.data.submitGfForm.errors };
    } else return { res: data.data.submitGfForm.confirmation.message };
  } catch (err) {
    console.error(typeof err === "string" ? err : JSON.stringify(err, null, 2));
    return { res: JSON.stringify(err, null, 2) };
  }
}
