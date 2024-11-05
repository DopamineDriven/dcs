export function EncodeClientMutationId<
  const First extends string,
  const Last extends string
>(first: First, last: Last) {
  return Buffer.from(`${first}.${last}`, "utf-8").toString("base64");
}
