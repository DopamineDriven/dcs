export function formatHelper(f: string) {
  if (/([A-Za-z]+-[A-Za-z]+)/g.test(f) === true) {
    const formatting = f
      .split(/-/g)
      .map(v => v.substring(0, 1).toUpperCase().concat(v.substring(1)))
      .join(" ");
    return formatting;
  } else return f.substring(0, 1).toUpperCase().concat(f.substring(1));
}
