export function DateCreatedHelper(date: typeof Date) {
  const created = new Date(date.now()).toISOString().split(/Z/)?.[0] ?? "";
  return `${created} UTC`;
}
