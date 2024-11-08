import type { NextRequest } from "next/server";
import { NextResponse, userAgent, userAgentFromString } from "next/server";
import { geolocation } from "@vercel/functions";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const geo = geolocation(request);
  const lat = geo?.latitude ?? "";
  const lng = geo?.longitude ?? "";
  const flag = geo?.flag ?? "";
  const reqHeaders = new Headers(request.headers);
  const { ua } = userAgent({ headers: reqHeaders });
  const uaObj: globalThis.UserAgent = userAgentFromString(ua);
  const qr = searchParams.get("qr") ?? "";
  const ip = reqHeaders.get("X-Forwarded-For") ?? "";
  const tz = reqHeaders.get("x-vercel-ip-timezone") ?? "";
  const city = reqHeaders.get("X-Vercel-IP-City") ?? geo.city ?? "";


  if (searchParams.has("code")) {
    return NextResponse.json(
      {
        userAgentObject: uaObj,
        qr,
        ua,
        ip,
        tz,
        city,
        lat,
        lng,
        flag
      },
      {
        status: 200
      }
    ) satisfies NextResponse<{
      userAgentObject: globalThis.UserAgent;
      qr: string;
      ua: string;
      ip: string;
      tz: string;
      city: string;
      lat: string;
      lng: string;
      flag: string;
    }>;
  }
  return NextResponse.json(
    {
      userAgentObject: uaObj,
      qr,
      ua,
      ip,
      tz,
      city,
      lat,
      lng,
      flag
    },
    {
      status: 200
    }
  ) satisfies NextResponse<{
    userAgentObject: globalThis.UserAgent;
    qr: string;
    ua: string;
    ip: string;
    tz: string;
    city: string;
    lat: string;
    lng: string;
    flag: string;
  }>;
}
