/**
 * latlng cookie is in form of lat,lng
 */
export function toLatLng(s: string) {
  const [lat, lng] = [
    s.slice(0, s.lastIndexOf(",")),
    s.slice(s.lastIndexOf(",") + 1)
  ];
  return { lat, lng };
}
