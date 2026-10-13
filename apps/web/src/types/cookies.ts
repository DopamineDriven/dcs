export type Rm<T, P extends keyof T = keyof T> = { [S in keyof T as Exclude<S, P>]: T[S]; };

export const COOKIES = {
  browserVersion: "browserVersion",
  browserName: "browserName",
  hostname: "hostname",
  viewport: "viewport",
  ios: "ios",
  arch: "arch",
  latlng: "latlng",
  tz: "tz",
  ip: "ip",
  qr_access: "qr_access",
  ua: "ua",
  country: "country",
  city: "city",
  isMac: "isMac",
  region: "region",
  postalCode: "postalCode",
  locale: "locale"
} as const;

export function isValidCookieKey(c: string) {
  return (
    c === "browserName" ||
    c === "browserVersion" ||
    c === "hostname" ||
    c === "viewport" ||
    c === "ios" ||
    c === "latlng" ||
    c === "tz" ||
    c === "arch" ||
    c === "ip" ||
    c === "qr_access" ||
    c === "ua" ||
    c === "country" ||
    c === "city" ||
    c === "isMac" ||
    c === "region" ||
    c === "postalCode" ||
    c === "locale"
  );
}

export type ArchUnion =
  | "arm"
  | "arm64"
  | "ia32"
  | "loong64"
  | "mips"
  | "mipsel"
  | "ppc64"
  | "riscv64"
  | "s390x"
  | "x64";

export type CookieValue = {
  hostname: string;
  browserName: string;
  browserVersion: string;
  viewport: "mobile" | "desktop" | (string & {});
  ip: string;
  ua: string;
  ios: "true" | "false" | (string & {});
  latlng: string;
  tz: string;
  region: string;
  qr_access: "true" | "false" | (string & {});
  arch: ArchUnion | (string & {});
  postalCode: string;
  country: string;
  city: string;
  isMac: "true" | "false" | (string & {});
  locale: string;
};

export type CookieKey = keyof typeof COOKIES;

export type GetCookie<
  T extends keyof CookieValue = keyof CookieValue,
  ToOptional = false
> = ToOptional extends true
  ? { [P in T]?: CookieValue[P] }[T]
  : {
      [P in T]: CookieValue[P];
    }[T];

export interface CookieContextType {
  get: <const K extends CookieKey>(key: K) => GetCookie<K> | undefined;
  set: <const K extends CookieKey>(
    key: K,
    value: CookieValue[K],
    options?: Cookies.CookieAttributes
  ) => void;
  remove: (key: CookieKey) => void;
  getAll: () => Partial<CookieValue>;
  getTargeted: <const V extends keyof CookieValue>(
    k: readonly V[]
  ) => FilterResults<V>;
}
export type FilterBySelect<Q extends keyof CookieValue> = Exclude<
  Exclude<Q, CookieValue>,
  CookieValue
>;

export type FilterResults<S extends keyof CookieValue> = Rm<
  CookieValue,
  Exclude<keyof CookieValue, FilterBySelect<S>>
>;

export interface FullRes<S extends keyof CookieValue = keyof CookieValue> {
  cookies: FilterResults<S>[];
}

export type CookieOpts<T extends keyof CookieValue = keyof CookieValue> = {
  select: readonly T[];
};

export function handleSelect<
  const V extends keyof CookieValue = keyof CookieValue
>(select: CookieOpts<V>["select"]) {
  const a = Array.of<readonly [string, string | number | boolean]>();

  if (select && select.length > 0) {
    const k = select.join(",");

    const tuple = ["select", k] as const;
    a.push(tuple);
  }

  return select;
}
