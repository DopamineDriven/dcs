import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { visitorFields } from "@/lib/visitor";
import { COOKIES } from "@/types/cookies";

const sample = {
  hostname: "www.drisdell.com",
  browserName: "Chrome",
  browserVersion: "147.0.7727.49",
  viewport: "desktop",
  ios: "false",
  arch: "x64",
  latlng: "41.8338486,-87.8966849",
  tz: "America/Chicago",
  ip: "203.0.113.9",
  qr_access: "false",
  ua: "Mozilla/5.0",
  country: "US",
  city: "Chicago",
  isMac: "false",
  region: "Illinois",
  postalCode: "60010",
  locale: "en-US"
} as const;

describe("visitorFields", () => {
  it("forwards every proxy cookie and adds the names the server actions read", () => {
    const fields = visitorFields(sample);
    for (const key of Object.keys(COOKIES) as (keyof typeof COOKIES)[]) {
      assert.equal(fields[key], sample[key], key);
    }
    assert.equal(fields["user-agent"], "Mozilla/5.0");
    assert.equal(fields.lat, "41.8338486");
    assert.equal(fields.lng, "-87.8966849");
  });

  it("sends empty strings rather than undefined when cookies are missing", () => {
    const fields = visitorFields({});
    for (const value of Object.values(fields)) assert.equal(value, "");
    assert.equal(Object.keys(fields).length, Object.keys(COOKIES).length + 3);
  });

  it("leaves lat and lng empty when latlng is malformed", () => {
    const fields = visitorFields({ latlng: "nope" });
    assert.equal(fields.lat, "");
    assert.equal(fields.lng, "");
    assert.equal(fields.latlng, "nope");
  });
});
