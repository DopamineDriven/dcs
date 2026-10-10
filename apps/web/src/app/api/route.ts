import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";
import { geolocation } from "@vercel/functions";
import { UserAgentProps } from "@/types/helpers";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const geo = geolocation(request);
  const lat = geo?.latitude ?? "";
  const lng = geo?.longitude ?? "";
  const flag = geo?.flag ?? "";
  const reqHeaders = new Headers(request.headers);

  const uaObj = userAgent(request);
  const qr = searchParams.get("qr") ?? "";
  const ip = reqHeaders.get("X-Forwarded-For") ?? "";
  const tz = reqHeaders.get("x-vercel-ip-timezone") ?? "";
  const city = reqHeaders.get("X-Vercel-IP-City") ?? geo.city ?? "";

  if (searchParams.has("code")) {
    return NextResponse.json(
      {
        userAgentObject: uaObj,
        qr,
        ua: uaObj.ua,
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
      userAgentObject: UserAgentProps;
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
      ua: uaObj.ua,
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
  );
}
