import {
  NextRequest,
  NextResponse,
  userAgent,
  userAgentFromString
} from "next/server";
import { geolocation, ipAddress } from "@vercel/functions";


/* eslint-disable */

export default async function middleware(req: NextRequest) {
  const { ua, device, engine, os, browser, isBot, cpu } = userAgent({
    headers: req.headers
  });
  const geo = geolocation(req);
  const getIp = ipAddress(req);

  const url = req.nextUrl;

  const qr = url.searchParams.get("qr") ?? "";

  const headers = req.headers;

  const getUAData = userAgentFromString(ua);

  const iPhoneiPadParser = (props: string | null) =>
    props ? props.split(/([;])/gim)?.[0]?.split(/([(])/gim)?.[2] : null;

  const deviceSpecificationParser = (props: string | null) =>
    props ? props.split(/([(])/gim)?.[2]?.split(/([)])/gim)?.[0] : null;

  const handleApple = iPhoneiPadParser(ua);

  const matchedPath = req.nextUrl.pathname || "";

  const operatingSystem = os?.name || "Windows";

  const operatingSystemVersion = os?.version || "";

  const osWithVersion = operatingSystem + " " + operatingSystemVersion;

  const countryVercel = geo?.country ? geo?.country : "US";

  const bot = isBot === true ? "true" : "false";

  const architecture = cpu?.architecture || "";

  const userBrowserName = browser?.name || "Chrome";

  const userBrowserVersion = browser?.version || "";

  const userBrowser = userBrowserName + " " + userBrowserVersion;

  const countryIso3166Vercel = geo?.country ? geo?.country : "unknown";

  const cityVercel = geo?.city ? geo?.city : "Chicago";

  const regionVercel = geo?.region ? geo?.region : "IL";

  const latVercel = geo?.latitude ? geo?.latitude : "42.360082499999997196";

  const lngVercel = geo?.longitude ? geo?.longitude : "-71.058880099999996105";

  const ipVercel = getIp ? getIp : "0.0.0.0";

  const tz = headers.get("x-vercel-ip-timezone") ?? "";

  const deviceModel = getUAData.device?.model
    ? getUAData.device?.model
    : (device?.model ?? "");

  const deviceVendor = getUAData.device?.vendor
    ? getUAData.device.vendor
    : (device?.vendor ?? "");

  const engineName = getUAData.engine?.name
    ? getUAData.engine?.name
    : (engine.name ?? "");

  const getLoc = headers.get("accept-language")?.split(",")?.[0] || "en-US";

  const code = url.searchParams.get("code");

  headers.set("Access-Control-Allow-Origin", "*");

  url.searchParams.set(
    "userDevice",
    handleApple || getUAData.device.model || ""
  );

  url.searchParams.set(
    "userSpecifications",
    deviceSpecificationParser(ua) || ""
  );

  url.searchParams.set("browserName", userBrowserName);

  url.searchParams.set("browserVersion", userBrowserVersion);

  url.searchParams.set("match", matchedPath);

  url.searchParams.set("locale", getLoc);

  url.searchParams.set("deviceModel", deviceModel);

  url.searchParams.set("deviceVendor", deviceVendor);

  url.searchParams.set("ip", ipVercel);

  url.searchParams.set("engineName", engineName);

  url.searchParams.set("os", osWithVersion);

  url.searchParams.set("isBot", bot);

  url.searchParams.set("architecture", architecture);

  url.searchParams.set("browser", userBrowser);

  url.searchParams.set("country", countryVercel);

  url.searchParams.set("countryIso", countryIso3166Vercel);

  url.searchParams.set("city", cityVercel);

  url.searchParams.set("region", regionVercel);

  url.searchParams.set("lat", latVercel);

  code ? url.searchParams.set("code", code) : null;

  url.searchParams.set("lng", lngVercel);

  url.searchParams.set("ua", ua);

  url.searchParams.set("tz", tz);

  getLoc ? url.searchParams.set("loc", getLoc) : null;
  if (/true/gi.test(qr) === true) {
    return NextResponse.rewrite(new URL("/qr", url));
  } else if (/true/gi.test(qr) === false && url.pathname.startsWith("/qr")) {
    return NextResponse.redirect(new URL("/", url));
  } else {
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
