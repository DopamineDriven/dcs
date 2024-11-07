import type { NextRequest } from "next/server";
import { NextResponse, userAgent, userAgentFromString } from "next/server";
import type { UserAgent } from "./api";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reqHeaders = new Headers(request.headers);
  const { ua } = userAgent({ headers: reqHeaders });
  const uaObj: globalThis.UserAgent = userAgentFromString(ua);
  const qr = searchParams.get("qr") ?? "";
  const ip = reqHeaders.get("X-Forwarded-For") ?? "";
  if (searchParams.has("code")) {
    return NextResponse.json(
      { userAgentObject: uaObj, qr, ua, ip },
      {
        status: 200
      }
    ) satisfies NextResponse<{
      userAgentObject: UserAgent;
      qr: string;
      ua: string;
      ip: string;
    }>;
  }
  return NextResponse.json(
    { userAgentObject: uaObj, qr, ua, ip },
    {
      status: 200
    }
  ) satisfies NextResponse<{
    userAgentObject: UserAgent;
    qr: string;
    ua: string;
    ip: string;
  }>;
}
