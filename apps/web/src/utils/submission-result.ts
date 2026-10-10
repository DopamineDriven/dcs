import type { SubmissionPayloadProps } from "@/types/wp";

export type SubmissionResult =
  { ok: true; message: string } | { ok: false; message: string };

/** Collapse a Gravity Forms submission payload into a success/failure result. */
export function submissionResult(
  payload: SubmissionPayloadProps
): SubmissionResult {
  const { errors, confirmation } = payload.data.submitGfForm;
  return errors != null
    ? { ok: false, message: errors }
    : { ok: true, message: confirmation.message };
}

/** Normalize anything thrown while submitting into a failure result. */
export function submissionFailure(err: unknown): SubmissionResult {
  const message =
    err instanceof Error
      ? err.message
      : typeof err === "string"
        ? err
        : JSON.stringify(err);
  return { ok: false, message };
}
