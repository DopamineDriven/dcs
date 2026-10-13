export function DateCreatedHelper(date: typeof Date) {
  const d = new Date(date.now()).toISOString();
  // wp doesn't accept the Z timezone info on teh ISO string
  return `${d.slice(0, d.lastIndexOf("Z"))} UTC`;
}
