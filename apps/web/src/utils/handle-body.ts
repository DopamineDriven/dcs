export type SubmissionBody = {
  body: string;
  city: string;
  lat: string;
  lng: string;
  tz: string;
  ip: string;
  ua: string;
  /** Not sent by the current forms; kept so the inline actions can pass it through. */
  flag?: string;
  country: string;
  region: string;
  postalCode: string;
  locale: string;
  deviceType: string;
  browserName: string;
  browserVersion: string;
  qrAccess: string;
};

/** Message body followed by one metadata entry per blank-line-separated row. */
export function handleBody({
  body,
  city,
  lat,
  lng,
  tz,
  ip,
  ua,
  flag = "",
  country,
  region,
  postalCode,
  locale,
  deviceType,
  browserName,
  browserVersion,
  qrAccess
}: SubmissionBody) {
  return `${body}\n\n --- METADATA -- \n\ncity: ${city}\n\ncoordinates: [${lat},${lng}]\n\nreverse geo lookup: https://www.latlong.net/c/?lat=${lat}&long=${lng}\n\ntimezone: ${tz}\n\nip: ${ip}\n\nuser-agent: ${ua}\n\nflag: ${flag}\n\ncountry: ${country}\n\nregion: ${region}\n\npostal code: ${postalCode}\n\nlocale: ${locale}\n\ndevice type: ${deviceType}\n\nbrowser name: ${browserName}\n\nbrowser version: ${browserVersion}\n\nqr access: ${qrAccess}` as const;
}
