"use server";

import type {
  ExecuteContactFormSubmissionMutationProps,
  ExecuteEventFormSubmissionMutationProps,
  ExecuteResumeFormSubmissionMutationProps
} from "@/types/wp";
import { ExecuteContactFormSubmissionMutation } from "@/mutations/contact-submission";
import { ExecuteEventFormSubmissionMutation } from "@/mutations/event-submission";
import { ExecuteResumeSubmissionMutation } from "@/mutations/resume-submission";
import { handleBody } from "@/utils/handle-body";
import { put } from '@vercel/blob';


export async function contactUsAction(formData: FormData) {
  const additionalData = {
    city: (formData.get("city") as string) ?? "",
    lat: (formData.get("lat") as string) ?? "",
    lng: (formData.get("lng") as string) ?? "",
    flag: (formData.get("flag") as string) ?? "",
    ip: (formData.get("ip") as string) ?? "",
    tz: (formData.get("tz") as string) ?? "",
    body: (formData.get("body") as string) ?? "",
    ua: (formData.get("user-agent") as string) ?? ""
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
    if (data.data.submitGfForm.errors != null) {
      return { res: data.data.submitGfForm.errors };
    } else return { res: data.data.submitGfForm.confirmation.message };
  } catch (err) {
    console.error(typeof err === "string" ? err : JSON.stringify(err, null, 2));
    return { res: JSON.stringify(err, null, 2) };
  }
}

export async function eventSubmissionAction(formData: FormData) {
  const additionalData = {
    city: (formData.get("city") as string) ?? "",
    lat: (formData.get("lat") as string) ?? "",
    lng: (formData.get("lng") as string) ?? "",
    flag: (formData.get("flag") as string) ?? "",
    ip: (formData.get("ip") as string) ?? "",
    tz: (formData.get("tz") as string) ?? "",
    body: (formData.get("body") as string) ?? "",
    ua: (formData.get("user-agent") as string) ?? ""
  };

  const enhancedBody = handleBody(additionalData);
  const derivedData = {
    firstName: (formData.get("first-name") as string) ?? "",
    lastName: (formData.get("last-name") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    phone: formData.get("phone-number")
      ? (formData.get("phone-number") as string)
      : "+15555555555",
    body: enhancedBody,
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

export async function resumeSubmissionAction(formData: FormData) {
  return await (async(formData: FormData) => {
    const file = formData.get('file') as File;
    const blob = await put(file.name, file, {
      access: 'public',
    });
    return blob;
  })(formData).then(async (blob) => {
    const additionalData = {
      city: (formData.get("city") as string) ?? "",
      lat: (formData.get("lat") as string) ?? "",
      lng: (formData.get("lng") as string) ?? "",
      flag: (formData.get("flag") as string) ?? "",
      ip: (formData.get("ip") as string) ?? "",
      tz: (formData.get("tz") as string) ?? "",
      body: (formData.get("body") as string) ?? "",
      ua: (formData.get("user-agent") as string) ?? ""
    };

    const enhancedBody = handleBody(additionalData);
    const derivedData = {
      firstName: (formData.get("first-name") as string) ?? "",
      lastName: (formData.get("last-name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      phone: formData.get("phone-number")
        ? (formData.get("phone-number") as string)
        : "+15555555555",
      body: enhancedBody,
      ip: (formData.get("ip") as string) ?? "",
      userAgent: (formData.get("user-agent") as string) ?? "",
      file: blob.url
    } satisfies ExecuteResumeFormSubmissionMutationProps;

    const toJSON = JSON.stringify(derivedData, null, 2);
    console.log(toJSON);
    try {
      const data = await ExecuteResumeSubmissionMutation(derivedData);
      if (data.data.submitGfForm.errors != null) {
        return { res: data.data.submitGfForm.errors };
      } else return { res: data.data.submitGfForm.confirmation.message };
    } catch (err) {
      console.error(typeof err === "string" ? err : JSON.stringify(err, null, 2));
      return { res: JSON.stringify(err, null, 2) };
    }
  }).catch((r) => ({res: JSON.stringify(r,null,2)}));

}
