import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  alpha2ToCountryCode,
  getDataByAlpha2
} from "@/lib/alpha2-to-country-code";

const keys = Object.keys(
  alpha2ToCountryCode
) as (keyof typeof alpha2ToCountryCode)[];

describe("getDataByAlpha2", () => {
  it("resolves every alpha-2 key, including numeric codes under 100", () => {
    const failing = keys.filter(key => {
      try {
        getDataByAlpha2(key);
        return false;
      } catch {
        return true;
      }
    });
    assert.deepEqual(failing, []);
  });

  it("echoes the key as alpha2 and points flagUrl at that country's svg", () => {
    for (const key of keys) {
      const data = getDataByAlpha2(key);
      assert.equal(data.alpha2, key);
      assert.match(data.alpha3, /^[A-Z]{3}$/, key);
      assert.ok(data.fullName.length > 0, key);
      assert.ok(data.flagUrl.endsWith(`/flags/${key.toLowerCase()}.svg`), key);
    }
  });

  it("reports the flag aspect ratio as width/height", () => {
    for (const key of keys) {
      const ratio = getDataByAlpha2(key).flagAspectRatio;
      assert.match(ratio, /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, key);
    }
    assert.equal(getDataByAlpha2("US").flagAspectRatio, "19/10");
    assert.equal(getDataByAlpha2("CH").flagAspectRatio, "1/1");
    assert.equal(getDataByAlpha2("QA").flagAspectRatio, "28/11");
  });
});
