import type { CookieKey, CookieValue } from "@/types/cookies";
import { COOKIES } from "@/types/cookies";

/**
 * Every cookie the proxy sets, plus the three names the Gravity Forms server
 * actions already read (`user-agent`, `lat`, `lng`).
 */
export type VisitorFields = Record<CookieKey, string> & {
  "user-agent": string;
  lat: string;
  lng: string;
};

const COORDINATE = /^-?\d+(?:\.\d+)?$/;

/**
 * Turns the cookies the proxy sets on every request into submission metadata
 * fields, so forms never need an API round trip before submitting.
 */
export function visitorFields(cookies: Partial<CookieValue>): VisitorFields {
  const [lat = "", lng = ""] = (cookies.latlng ?? "").split(",");
  const validCoordinates = COORDINATE.test(lat) && COORDINATE.test(lng);
  const forwarded = Object.fromEntries(
    (Object.keys(COOKIES) as CookieKey[]).map(key => [key, cookies[key] ?? ""])
  ) as Record<CookieKey, string>;
  return {
    ...forwarded,
    "user-agent": cookies.ua ?? "",
    lat: validCoordinates ? lat : "",
    lng: validCoordinates ? lng : ""
  };
}
