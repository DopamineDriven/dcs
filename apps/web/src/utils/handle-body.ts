export function handleBody({
  city,
  lng,
  lat,
  flag,
  body,
  ip,
  ua,
  tz
}: {
  city: string;
  lng: string;
  lat: string;
  flag: string;
  body: string;
  ip: string;
  ua: string;
  tz: string;
}) {
  return `${body}\n\n --- \n\n city: ${city}\n\ncoordinates: [${lat},${lng}]\n\ntimezone: ${tz}\n\nip:${ip}\n\nuser-agent: ${ua}\n\nflag: ${flag}` as const;
}