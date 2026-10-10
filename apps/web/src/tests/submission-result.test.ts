import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { SubmissionPayloadProps } from "@/types/wp";
import { submissionFailure, submissionResult } from "@/utils/submission-result";

function payload(
  overrides: Partial<SubmissionPayloadProps["data"]["submitGfForm"]>
) {
  return {
    data: {
      submitGfForm: {
        clientMutationId: "abc",
        confirmation: {
          message: "<p>Thanks!</p>",
          pageId: null,
          queryString: null,
          type: "message",
          url: null,
          __typename: "GfConfirmation"
        },
        errors: null,
        __typename: "SubmitGfFormPayload",
        entry: {
          dateCreated: "",
          userAgent: "",
          __typename: "GfEntry",
          ip: "",
          formId: "2",
          isSubmitted: true,
          sourceUrl: ""
        },
        ...overrides
      }
    }
  } as unknown as SubmissionPayloadProps;
}

describe("submissionResult", () => {
  it("is ok with the confirmation message when there are no errors", () => {
    const result = submissionResult(payload({ errors: null }));
    assert.deepEqual(result, { ok: true, message: "<p>Thanks!</p>" });
  });

  it("is not ok with the error text when Gravity Forms reports errors", () => {
    const result = submissionResult(payload({ errors: "Email is required" }));
    assert.deepEqual(result, { ok: false, message: "Email is required" });
  });
});

describe("submissionFailure", () => {
  it("uses the message of a thrown Error", () => {
    assert.deepEqual(submissionFailure(new Error("boom")), {
      ok: false,
      message: "boom"
    });
  });

  it("passes a thrown string through unchanged", () => {
    assert.deepEqual(submissionFailure("network down"), {
      ok: false,
      message: "network down"
    });
  });

  it("serializes anything else as JSON", () => {
    assert.deepEqual(submissionFailure({ code: 500 }), {
      ok: false,
      message: '{"code":500}'
    });
  });
});
