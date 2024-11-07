export function getYear(date: typeof Date) {
  return (
    new Date(date.now())
      .toISOString()
      ?.split(/([T])/gim)?.[0]
      ?.split(/([-])/gim)?.[0]
      ?.toString() ?? ""
  );
}
