import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  detectDeviceAndSetCookies,
  getCookieConfig
} from "@/lib/server-cookies";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|opengraph-image|twitter-image).*)"
  ]
};

export default async function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const config = getCookieConfig(process.env.VERCEL_ENV);

  const isQrEntry = url.searchParams.get("qr") === "true";

  const isQrRoute = url.pathname === "/qr" || url.pathname.startsWith("/qr/");

  const hasQrAccess = req.cookies.get("qr_access")?.value === "true";

  const qrAccess = isQrEntry || hasQrAccess ? "true" : "false";

  let response = NextResponse.next();

  if (isQrEntry) {
    url.pathname = "/qr";
    url.searchParams.delete("qr");
    response = NextResponse.redirect(url);
  } else if (isQrRoute && !hasQrAccess) {
    url.pathname = "/";
    url.searchParams.delete("qr");
    response = NextResponse.redirect(url);
  }
  response.cookies.set("qr_access", qrAccess, config);
  if (isQrEntry || isQrRoute) {
    response.headers.set("Cache-Control", "private, no-store");
  }

  return detectDeviceAndSetCookies(req, response);
}
