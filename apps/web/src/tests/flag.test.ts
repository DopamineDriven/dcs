import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { flagCode, flagImageTag } from "@/lib/flag";

describe("flagCode", () => {
  it("normalizes a two-letter country code to the flag asset name", () => {
    assert.equal(flagCode("US"), "us");
    assert.equal(flagCode("gb"), "gb");
  });

  it("is undefined for anything that is not a two-letter code", () => {
    assert.equal(flagCode("USA"), undefined);
    assert.equal(flagCode(""), undefined);
    assert.equal(flagCode(undefined), undefined);
  });
});

describe("flagImageTag", () => {
  it("wraps a png data url in a sized img tag with an accessible alt", () => {
    assert.equal(
      flagImageTag("data:image/png;base64,AAAA", 48, 32, "us"),
      '<img src="data:image/png;base64,AAAA" width="48" height="32" alt="US flag">'
    );
  });
});
