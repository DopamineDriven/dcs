import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { handleBody } from "@/utils/handle-body";

const metadata = {
  body: "Hello there",
  city: "Chicago",
  lat: "41.8338486",
  lng: "-87.8966849",
  tz: "America/Chicago",
  ip: "203.0.113.9",
  ua: "Mozilla/5.0",
  flag: "",
  country: "US",
  region: "Illinois",
  postalCode: "60010",
  locale: "en-US",
  deviceType: "desktop",
  browserName: "Firefox",
  browserVersion: "159.0",
  qrAccess: "false"
};

describe("handleBody", () => {
  it("starts with the message and lists every metadata entry on its own blank-line-separated row", () => {
    const out = handleBody(metadata);
    assert.ok(out.startsWith("Hello there\n\n --- METADATA -- \n\n"));
    assert.deepEqual(out.split("\n\n").slice(2), [
      "city: Chicago",
      "coordinates: [41.8338486,-87.8966849]",
      "reverse geo lookup: https://www.latlong.net/c/?lat=41.8338486&long=-87.8966849",
      "timezone: America/Chicago",
      "ip: 203.0.113.9",
      "user-agent: Mozilla/5.0",
      "flag: ",
      "country: US",
      "region: Illinois",
      "postal code: 60010",
      "locale: en-US",
      "device type: desktop",
      "browser name: Firefox",
      "browser version: 159.0",
      "qr access: false"
    ]);
  });

  it("accepts the parser's call shape, which sends no flag", () => {
    const { flag: _flag, ...withoutFlag } = metadata;
    assert.ok(handleBody(withoutFlag).includes("\n\nflag: \n\n"));
  });
});
