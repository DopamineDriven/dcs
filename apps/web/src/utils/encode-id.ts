export function EncodeId<const First extends string, const Last extends string>(
  first: First,
  last: Last
) {
  return Buffer.from(`${first}.${last}`, "utf-8").toString("binary");
}
