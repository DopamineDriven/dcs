import type { SubmissionPayloadProps } from "@/types/wp";

export type SubmissionResult =
  { ok: true; message: string } | { ok: false; message: string };

/** Collapse a Gravity Forms submission payload into a success/failure result. */
export function submissionResult(payload: SubmissionPayloadProps) {
  const { errors, confirmation } = payload.data.submitGfForm;
  return errors != null
    ? submissionFailure(errors)
    : { ok: true, message: confirmation.message };
}

/** Normalize anything thrown while submitting into a failure result. */
export function submissionFailure(_error: unknown) {
  return {
    ok: false,
    message: "Your message could not be sent. Please try again."
  };
}
