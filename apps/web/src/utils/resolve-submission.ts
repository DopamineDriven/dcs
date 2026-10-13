import "server-only";
import type { SubmissionPayloadProps } from "@/types/wp";
import type { SubmissionResult } from "@/utils/submission-result";
import { wordpressText } from "@/lib/wordpress-content";
import { submissionFailure } from "@/utils/submission-result";

/** Collapse a Gravity Forms submission payload into a success/failure result. */
export function submissionResult(
  payload: SubmissionPayloadProps['data']
): SubmissionResult {
  const submission = payload.submitGfForm;
  if (!submission) return submissionFailure(undefined);
  if (submission.errors?.length) {
    const message = submission.errors
      .map(({ message }) => wordpressText(message ?? ""))
      .join(" ");
    return {
      ok: false,
      message: message || "Please check your details and try again."
    };
  }
  if (submission.entry?.isSubmitted !== true)
    return submissionFailure(undefined);
  return {
    ok: true,
    message:
      wordpressText(submission.confirmation?.message ?? "") ||
      "Thank you. Your message has been sent."
  };
}
