import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";
import { getSiteUrl } from "@/lib/site-url";

export function detectDeviceWorkup(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") ?? "US";
  const region =
    request.headers.get("x-vercel-ip-country-region") ?? "Illinois";
  const city = request.headers.get("x-vercel-ip-city") ?? "Chicago";
  const lng = request.headers.get("x-vercel-ip-longitude") ?? "-87.8966849";
  const lat = request.headers.get("x-vercel-ip-latitude") ?? "41.8338486";
  const postalCode = request.headers.get("x-vercel-ip-postal-code") ?? "60010";
  const ip = request.headers.get("x-vercel-forwarded-for") ?? "127.0.0.1";
  const tz = request.headers.get("x-vercel-ip-timezone") ?? "America/Chicago";
  const { os, device, ua, browser, cpu } = userAgent(request);
  /**
   * `'arm' | 'arm64' | 'ia32' | 'loong64' | 'mips' | 'mipsel' | 'ppc64' | 'riscv64' | 's390x' | 'x64'`
   */
  const arch = cpu.architecture ?? "x64";
  const isMac = /(mac)/gim.test(os?.name ?? "") ?? false;
  const latlng = `${lat},${lng}` as const;
  const browserName = browser.name ?? "Chrome";
  const browserVersion = browser.version ?? "147.0.7727.49";
  const { hostname } = request.nextUrl;

  const accept = request.headers.get("accept-language") ?? "";
  const m = accept.match(
    /^s*([A-Za-z]{1,8}(?:-[A-Za-z]{1,8})*)(?:;q=[0-9.]+)?/
  );

  const isIOS = /(ios|iphone|ipad|iwatch)/i.test(ua);

  const ios = `${isIOS}` as const;

  const viewport = device?.type === "mobile" ? "mobile" : "desktop";

  let locale = m?.[1] ?? "en-US";

  if (!locale.includes("-")) {
    locale = `${locale.toLowerCase()}-${country}`;
  }

  const obj = {
    hostname,
    locale,
    viewport,
    browserName,
    browserVersion,
    ios,
    latlng,
    arch,
    tz,
    ua,
    ip,
    country,
    city,
    isMac: `${isMac}`,
    region,
    postalCode
  } as const;

  return obj;
}
export function getCookieConfig(env?: typeof process.env.VERCEL_ENV) {
  const s = getSiteUrl(env);
  let d: ".drisdell-dev.vercel.app" | ".drisdell.com" | undefined = undefined;

  if (s === "http://localhost:3001") {
    d = undefined;
  } else if (s === "https://drisdell-dev.vercel.app") {
    d = ".drisdell-dev.vercel.app";
  } else {
    d = ".drisdell.com";
  }

  return {
    domain: d,
    path: "/",
    secure: typeof d !== "undefined",
    sameSite: "lax",
    httpOnly: false
  } as const;
}

export function detectDeviceAndSetCookies(
  request: NextRequest,
  response: NextResponse
) {
  const config = getCookieConfig(process.env.VERCEL_ENV);

  const obj = detectDeviceWorkup(request);

  for (const key of Object.keys(obj)) {
    if (request.cookies.has(key)) {
      response.cookies.delete(key);
    }
  }

  for (const [k, v] of Object.entries(obj)) {
    response.cookies.set(k, v, config);
  }

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
