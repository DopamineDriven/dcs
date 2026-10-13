import type { UserAgentProps } from "@/types/helpers";

export type ExpectedRes = {
  qr: string;
  userAgentObject: UserAgentProps;
  ua: string;
  ip: string;
  tz: string;
  city: string;
  lat: string;
  lng: string;
  flag: string;
};
