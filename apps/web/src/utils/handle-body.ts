import "server-only";
import {
  alpha2ToCountryCode,
  getDataByAlpha2
} from "@/lib/alpha2-to-country-code";
import { getProductionUrl } from "@/lib/site-url";

export type SubmissionBody = {
  body: string;
  city: string;
  lng: string;
  lat: string;
  country: string;
  locale: string;
  region: string;
  postalCode: string;
  ip: string;
  ua: string;
  tz: string;
  deviceType: string;
  browserName: string;
  browserVersion: string;
  qrAccess: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isAlpha2(value: string): value is keyof typeof alpha2ToCountryCode {
  return Object.hasOwn(alpha2ToCountryCode, value);
}

function metadataRow(label: string, value: string) {
  return `<tr><th scope="row" align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value || "Not available")}</td></tr>`;
}

export function handleBody(metadata: SubmissionBody) {
  const code = metadata.country.trim().toUpperCase();
  const country = isAlpha2(code) ? getDataByAlpha2(code) : undefined;
  const flagUrl = country
    ? new URL(`/flags/${country.alpha2}.svg`, getProductionUrl).href
    : undefined;
  // Derive markup from the allowlisted ISO code, never from client-supplied SVG or URLs.
  const countryHtml =
    country && flagUrl
      ? `<img src="${escapeHtml(flagUrl)}" alt="${escapeHtml(country.fullName)} flag" width="${24 * country.aspectRatio}" height="24" style="vertical-align:middle"> ${escapeHtml(country.fullName)} (${country.alpha2})`
      : escapeHtml(code || "Not available");

  const latitude = Number(metadata.lat);
  const longitude = Number(metadata.lng);
  const hasCoordinates =
    metadata.lat.trim() !== "" &&
    metadata.lng.trim() !== "" &&
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    Math.abs(latitude) <= 90 &&
    Math.abs(longitude) <= 180;
  const locationUrl = new URL("https://www.latlong.net/c/");
  locationUrl.searchParams.set("lat", String(latitude));
  locationUrl.searchParams.set("long", String(longitude));

  return `<div>${escapeHtml(metadata.body).replace(/\r\n|\r|\n/g, "<br>")}</div>
<hr>
<h3>Submission metadata</h3>
<table cellpadding="6" cellspacing="0">
<tr><th scope="row" align="left" valign="top">Country</th><td>${countryHtml}</td></tr>
${metadataRow("City", metadata.city)}
${metadataRow("Region", metadata.region)}
${metadataRow("Postal code", metadata.postalCode)}
${metadataRow("Locale", metadata.locale)}
${metadataRow("Coordinates", hasCoordinates ? `[${metadata.lat}, ${metadata.lng}]` : "")}
${hasCoordinates ? `<tr><th scope="row" align="left">Reverse geo lookup</th><td><a href="${escapeHtml(locationUrl.href)}">View coordinates</a></td></tr>` : ""}
${metadataRow("Timezone", metadata.tz)}
${metadataRow("IP", metadata.ip)}
${metadataRow("User agent", metadata.ua)}
${metadataRow("Device", metadata.deviceType)}
${metadataRow("Browser", [metadata.browserName, metadata.browserVersion].filter(Boolean).join(" "))}
${metadataRow("QR access", metadata.qrAccess === "true" ? "Yes" : metadata.qrAccess === "false" ? "No" : "")}
</table>`;
}
