"use server";

import type { ExecuteContactFormSubmissionMutationProps } from "@/types/wp";
import { ExecuteContactFormSubmissionMutation } from "@/mutations/contact-submission";

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
    console.log(derivedData);
    const data = await ExecuteContactFormSubmissionMutation(derivedData);
    if (data.data.submitGfForm.errors != null) {
      console.log(data.data.submitGfForm.errors);
      return { res: data.data.submitGfForm.errors };
    } else return { res: data.data.submitGfForm.confirmation.message };
  } catch (err) {
    console.error(typeof err === "string" ? err : JSON.stringify(err, null, 2));
    return { res: JSON.stringify(err, null, 2) };
  }
}
