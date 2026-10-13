import type { CookieKey, CookieValue, FilterResults } from "@/types/cookies";
import { toLatLng } from "@/lib/latlng";

const cookieFields = [
  ["ua", "user-agent"],
  ["ip", "ip"],
  ["tz", "tz"],
  ["city", "city"],
  ["country", "country"],
  ["locale", "locale"],
  ["region", "region"],
  ["postalCode", "postalCode"],
  ["viewport", "deviceType"],
  ["browserName", "browserName"],
  ["browserVersion", "browserVersion"],
  ["qr_access", "qrAccess"]
] as const satisfies [CookieKey, string][];

export const submissionCookieKeys = [
  ...cookieFields.map(([key]) => key),
  "latlng"
] as const satisfies CookieKey[];

export function appendSubmissionMetadata(
  formData: FormData,
  cookies: FilterResults<CookieKey>
) {
  for (const [key, field] of cookieFields) {
    formData.set(field, cookies[key] ?? "");
  }
  const { lat, lng } = toLatLng(
    cookies.latlng?.includes(",") ? cookies.latlng : ""
  );
  formData.set("lat", lat);
  formData.set("lng", lng);
}
