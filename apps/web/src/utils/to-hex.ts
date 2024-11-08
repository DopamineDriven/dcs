export function toHex<const T extends string>(str: T) {
  return Buffer.from(str, "utf-8").toString("hex");
}
