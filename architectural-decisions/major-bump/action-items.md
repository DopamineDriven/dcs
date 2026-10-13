# Major version migration: action items

**Status:** Draft for review; application changes await approval.  
**Inspection date:** October 4, 2026.  
**Working repository:** `/home/dopaminedriven/wcd/dcs/dcs`.  
**Preset reference:** `/home/dopaminedriven/wcd/dcs/dcs-2026`, generated with `@d0paminedriven/turbogen` 10.0.1.

## Quick navigation

- [Action register and implementation order](#3-implementation-order-and-action-register)
- [Proxy, QR routing, and cookie scope](#4-proxy-migration-preserve-request-behavior)
- [Cookie types, client/server access, and layout](#5-cookie-types-client-context-and-server-access)
- [Tailwind configuration, tokens, plugins, and fonts](#6-tailwind-v3--v4-mapping-by-configuration-section)
- [Global CSS, modules, and utility replacements](#7-global-css-and-component-migration)
- [Build graph, CMS, client libraries, sitemap, and deployment](#8-application-and-deployment-compatibility)
- [Validation examples](#9-validation-plan-after-approval)
- [Decisions awaiting review](#10-review-decisions-before-the-relevant-implementation-batch)

## 1. Objective and migration contract

Finish transplanting the generated workspace presets into the existing DCS application, restore a deployable build, and preserve the client's existing functionality and appearance through the Next.js, React, and Tailwind upgrades.

This document is the review artifact requested before implementation. Its proposed changes, commands, and verification steps have not been executed as part of drafting it. The sibling `dcs-2026` repository supplies presets and reference implementations; the existing repository supplies application behavior and content.

### Reading the code examples

**Before** identifies whether the excerpt comes from the committed application, the current working tree, or the generated preset. **After — proposed** shows a reviewable migration shape, not code already installed in the app. **After — preserved/current** marks behavior that should remain or work already present. Snippets are focused excerpts; omitted fields/helpers are identified in the surrounding text. New helper names shown in examples are proposed interfaces, not existing exports.

Compatibility means:

- Existing routes, WordPress content, child-page navigation, metadata, and form submissions continue working.
- Proxy preserves the legacy QR rules, request enrichment, and fallback values. Cookie metadata is introduced alongside that contract.
- Contact, event, and resume forms retain their metadata fields, confirmation/error handling, and upload behavior.
- Navigation, mobile scroll locking, carousel sizing, Basis Grotesque typography, DCS colors, and view transitions retain their existing behavior.
- About Us retains its local `/about-us.mp3` player and white background with blue particles. Home and Consultants retain blue backgrounds with white particles.
- Tailwind configuration lives in CSS. Delete `apps/web/tailwind.config.ts` only after every active section has a mapped replacement and its consumers work.
- Already transplanted presets are reconciled with application requirements. Every intentional behavior change is recorded separately from compatibility work.

## 2. Sources and current state

There are three states to compare: the committed application before the bump, the generated preset, and the current working tree. The current tree already contains substantial user changes; it is an intermediate migration state.

### Sources of truth

| Area | Application reference | Preset/current target |
| --- | --- | --- |
| Workspace | Committed root/app manifests and Turbo tasks | Sibling root `package.json`, workspace catalogs, and transplanted `tooling/*` / `packages/*` |
| Request behavior | `apps/web/src/middleware.old.md`; same logic is in committed `middleware.ts` | `apps/web/src/proxy.ts` and `src/lib/server-cookies.ts` |
| Cookie API | Existing `src/hooks/use-cookies.ts` and `/api` response consumers | Sibling `src/context/cookie-context.tsx`, `src/types/cookies.ts`, and `src/lib/server-cookies.ts` |
| Providers and shell | Committed/current `src/app/layout.tsx`, existing Nav/Footer | Sibling layout provider composition; keep the DCS shell |
| Styling | `src/app/old-global.css.md`, committed global CSS, `tailwind.config.ts`, component CSS modules | Current `src/app/global.css`, `packages/ui/src/globals.css`, sibling `src/app/globals.css` |
| Fonts | `src/styles/fonts.ts` and `src/app/fonts/*.woff2` | Copied `public/fonts/*.woff2` and current CSS font faces |
| CMS and forms | Queries, fetcher, generated GraphQL types, `/api`, actions, form components | Compatible versions and explicit client/server metadata access |

`middleware.old.md` contains the same middleware implementation twice inside its code fence. Treat it as one behavior reference.

### Version snapshot

These are manifest/catalog ranges observed locally, not claims that a registry's latest version has been verified.

| Item | Before | Current / preset direction |
| --- | --- | --- |
| Next.js | `^15.0.3` | Catalog `^16.3.8` |
| React / React DOM | `^18.3.1` | Catalog `^19.3.0` |
| Tailwind CSS | `^3.4.15` | Catalog `^4.3.3`; `@tailwindcss/postcss` |
| Package manager | Root pnpm 9.13.1 | Current root pnpm 11.21.0; sibling preset pnpm 10.33.2 |
| Node | Root engine `>=20` | Current/preset engine `>=24`; local inspection used Node 26.7.0 |
| Shared packages | Original ESLint/Prettier/TypeScript/Jest layout | Built ESLint/Prettier/TypeScript/Vitest presets plus `@dcs/types` and `@dcs/ui` |
| Motion | `framer-motion` dependency | `motion` catalog `^14.0.0`, Motion+ alias `^3.0.0` |
| Particles | Engine/full loader 3.x | Catalog engine/react/slim `^4.4.0`; loader reconciliation still required |

### Concrete gaps already observed

1. Current proxy only sets metadata cookies and calls `NextResponse.next()`. Legacy QR rewrites/redirects and enriched query parameters are absent.
2. Current proxy matcher includes `/api`; the legacy matcher excludes it. The new matcher also excludes Open Graph/Twitter image paths that the legacy matcher did not exclude.
3. The cookie helper changes several legacy fallbacks and locale parsing rules. Its `.drisdell.com` domain is selected for every non-development environment, including preview hosts.
4. Cookie context and cookie types are present in the sibling scaffold but are not present in the working application's corresponding directories. The current root layout does not mount `CookieProvider`.
5. Forms use SWR and `/api?code=yes` for metadata. They do not currently use the generated cookie context or read the middleware's enriched page query directly.
6. The deleted `apps/web/global.d.ts` supplied `globalThis.UserAgent`, which `/api`, `ExpectedRes`, and SWR consumers still reference.
7. Current CSS lacks the DCS/flirt/banner/stone-mist/custom-gray palettes and the ten legacy `font-basis-grotesque-pro-*` utility definitions.
8. `--slide-height`, `--slide-spacing`, and `--slide-size` are absent from current global CSS, but carousel CSS still uses them. Nav still adds `no-scroll`, whose old global rule also needs restoring.
9. All six component CSS modules use `@apply`; none currently declares a v4 `@reference` to the application's CSS definitions.
10. Current global CSS repeats `ripple-wave`, `fade-in`, `scan`, and `pulse-glow` keyframes. Its opacity-based `shimmer` conflicts with the original translating skeleton animation.
11. The preset/current `max-w-9xl` token is 120rem; the legacy value is 121rem. Legacy `w-9xl` is separately 120rem.
12. `postbuild` still invokes `next-sitemap --config next-sitemap.mjs`, although both that dependency and its config have been removed from the current tree.
13. `ParticleHeader.tsx` still imports `loadFull` from `tsparticles`, and `Nav.tsx` still imports `lodash.throttle`; both direct dependencies were removed from the current manifest.
14. The old PWA wrapper was removed from Next config while generated service-worker files remain in `public/`. Its intended continuation needs an explicit decision.

These are inspection findings. No new build, browser, or deployment result is asserted here.

## 3. Implementation order and action register

Each item stays open until its proposed change is approved and its acceptance check passes. P0 restores build/runtime/visual compatibility; P1 completes integration and release checks; P2 covers optional cleanup after parity.

| ID | Priority | Before / current gap | Proposed after | Main files | Acceptance check |
| --- | --- | --- | --- | --- | --- |
| A01 | P0 | Mixed old hooks/imports and new catalog dependencies | Reconciled direct dependencies, build scripts, package exports, and runtime targets | Root/app manifests, workspace YAML, Turbo, `tooling/*`, `packages/*` | Install/build resolves every active import and required preset |
| A02 | P0 | Edge middleware archived; preset proxy drops QR/query behavior | Node proxy reproduces the legacy request contract and attaches cookies to the actual returned response | `src/proxy.ts`, `src/lib/server-cookies.ts` | Routing matrix and metadata comparisons pass |
| A03 | P0 | Cookie schema missing; old UserAgent declaration deleted | Shared typed metadata/cookie contract with required legacy fields and accurately optional cookie reads | `src/types/cookies.ts`, `src/types/next.ts`, `index.d.ts`, `@dcs/types` as needed | API/forms/context compile against the same definitions |
| A04 | P0 | Helper changes fallbacks and uses production domain on previews | Request-scoped extraction with legacy-compatible values and host-appropriate cookie attributes | `src/lib/server-cookies.ts` | Cookies work on local, preview, apex, and www hosts |
| A05 | P0 | Generated client provider is not transplanted | Typed `CookieProvider` and `useCookiesCtx` available across the DCS client tree | `src/context/cookie-context.tsx` | Typed get/set/remove/select operations work after hydration |
| A06 | P1 | No defined server counterpart to browser cookie context | Typed server access at the request boundary; explicitly assessed caching impact | Server cookie reader and consuming routes/actions | First request and subsequent request behavior agree with the documented contract |
| A07 | P0 | Layout mixes new fonts/scripts with old shell; provider missing | Existing DCS layout mounts the cookie provider and preserves navigation/content/metadata | `src/app/layout.tsx` | Full and client navigation render the same DCS shell |
| A08 | P0 | Legacy Tailwind config still contains active tokens/plugins | Section-by-section CSS configuration preserves names and values | `src/app/global.css`, `tailwind.config.ts` | Token/utility inventory has no unmapped active entries |
| A09 | P0 | Legacy global rules and v4 module references are missing | Restored DCS global behavior, referenced CSS modules, and targeted utility migrations | Global CSS and six CSS modules | No unknown `@apply` utilities; navigation/carousels/transitions work |
| A10 | P0 | One new `font-basis` family does not supply legacy utility names | Exact legacy font-file mappings coexist with new preset font utilities | Global CSS, layout, font assets/helper | Computed fonts, weight/style, and text layout match the baseline |
| A11 | P0 | Framework/data dependency major bumps are in progress | Existing WordPress fetching, routes, forms, uploads, and local About audio work | Queries, fetcher, `/api`, actions, form components | Existing route and submission contracts pass |
| A12 | P1 | Particles/Motion/carousel/UI versions changed | Supported imports and equivalent interactions across all rendered components | Particle header, Nav, UI components, manifests | Particle colors/interactions, dropdowns, dialogs, carousels, and toast behavior match |
| A13 | P0 | Sitemap build hook cannot resolve removed files | A complete sitemap generation approach with matching metadata/robots URLs | App scripts, sitemap implementation, robots/manifest/site-url | Build completes and `/sitemap.xml` / `/robots.txt` are valid |
| A14 | P1 | PWA integration removed; artifacts remain | Reviewed PWA continuation or explicit approved retirement with matching artifact/registration cleanup | Next config, app metadata, public worker assets | Existing worker registrations do not serve stale application assets |
| A15 | P1 | New preset build graph and old formatter instance need validation | Working preset build/typecheck/lint sequence and refreshed editor formatter | Tooling manifests/configs, Turbo, editor session | Local CLI and editor use the shared config, including no trailing commas |
| A16 | P1 | Local migration has not been validated against Vercel settings | Reviewed release candidate with matching runtime, build command, registry access, and env names | Vercel project settings and release checklist | Preview passes route/cookie/style checks before production release |
| A17 | P2 | Legacy reference files and unused dependencies remain | Optional cleanup only after compatibility checks and review | Archives, unused integrations/assets | Every deletion has a recorded replacement or confirmed lack of consumers |

Suggested sequence: **A01 + A13 → A02–A05 → A07–A10 → A06 + A11–A12 → A14–A16 → optional A17**. CSS and request work can be reviewed as separate implementation batches, but release validation covers their interaction.

## 4. Proxy migration: preserve request behavior

### A02: entry point, matcher, and response composition

| Section | Before | Proposed after |
| --- | --- | --- |
| Entry point | `middleware.ts` exports `middleware` | `src/proxy.ts` exports the single proxy function |
| Runtime | Legacy middleware ran at Edge | Proxy uses Next's Node runtime; omit a proxy `runtime` export/config option |
| Matcher | `/((?!api|_next/static|_next/image|favicon.ico).*)` | Begin with the legacy coverage. Review any extra metadata/static-asset exclusions separately |
| Request extraction | `userAgent`, `userAgentFromString`, `geolocation`, `ipAddress` | Preserve the extraction contract in the helper used by proxy |
| Request enrichment | Writes the legacy keys to a modified `nextUrl` | Clone the incoming URL, preserve unrelated query parameters, and reproduce the legacy enriched-query behavior |
| Cookie enrichment | None from the archived middleware | Attach typed metadata cookies to the rewrite/redirect/continuation response that is actually returned |
| CORS header | Mutates the incoming request headers with `Access-Control-Allow-Origin: *` | Record this as a request-header mutation; explicitly decide whether a response header is desired. The copied helper currently sets a response header instead |

Proxy has a Node runtime and cannot select a runtime option. It executes separately from application rendering; use request/response data to cross that boundary. [Next.js proxy reference](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#runtime).

#### Code: proxy must return the routing response with cookies attached

**Before — current transplanted `src/proxy.ts`:**

```ts
export default async function proxy(req: NextRequest) {
  return detectDeviceAndSetCookies(req, NextResponse.next());
}
```

**After — proposed composition:** `getRequestMetadata` returns the complete legacy query map plus the reviewed cookie map; `setMetadataCookies` writes those cookies onto the response supplied to it. Their implementations must follow the inventories below.

```ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getRequestMetadata,
  setMetadataCookies
} from "@/lib/server-cookies";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const metadata = getRequestMetadata(request);
  const qr = url.searchParams.get("qr") || "";

  for (const [key, value] of Object.entries(metadata.legacyQuery)) {
    url.searchParams.set(key, value);
  }

  let response: NextResponse;

  if (/true/gi.test(qr)) {
    response = NextResponse.rewrite(new URL("/qr", url));
  } else if (url.pathname.startsWith("/qr")) {
    response = NextResponse.redirect(new URL("/", url));
  } else {
    response = NextResponse.rewrite(url);
  }

  return setMetadataCookies(request, response, metadata.cookies);
}
```

There is no proxy `runtime` export in this example. The helper must not replace the supplied rewrite/redirect with a fresh `NextResponse.next()`.

### QR behavior matrix

| Request condition | Existing result | Required compatibility result |
| --- | --- | --- |
| Any matched path with `qr` containing `true`, ignoring case | Rewrite internally to `/qr` | Same internal rewrite; retain the visible requested path |
| Path starting with `/qr`, with missing/empty/nonmatching `qr` | Redirect to `/` | Same redirect, including the default redirect status |
| Other matched request | Rewrite the enriched URL | Same page destination and enriched-query contract |
| `/api`, Next static/image paths, favicon | Legacy middleware does not run | Same exclusions unless a matcher change is explicitly approved |

The old test is `/true/gi.test(qr)`, not strict equality to `"true"`. Compatibility therefore includes values such as `TRUE` and strings containing `true`. Also, the path check is `startsWith("/qr")`, not exact `/qr` equality.

**Query preservation decision:** The old QR branches construct `new URL("/qr", url)` or `new URL("/", url)`, which discard the source query string. Preserve that existing behavior by default. Carrying QR/enriched parameters into these destinations would be a separately reviewed fix; it must not happen accidentally while replacing the proxy. Ordinary rewrites preserve existing query keys and add/replace metadata keys.

#### Code: QR routing stays the same

**Before — archived middleware branch:**

```ts
if (/true/gi.test(qr) === true) {
  return NextResponse.rewrite(new URL("/qr", url));
} else if (/true/gi.test(qr) === false && url.pathname.startsWith("/qr")) {
  return NextResponse.redirect(new URL("/", url));
} else {
  return NextResponse.rewrite(url);
}
```

**After — proposed routing helper, equivalent branches:**

```ts
function getRoutingResponse(url: URL, qr: string) {
  if (/true/gi.test(qr)) {
    return NextResponse.rewrite(new URL("/qr", url));
  }

  if (url.pathname.startsWith("/qr")) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.rewrite(url);
}
```

For example, `/about-us?qr=TRUE&code=event` still rewrites to `/qr` without that query string. Changing this to `url.pathname = "/qr"` would retain the query string and is therefore a separate behavior change.

### Legacy metadata keys

Every key below needs a destination in the proposed contract. Retain the enriched query names; introduce typed cookie fields/aliases without silently deleting them.

| Group | Legacy keys | Proposed mapping |
| --- | --- | --- |
| Device | `userDevice`, `userSpecifications`, `deviceModel`, `deviceVendor` | Preserve Apple/device parsing and add these fields to the shared request metadata schema |
| Browser | `browserName`, `browserVersion`, `browser`, `engineName` | Preserve separate and combined representations; generated cookies already cover the first two |
| OS / bot / CPU | `os`, `isBot`, `architecture` | Preserve combined OS string and string booleans; extend generated schema |
| Routing / campaign | `match`, `qr`, optional `code` | Preserve requested pathname and query-derived values; never recover QR state solely from a stale cookie |
| Language | `locale`, `loc` | Preserve the legacy first `accept-language` segment and alias |
| Network / raw UA | `ip`, `ua`, `tz` | Retain extraction sources and original fallbacks |
| Location | `country`, `countryIso`, `city`, `region`, `lat`, `lng` | Preserve separate coordinate fields and distinct country fallback semantics |
| Generated additions | Not in legacy query enrichment | Add `hostname`, `viewport`, `ios`, `latlng`, `isMac`, and `postalCode` without changing legacy fields |

#### Code: keep separate latitude/longitude and add the combined value

**Before — archived middleware excerpt:**

```ts
url.searchParams.set("lat", latVercel);
url.searchParams.set("lng", lngVercel);
url.searchParams.set("match", matchedPath);
url.searchParams.set("qr", qr);
```

**After — proposed metadata result excerpt:** the remaining query/cookie fields follow the full inventory above.

```ts
const legacyQuery = {
  lat: latVercel,
  lng: lngVercel,
  match: request.nextUrl.pathname || "",
  qr: request.nextUrl.searchParams.get("qr") || ""
};

const cookieValues = {
  lat: latVercel,
  lng: lngVercel,
  latlng: `${latVercel},${lngVercel}`,
  hostname: request.nextUrl.hostname
};
```

The form/API contract can keep consuming `lat` and `lng`; adding `latlng` does not remove them.

### A04: fallback differences to reconcile

| Field | Legacy value when absent | Current copied helper | Proposed compatibility behavior |
| --- | --- | --- | --- |
| OS | `Windows` plus a space plus empty version | Not exposed | Restore legacy combined string |
| Browser name/version | `Chrome` / empty string | `Chrome` / `147.0.7727.49` | Preserve empty version; do not invent a detected version |
| Combined browser | Name plus a space plus version | Not exposed | Restore the combined value |
| Country / ISO | `US` / `unknown` | `US`; no separate ISO fallback | Preserve the two distinct fields |
| City / region | `Chicago` / `IL` | `Chicago` / `Illinois` | Preserve the old region spelling |
| Latitude | `42.360082499999997196` | `41.8338486` | Keep legacy value pending an explicit location-default correction |
| Longitude | `-71.058880099999996105` | `-87.8966849` | Same compatibility rule; derive `latlng` from the retained pair |
| IP | `ipAddress(req)` or `0.0.0.0` | `x-vercel-forwarded-for` or `127.0.0.1` | Preserve extraction/fallback; assess forwarded chains deliberately |
| Timezone | Header value or empty string | Header value or `America/Chicago` | Preserve empty string |
| Locale | First comma-separated header segment or `en-US` | Regex parsing and country suffix normalization | Preserve legacy `locale`/`loc`; any normalized representation needs a separate name/decision |
| Postal code | Not supplied | `60010` | New field; distinguish an optional preset fallback from actual detected metadata |

The copied locale regex starts with `^s*`, which matches the letter `s`, rather than whitespace. Replacing it with `^\s*` is a parsing correction, but locale normalization still changes the old contract and needs the separate mapping above.

#### Code: preserve the legacy fallback semantics

**Before — current generated helper excerpt:**

```ts
const region = request.headers.get("x-vercel-ip-country-region") ?? "Illinois";
const browserVersion = browser.version ?? "147.0.7727.49";
const tz = request.headers.get("x-vercel-ip-timezone") ?? "America/Chicago";
```

**After — proposed legacy-compatible extraction excerpt:**

```ts
const geo = geolocation(request);
const { browser } = userAgent(request);

const region = geo?.region ? geo.region : "IL";
const browserVersion = browser?.version || "";
const tz = request.headers.get("x-vercel-ip-timezone") ?? "";
const locale = request.headers.get("accept-language")?.split(",")?.[0] || "en-US";
```

The use of truthy fallback versus nullish fallback here follows the old middleware. Any corrected coordinates or normalized language code should be reviewed separately.

### Cookie attributes and lifecycle

- Proposed production scope: share metadata cookies across `drisdell.com` and `www.drisdell.com` only when the actual host belongs to that domain. Use host-only cookies on Vercel previews and localhost; `NODE_ENV !== "development"` alone cannot determine cookie domain.
- Preserve the generated intent of `path: "/"`, `sameSite: "lax"`, readable client metadata, and session lifetime; determine `secure` from the deployment/protocol contract, including a local production server.
- Update metadata cookies consistently on all routing branches. Validate encoded UA/city values and cookies blocked by the browser.
- Use identical path/domain attributes when setting and removing a cookie. Review the helper's delete-then-set loops and the provider's optionless `remove` against that requirement.
- Preserve the existing `dcs_qr` cookie hook: value `accepted`, 365-day expiry, path `/`, SameSite Lax, and its current acceptance state behavior. Metadata refresh must not overwrite or delete this cookie.
- Proxy metadata and this client-readable cookie API are separate from the server WordPress authentication token. Do not place that token into the cookie context or metadata schema.

#### Code: cookie domain follows the actual host

**Before — current copied helper:**

```ts
const domain =
  process.env.NODE_ENV !== "development" ? ".drisdell.com" : undefined;

const config = {
  domain,
  path: "/",
  secure: typeof domain !== "undefined",
  sameSite: "lax",
  httpOnly: false
} as const;
```

**After — proposed shared attribute helper:** this can live in a small module with no `next/server` imports so client and server code can share its domain/path policy.

```ts
export function getMetadataCookieOptions(url: URL) {
  const host = url.hostname.toLowerCase();
  const isDcsHost =
    host === "drisdell.com" || host.endsWith(".drisdell.com");

  return {
    domain: isDcsHost ? ".drisdell.com" : undefined,
    path: "/",
    secure: url.protocol === "https:",
    sameSite: "lax",
    httpOnly: false
  } as const;
}
```

Examples: `https://drisdell-dev.vercel.app` gets no Domain attribute and a Secure cookie; `http://localhost:3001` gets no Domain attribute and no Secure flag. Verify the effective request protocol in deployment before finalizing this helper.

#### Code: set and remove with the same scope

**Before — generated client removal:**

```ts
const remove = useCallback((key: CookieKey) => {
  Cookies.remove(COOKIES[key]);
}, []);
```

**After — proposed metadata removal:** the same helper supplies options when the server sets cookies and when the client removes them.

```ts
const remove = useCallback((key: CookieKey) => {
  const options = getMetadataCookieOptions(new URL(window.location.href));
  Cookies.remove(COOKIES[key], options);
}, []);
```

The existing `dcs_qr` acceptance hook retains its own 365-day persistence. It is not part of the proxy's metadata refresh loop.

## 5. Cookie types, client context, and server access

### A03 + A05: transplant with an explicit shared contract

| Section | Before | Proposed after |
| --- | --- | --- |
| Cookie registry | Generated registry is only in the sibling scaffold | Bring `COOKIES`, `CookieKey`, `CookieValue`, and `isValidCookieKey` into the working app; reconcile the legacy metadata fields above |
| Context | No mounted shared metadata provider | Transplant `CookieProvider` / `useCookiesCtx` and mount around the existing DCS client tree |
| Operations | Generated `get`, `set`, `remove`, `getAll`, `getTargeted` | Retain typed operations and consistent key-to-cookie-name mapping |
| Missing values | `Cookies.get` returns `undefined`; generated selected-result casts imply required strings | Represent absent/blocked cookies accurately in the selected-result types and consumers |
| Supporting types | Generated cookie types import `Rm` from `@dcs/types` | Verify the package export/build and explicit `js-cookie` attribute typing resolve in the app |
| UA contract | Deleted global declaration; active `globalThis.UserAgent` references | Preserve the declaration or migrate every consumer together to an exported/inferred UA type |
| Reactivity | Generated provider exposes browser read functions; it is not a reactive cookie snapshot | Document that behavior. Add reactive state only if an actual consumer needs it |

Do not collapse `lat`/`lng` into `latlng` without an adapter: existing form actions require separate strings. The generated registry also lacks the API's `flag` and full `userAgentObject` fields. Add a compatible representation or continue computing those at the API boundary.

#### Code: cookie reads remain optional

**Before — generated selected-result type:**

```ts
export type FilterResults<S extends keyof CookieValue> = Rm<
  CookieValue,
  Exclude<keyof CookieValue, FilterBySelect<S>>
>;
```

**After — proposed selected-result type and read excerpt:**

```ts
export type FilterResults<K extends keyof CookieValue> =
  Partial<Pick<CookieValue, K>>;

const getTargeted = useCallback(
  <const K extends CookieKey>(keys: readonly K[]): FilterResults<K> => {
    const result: FilterResults<K> = {};

    for (const key of keys) {
      result[key] = Cookies.get(COOKIES[key]) as CookieValue[K] | undefined;
    }

    return result;
  },
  []
);
```

`getTargeted(["city", "lat", "lng"])` then has optional values. The complete registry/type transplant must add `lat`/`lng` before that selection is valid.

#### Code: replace the lost global UA dependency together

**Before — active API/type references:**

```ts
const uaObj: globalThis.UserAgent = userAgentFromString(ua);

export type ExpectedRes = {
  qr: string;
  userAgentObject: globalThis.UserAgent;
  ua: string;
  ip: string;
  tz: string;
  city: string;
  lat: string;
  lng: string;
  flag: string;
};
```

**After — one proposed alternative to restoring the global declaration:** migrate every reference to this exported type in the same batch.

```ts
import type { userAgentFromString } from "next/server";

export type UserAgentData = ReturnType<typeof userAgentFromString>;

export type ExpectedRes = {
  qr: string;
  userAgentObject: UserAgentData;
  ua: string;
  ip: string;
  tz: string;
  city: string;
  lat: string;
  lng: string;
  flag: string;
};
```

This keeps the response structure while deriving the UA type from the installed parser API. Restoring the original global declaration remains a separate compatible choice.

### A06: server counterpart and rendering impact

React context gives client descendants a common API. Server Components and proxy need request-scoped access rather than calling that client hook.

| Use site | Before | Proposed after |
| --- | --- | --- |
| Proxy | Original request metadata computed directly | Extract from `NextRequest` and attach cookies/request data to the returned response |
| Client UI | Forms fetch `/api` through SWR | Client cookie context becomes available; preserve `/api` until a complete consumer migration is reviewed |
| Server route/action needing cookies | No common typed reader | Typed reader around awaited `cookies()`; server writes occur at a route/action/response boundary |
| Root layout | Synchronous layout; content routes use `revalidate = 60` | Keep the provider transplant independent of reading cookies in the root layout by default |
| Initial client render | Generated provider reads `js-cookie` | Read browser cookies after hydration or pass an explicitly designed server snapshot; prevent server/client markup disagreement |

Reading `cookies()` in a layout/page makes rendering request-dependent. A root-layout cookie snapshot therefore needs a deliberate caching decision before implementation. [Next.js cookies reference](https://nextjs.org/docs/app/api-reference/functions/cookies#good-to-know).

Verify first-visit behavior separately from subsequent visits. Do not assume a browser already has cookies that proxy has just generated. If a server consumer needs computed metadata in the same request, establish and verify explicit request forwarding or compute from that request's headers; response cookies alone are not the complete handoff design.

#### Code: client context and server reader are different access points

**Before — current client form metadata source:** keep this API contract during the initial provider transplant.

```tsx
const { data } = useSWR<ExpectedRes | undefined>(
  "/api?code=yes",
  fetcher,
  { refreshInterval: 100000 }
);

if (data) {
  formData.append("lat", data.lat);
  formData.append("lng", data.lng);
  formData.append("flag", data.flag);
}
```

**After — proposed additional client access, read after hydration:** this hook can serve new metadata consumers without removing the form's `flag`/UA API fields.

```tsx
"use client";

import { useEffect, useState } from "react";
import { useCookiesCtx } from "@/context/cookie-context";

export function useBrowserName() {
  const { get } = useCookiesCtx();
  const [browserName, setBrowserName] = useState<string>();

  useEffect(() => {
    setBrowserName(get("browserName"));
  }, [get]);

  return browserName;
}
```

**After — proposed server reader:** use only in a request-dependent consumer; this is not mounted in the root layout by default. `server-cookie-reader.ts` is a proposed separate server module.

```ts
import "server-only";
import { cookies } from "next/headers";
import type { CookieKey, CookieValue } from "@/types/cookies";
import { COOKIES } from "@/types/cookies";

export async function readRequestCookie<const K extends CookieKey>(key: K) {
  const store = await cookies();
  return store.get(COOKIES[key])?.value as CookieValue[K] | undefined;
}
```

This reader is for incoming request cookies. Same-request metadata handoff from proxy and any required cookie-value validation remain explicit implementation work. If using the `server-only` marker, ensure its direct dependency is available.

### A07: layout composition

Proposed DCS body composition:

```text
Existing ViewTransitions / html / body structure
└── CookieProvider
    └── Existing DCS page shell
        ├── Nav
        ├── main: existing route children
        └── Footer
```

Before: existing DCS shell and metadata coexist with newly transplanted Inter/Geist font variables and a theme bootstrap script. After: add the cookie provider while retaining Drisdell title/description, canonical base, icons, viewport choices, navigation, footer, view transitions, and Google Analytics scripts.

The sibling scaffold's `PageLayout`, generic metadata, CalSans default, and `ThemeProvider defaultTheme="system"` are reference choices. Replacing the DCS shell or switching its default visual theme requires explicit review. If a theme provider is included, agree on its placement and initial theme and reconcile it with the bootstrap script. Also decide whether to render the currently imported but unused Vercel Analytics component.

#### Code: add the provider around the existing body content

**Before — current DCS body excerpt:**

```tsx
<body className="antialiased">
  <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
    <Nav />
    <main>{children}</main>
    <Footer />
  </div>
</body>
```

**After — proposed body excerpt:** import `CookieProvider` from `@/context/cookie-context`; keep the existing outer ViewTransitions, html/font variables, head, metadata, and analytics scripts.

```tsx
<body className="antialiased">
  <CookieProvider>
    <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  </CookieProvider>
</body>
```

Adding the client provider does not require calling `cookies()` in `RootLayout` or making that layout async.

## 6. Tailwind v3 → v4: mapping by configuration section

### A08: configuration ownership and build integration

Before: `tailwind.config.ts` plus `@tailwind` directives and the old PostCSS pipeline. Current: `global.css` imports Tailwind/tw-animate-css, and `postcss.config.ts` already uses `@tailwindcss/postcss`. After: keep CSS configuration as the application source of truth and remove the old TS config after parity.

| Old config section | Existing definition | Proposed CSS destination / action |
| --- | --- | --- |
| `content` | `src/**/*.{js,ts,jsx,tsx}` | Keep explicit app source detection in the Tailwind import; define the shared UI source/CSS integration and exclude archive files if needed |
| `darkMode` | Class-based configuration | CSS `@custom-variant dark` covering `.dark` and its descendants; retain data-theme support only with a consistent selector/provider contract |
| `future.hoverOnlyWhenSupported` | `true` | Preserve supported-hover behavior; verify mobile navigation interactions |
| `fontFamily` | Ten Basis Grotesque utility names | Preserve ten compatible utility definitions and font-file selection; see A10 |
| `fontSize.xxs` | `0.5rem`, line height `0.75rem` | `--text-xxs` and `--text-xxs--line-height`; current ratio resolves to the same line height |
| `colors.gray` | Custom grayscale, including 1000/1100 | Define every existing `--color-gray-*` value; do not inherit the new default palette accidentally |
| `colors.flirt` | 50–950 palette | Matching `--color-flirt-*` tokens with exact existing hex values |
| `colors.banner` | 50–950 palette | Matching `--color-banner-*` tokens with exact existing hex values |
| `colors.stone-mist` | 50–950 palette | Matching `--color-stone-mist-*` tokens with exact existing hex values |
| `colors.dcs` | 50–950 palette | Matching `--color-dcs-*` tokens; preserve DCS brand blue `#234670` at 800 |
| `ringWidth` | 3, 5, 6, 7px | Retain numeric `ring-3`, `ring-5`, `ring-6`, `ring-7`; check their generated declarations |
| `maxWidth` | 8xl 96rem; 9xl 121rem; 10xl 173.75rem | Matching `--container-*` values, with 9xl restored to 121rem |
| `width` | 8xl 96rem; 9xl 120rem | Matching `--spacing-8xl` / `--spacing-9xl`; keep width distinct from max width |
| `dropShadow.testimonial` | `1px 1px 5px 0px rgba(0, 0, 0, 0.84)` | Assess the four-length value and active consumers before mapping to `--drop-shadow-testimonial`; correcting this invalid filter value is an explicit decision |
| `boxShadow` | Eight named shadows | Preserve exact names/values using `--shadow-*`; inventory below |
| `keyframes` | Seven custom definitions | Preserve keyframes and distinguish colliding preset animations; inventory below |
| `transitionDelay` | `400: "400ms"` | Preserve the `delay-400` utility and emitted 400ms value |
| `animation` | Six named animation utilities | Matching `--animate-*` tokens, retaining names, durations, easing, and iteration counts |
| `borderRadius` | lg radius; md radius−2px; sm radius−4px | Matching `--radius-lg`, `--radius-md`, `--radius-sm`; retain base `--radius: 0.5rem` |
| `plugins` | Animate, forms, Headless UI, typography, 3D transforms | Map individually below; no leftover JS config loader |
| Commented `screens` | xs 375px, smxs 507px, mdlg 896px, standard screens | Comments are not active configuration. Standard breakpoints stay equivalent; separately review adding xs because Footer currently uses `xs:*` |

Theme token namespaces are defined by Tailwind's [theme variables reference](https://tailwindcss.com/docs/theme#theme-variable-namespaces). Numeric ring widths are built in. [Tailwind ring utilities](https://tailwindcss.com/docs/box-shadow#adding-a-ring).

For source detection, explicitly choose whether `@dcs/ui` supplies compiled utility CSS or whether the app scans shared component sources. Avoid shipping competing definitions for app-owned brand tokens. [Tailwind source detection](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).

#### Code: PostCSS and the CSS entry point

**Before — committed PostCSS/global CSS excerpts:**

```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-focus-visible": { replaceWith: "[data-focus-visible-added]" },
    autoprefixer: {}
  }
};
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**After — already transplanted v4 pipeline:** the later examples supply the legacy tokens missing from this entry point.

```ts
import type { Config } from "postcss-load-config";

export default {
  plugins: { "@tailwindcss/postcss": {} }
} satisfies Config;
```

```css
@import "tailwindcss" source("../../src");
@import "tw-animate-css";

@plugin "tailwindcss-motion";
```

The old focus-visible transformation needs its own consumer check; dropping a PostCSS plugin must not silently drop required focus behavior.

#### Code: source scanning moves out of the TS config

**Before — `tailwind.config.ts` excerpt:**

```ts
const config = {
  content: ["src/**/*.{js,ts,jsx,tsx}"]
};
```

**After — proposed app-owned compilation option:** paths are relative to `src/app/global.css`. Choose this source-scanning model or the shared package's compiled-utilities model; finalize shared CSS ownership before combining them.

```css
@import "tailwindcss" source("../../src");

@source "../../../../packages/ui/src";
@source not "./old-global.css.md";
@source not "../middleware.old.md";
```

#### Code: class/data-theme dark variants

**Before — legacy config and current CSS selector:**

```ts
const config = {
  darkMode: ["class", "class"]
};
```

```css
@custom-variant dark (&:where([data-theme=dark], .dark, [data-theme=dark] *));
```

**After — proposed selector including descendants of both theme markers:**

```css
@custom-variant dark (
  &:where(.dark, .dark *, [data-theme="dark"], [data-theme="dark"] *)
);
```

This provides the variant; it does not decide whether the site's initial theme is light or system-derived.

#### Code: max width and width retain different 9xl values

**Before — legacy `theme.extend` excerpt:**

```ts
const config = {
  theme: {
    extend: {
      maxWidth: {
        "8xl": "96rem",
        "9xl": "121rem",
        "10xl": "173.75rem"
      },
      width: {
        "8xl": "96rem",
        "9xl": "120rem"
      }
    }
  }
};
```

**After — proposed CSS tokens:**

```css
@theme {
  --container-8xl: 96rem;
  --container-9xl: 121rem;
  --container-10xl: 173.75rem;

  --spacing-8xl: 96rem;
  --spacing-9xl: 120rem;
}
```

`max-w-9xl` still means 121rem; `w-9xl` still means 120rem. The current preset's extra 10xl spacing token can remain as an addition without changing those meanings.

#### Code: text size, radius, ring width, and delay

**Before — legacy `theme.extend` excerpt:**

```ts
const config = {
  theme: {
    extend: {
      fontSize: {
        xxs: ["0.5rem", { lineHeight: "0.75rem" }]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      ringWidth: {
        "3": "3px",
        "5": "5px",
        "6": "6px",
        "7": "7px"
      },
      transitionDelay: { "400": "400ms" }
    }
  }
};
```

**After — proposed CSS plus unchanged utility usage:** numeric ring widths and delays use built-in utilities rather than a second JS configuration.

```css
:root {
  --radius: 0.5rem;
}

@theme inline {
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}

@theme {
  --text-xxs: 0.5rem;
  --text-xxs--line-height: 0.75rem;
}
```

```tsx
<div className="rounded-md text-xxs ring-5 delay-400" />
```

Using `@theme inline` for radius aliases prevents defining `--radius-sm`/etc. through a root-resolved alias that could ignore a closer `--radius` override.

Numeric delay values are defined by the [Tailwind transition-delay reference](https://tailwindcss.com/docs/transition-delay).

### Palettes and semantic preset tokens

| Palette | Before | Proposed after |
| --- | --- | --- |
| Gray | 50 `#fafafa`; 100 `#f4f4f5`; 200 `#e4e4e7`; 300 `#d4d4d8`; 400 `#a1a1aa`; 500 `#71717a`; 600 `#52525b`; 700 `#3f3f46`; 800 `#27272a`; 900 `#18181b`; 950 `#09090b`; 1000 `#111113`; 1100 `#0a0a0b` | Identical values under corresponding CSS color tokens |
| DCS | 50 `#f3f6fc`; 100 `#e6edf8`; 200 `#c8daef`; 300 `#98bce1`; 400 `#6098d0`; 500 `#3c7bbb`; 600 `#2b609e`; 700 `#244d80`; 800 `#234670`; 900 `#203a5a`; 950 `#16253b` | Identical values under corresponding CSS color tokens |
| Flirt / banner / stone-mist | All eleven shades per palette in the existing Tailwind config | Copy all values verbatim; preserve class names and opacity modifiers |
| Semantic preset colors | Current background/foreground/card/primary/brand/sidebar/etc. OKLCH tokens | Retain reviewed additions alongside legacy palettes; do not substitute new primary colors for existing `dcs-*` consumers |
| Shared UI defaults | `packages/ui/src/globals.css` repeats semantic colors, size tokens, and shimmer | Define ownership/import order; ensure shared defaults cannot overwrite DCS overrides unexpectedly |

#### Code: preserve hex values while changing configuration format

**Before — selected legacy palette entries:** this example shortens the palettes for readability; all shades in the inventory still need mapping.

```ts
const config = {
  theme: {
    extend: {
      colors: {
        gray: { "800": "#27272a", "950": "#09090b" },
        dcs: { "800": "#234670", "900": "#203a5a" },
        flirt: { "800": "#AC0079" },
        banner: { "950": "#131315" },
        "stone-mist": { "950": "#323135" }
      }
    }
  }
};
```

**After — proposed matching CSS entries:**

```css
@theme {
  --color-gray-800: #27272a;
  --color-gray-950: #09090b;
  --color-dcs-800: #234670;
  --color-dcs-900: #203a5a;
  --color-flirt-800: #AC0079;
  --color-banner-950: #131315;
  --color-stone-mist-950: #323135;
}
```

Existing usages remain recognizable:

```tsx
<footer className="border-t-dcs-800 bg-white text-dcs-800" />
<a className="bg-flirt-800 hover:bg-flirt-900">Explore Employee Resources</a>
```

The full flirt-900 token and every other used shade are included in the complete mapping, even when omitted from this short example.

### Named shadows

Every old name has a CSS token destination with the same suffix, including camelCase where currently used.

| Before name | Before value | After token |
| --- | --- | --- |
| `glow` | `0 0 4px rgb(0 0 0 / 0.1)` | `--shadow-glow` |
| `refinement` | `0px 2px 5px 0px #d7d7d7` | `--shadow-refinement` |
| `testimonial` | `5px 5px 5px 0px rgba(0, 0, 0, 0.35)` | `--shadow-testimonial` |
| `titleShadow` | `0 1px 0 0 rgb(35 38 59 / 5%)` | `--shadow-titleShadow` |
| `embla` | `inset 0 0 0 0.2rem rgb(54 49 61 / 1)` | `--shadow-embla` |
| `magical` | Existing three-part shadow | `--shadow-magical`; actively used by Our Expertise |
| `cardHover` | Existing five-part shadow | `--shadow-cardHover` |
| `activeShadow` | Existing two inset shadows plus lower shadow | `--shadow-activeShadow` |

#### Code: named shadows keep their consumer classes

**Before — selected legacy shadow entries:**

```ts
const config = {
  theme: {
    extend: {
      boxShadow: {
        refinement: "0px 2px 5px 0px #d7d7d7",
        embla: "inset 0 0 0 0.2rem rgb(54 49 61 / 1)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px"
      }
    }
  }
};
```

**After — proposed CSS:**

```css
@theme {
  --shadow-refinement: 0px 2px 5px 0px #d7d7d7;
  --shadow-embla: inset 0 0 0 0.2rem rgb(54 49 61 / 1);
  --shadow-magical:
    rgba(0, 0, 0, 0.02) 0px 30px 30px,
    rgba(0, 0, 0, 0.03) 0px 0px 8px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px;
}
```

Our Expertise keeps using `shadow-magical`; no class rename is required for that mapping.

### Animations and collisions

| Before | Proposed after |
| --- | --- |
| `blink`, `wiggle`, `loading`, `wave`, `shimmer`, `translateXReset`, `fadeToTransparent` keyframes | Preserve exact original declarations and direct animation-name consumers; do not rely on unused theme tokens to emit keyframes needed by raw CSS |
| `wiggle: wiggle 10s ease-in-out infinite` | `--animate-wiggle` with the same value |
| `hero: hero 1s ease-in-out infinite` | Inventory consumers: the old config has no `hero` keyframe. Do not invent an animation while migrating |
| `slowPing: pulse 10s cubic-bezier(0, 0, 0.2, 1) infinite` | `--animate-slowPing`, retaining the existing pulse reference |
| `slowWave: wave 10s ease-in-out` | `--animate-slowWave`, same value |
| `wave: wave 560ms ease-in-out` | `--animate-wave`, same value |
| `blink: blink 1.4s ease-in-out infinite` | `--animate-blink`, same value |
| Skeleton `shimmer` translates to `translateX(100%)` | Keep this behavior for `RenderPageSkeleton`; rename or scope the new opacity-pulse shimmer so it cannot override it |
| Old `fade-in` is opacity-only; preset `fade-in` includes an 8px translation | Give different effects distinct names and preserve old view-transition behavior |
| Current duplicated ripple/scan/pulse definitions | Choose one reviewed definition per effect and remove only duplicate declarations |

#### Code: migrate animation tokens and keep the skeleton shimmer

**Before — legacy animation/keyframe excerpt:**

```ts
const config = {
  theme: {
    extend: {
      animation: {
        blink: "blink 1.4s ease-in-out infinite",
        wiggle: "wiggle 10s ease-in-out infinite"
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" }
        },
        shimmer: { "100%": { transform: "translateX(100%)" } }
      }
    }
  }
};
```

**After — proposed CSS excerpt:** keep `shimmer` as the translating skeleton effect and give the preset's opacity effect a different name. Apply that rename consistently to the shared UI definition/consumers too.

```css
@theme {
  --animate-blink: blink 1.4s ease-in-out infinite;
  --animate-wiggle: wiggle 10s ease-in-out infinite;
  --animate-shimmer-pulse:
    shimmer-pulse 3s cubic-bezier(0.4, 0.7, 0.6, 1) infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0.2; }
  20% { opacity: 1; }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes shimmer {
  100% { transform: translateX(100%); }
}

@keyframes shimmer-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

Keyframes are shown outside `@theme` here so raw `animation-name` and arbitrary animation consumers retain their definitions. The existing skeleton's `before:animate-[shimmer_1.5s_infinite]` keeps its name and movement.

### Plugin mapping

| Before plugin | Proposed after | Required check |
| --- | --- | --- |
| `tailwindcss-animate` | Current `@import "tw-animate-css"` | Existing Radix dialog/dropdown/toast `animate-in/out`, fade/zoom/slide utilities retain their names and behavior |
| `@tailwindcss/forms` | CSS `@plugin "@tailwindcss/forms"` with equivalent strategy | Native form controls and existing overrides retain their rendered styles |
| `@tailwindcss/typography` | CSS `@plugin "@tailwindcss/typography"` when retaining the plugin | Existing/prospective CMS typography behavior is recorded; current custom WP selectors also remain |
| `@headlessui/tailwindcss` | Verify v4 compatibility and actual `ui-*` consumers; use CSS variants if necessary | No active `ui-open/active/selected` consumers found in the inspected application; removal still needs a recorded decision |
| `@xpd/tailwind-3dtransforms` | Map active 3D utilities to native v4 equivalents or reviewed CSS utilities | No matching legacy 3D utility consumers found in the inspected application; do not reinstall a v3 plugin automatically |
| New `tailwindcss-motion` | Retain the current CSS plugin as a preset addition | Ensure it does not override the legacy named animations |

#### Code: plugin loading moves into CSS

**Before — legacy plugin array:**

```ts
plugins: [
  require("tailwindcss-animate"),
  forms,
  require("@headlessui/tailwindcss"),
  typography,
  require("@xpd/tailwind-3dtransforms")
]
```

**After — proposed reviewed CSS integrations:** this excerpt covers animate/forms/typography and the new motion plugin. Headless UI/3D decisions remain as listed in the table; this is not a claim that those two plugin migrations have been verified.

```css
@import "tailwindcss" source("../../src");
@import "tw-animate-css";

@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
@plugin "tailwindcss-motion";
```

Existing `data-[state=open]:animate-in` / `data-[state=closed]:animate-out` classes remain the comparison points for dialogs, dropdowns, and toasts.

### A10: font mapping

Before: Tailwind utility names reference ten variables supplied by `next/font/local`. Current: public font faces all use `BasisGrotesquePro`, but the theme only exposes `font-basis`; existing components still use the ten older utility names.

After: preserve these utility-to-file mappings in CSS. A unified `font-basis` can coexist, but compatibility aliases must select the intended face, weight, and style; simply making every old name point to an unqualified regular family is insufficient.

| Existing utility suffix after `font-` | Existing font file | Proposed after |
| --- | --- | --- |
| `basis-grotesque-pro-regular` | `BasisGrotesquePro-Regular.woff2` | Equivalent CSS font utility/face |
| `basis-grotesque-pro-italic` | `BasisGrotesquePro-Italic.woff2` | Equivalent italic utility/face |
| `basis-grotesque-pro-black` | `BasisGrotesquePro-Black.woff2` | Equivalent black utility/face |
| `basis-grotesque-pro-black-italic` | `BasisGrotesquePro-BlackItalic.woff2` | Equivalent black italic utility/face |
| `basis-grotesque-pro-bold` | `BasisGrotesquePro-Bold.woff2` | Equivalent bold utility/face |
| `basis-grotesque-pro-bold-italic` | `BasisGrotesquePro-BoldItalic.woff2` | Equivalent bold italic utility/face |
| `basis-grotesque-pro-light` | `BasisGrotesquePro-Light.woff2` | Equivalent light utility/face |
| `basis-grotesque-pro-light-italic` | `BasisGrotesquePro-LightItalic.woff2` | Equivalent light italic utility/face |
| `basis-grotesque-pro-medium` | `BasisGrotesquePro-Medium.woff2` | Equivalent medium utility/face |
| `basis-grotesque-pro-medium-italic` | `BasisGrotesquePro-MediumItalic.woff2` | Equivalent medium italic utility/face |

Resolve the Black weight discrepancy deliberately: the new public CSS labels it 800; the old combined `BasisGrotesquePro` loader labels it 900. Compare actual legacy face selection before changing text weight. Preserve italic aliases without requiring changes in every consumer.

Review the self-referencing `--font-inter: var(--font-inter)` and equivalent Geist theme entries. Use distinct loader variables and appropriate inline theme aliases where required, rather than introducing circular CSS definitions. [Tailwind variables referencing other variables](https://tailwindcss.com/docs/theme#referencing-other-variables).

Verify the loaded typeface on the body, Nav, Footer, headers, cards, forms, and CMS content. Retire duplicate font assets/the old helper only after no imports or variables depend on them.

#### Code: keep a legacy font class selecting its original file

**Before — font loader and Tailwind mapping excerpts:**

```ts
export const BasisGrotesqueProMedium = localFont({
  variable: "--font-basis-grotesque-pro-medium",
  display: "swap",
  src: [{ path: "../app/fonts/BasisGrotesquePro-Medium.woff2" }]
});

const config = {
  theme: {
    extend: {
      fontFamily: {
        "basis-grotesque-pro-medium": [
          "var(--font-basis-grotesque-pro-medium)"
        ]
      }
    }
  }
};
```

**After — proposed dedicated-face compatibility alias:** this preserves single-face selection for the existing utility. Repeat the mapping for the other nine files; finalize weight/style descriptors against the actual baseline, including the Black discrepancy.

```css
@font-face {
  font-family: "BasisGrotesqueProMedium";
  src: url("/fonts/BasisGrotesquePro-Medium.woff2") format("woff2");
  font-display: swap;
}

@theme {
  --font-basis-grotesque-pro-medium: "BasisGrotesqueProMedium", sans-serif;
}
```

```tsx
<h1 className="font-basis-grotesque-pro-medium text-dcs-800">
  About Drisdell Consulting Services
</h1>
```

#### Code: Next font variables use a separate loader name

**Before — current Inter/CSS entries:**

```ts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"]
});
```

```css
@theme {
  --font-inter: var(--font-inter);
}
```

**After — proposed loader variable and utility alias:** retain `inter.variable` on the html element and apply the same naming pattern to any reviewed Geist aliases.

```ts
const inter = Inter({
  variable: "--next-font-inter",
  subsets: ["latin", "latin-ext"]
});
```

```css
@theme inline {
  --font-inter: var(--next-font-inter);
}
```

## 7. Global CSS and component migration

### A09: old global CSS → current `global.css`

| Old section | Before | Proposed after |
| --- | --- | --- |
| Tailwind entry | Three `@tailwind` directives | Existing v4 import / PostCSS plugin |
| Box sizing | All elements and pseudo-elements use border-box | Retain explicit behavior or verify equivalent preflight output |
| Page height | `html, body { height: 100%; }` | Preserve full-height shell and `min-h-full` behavior |
| Form font inheritance | Input/button/textarea/select inherit | Preserve while reviewing preset's separate 16px input rule |
| Body sizing | `max-width: 2780px !important; margin: auto` | Restore centered width cap unless an intentional layout change is approved |
| Smooth scrolling | Enabled only with no reduced-motion preference | Preserve the preference condition and contact anchor behavior |
| Root radius | `--radius: 0.5rem` | Preserve radius source and dependent utilities |
| Carousel variables | `--slide-height: 19rem`, `--slide-spacing: 1rem`, `--slide-size: 70%` | Restore all three; mobile carousel consumes them |
| Isolation | `#__next { isolation: isolate; }` | Verify whether a matching DOM node exists; preserve intended stacking on the actual app shell if needed |
| Mobile scroll lock | `.no-scroll { overflow: hidden !important; }` | Restore because Nav still toggles this class |
| Backdrop | Fixed viewport, black at 50%, z-index 49 | Retain legacy rule and stacking contract where used |
| Transition marker | `.transition-element { view-transition-name: dcs; }` | Restore for `ui/transitions/Name.tsx` |
| Transition pseudo-elements | Old fades out at 0.8s; new fades in/up at 0.4s | Restore exact durations/easing and corresponding keyframes |
| Fade keyframes | Original fade-out/fade-in/fade-in-up transforms/opacities | Keep values and avoid collisions with preset names |
| New preset additions | Semantic colors, code/math styles, ripple/scan effects, safe-area rules, custom utilities | Review retention and duplication; scope broad selectors so they do not alter existing DCS content accidentally |

#### Code: old global behavior remains in the v4 stylesheet

**Before — archived global CSS excerpt:**

```css
html, body {
  height: 100%;
}

body {
  max-width: 2780px !important;
  margin: auto;
}

@layer base {
  :root {
    --radius: 0.5rem;
    --slide-height: 19rem;
    --slide-spacing: 1rem;
    --slide-size: 70%;
  }
}

.no-scroll {
  overflow: hidden !important;
}
```

**After — proposed restoration inside the v4 `global.css`:** keep the original unlayered height/body rules and the layered root variables.

```css
html, body {
  height: 100%;
}

@layer base {
  :root {
    --radius: 0.5rem;
    --slide-height: 19rem;
    --slide-spacing: 1rem;
    --slide-size: 70%;
  }
}

body {
  max-width: 2780px !important;
  margin: auto;
}

.no-scroll {
  overflow: hidden !important;
}
```

Nav's existing `document.body.classList.add("no-scroll")` and the carousel's existing `var(--slide-size)` now have their CSS definitions again.

#### Code: preserve the view-transition marker and timings

**Before — archived transition rules:**

```css
.transition-element {
  view-transition-name: dcs;
}

::view-transition-old(dcs) {
  animation: fade-out 0.8s ease-in-out;
}

::view-transition-new(dcs) {
  animation: fade-in-up 0.4s ease-in-out;
}
```

**After — preserved rules in the new stylesheet:** keep the complete original fade-out/fade-in-up keyframes too; these declarations do not supply them automatically.

```css
.transition-element {
  view-transition-name: dcs;
}

::view-transition-old(dcs) {
  animation: fade-out 0.8s ease-in-out;
}

::view-transition-new(dcs) {
  animation: fade-in-up 0.4s ease-in-out;
}
```

### Component CSS modules

Before: modules use legacy `@apply` with globally configured utilities. After: each module has access to v4 app definitions through `@reference "../../app/global.css"`, or uses reviewed direct CSS declarations. Referencing the CSS supplies definitions without emitting a second global stylesheet. [Tailwind CSS modules guidance](https://tailwindcss.com/docs/compatibility#css-modules).

| File | Required preservation / migration |
| --- | --- |
| `src/ui/sections/navbar.module.css` | Sticky/backdrop behavior; replace removed `bg-opacity-100` with equivalent complete background styling |
| `src/ui/particles/particle-header.module.css` | Basis font in injected content and rounded audio controls |
| `src/ui/dynamic/children-scaffold.module.css` | WP heading/paragraph/font/audio rules |
| `src/ui/dynamic/carousel-cards.module.css` | Slide dimensions, touch interaction, controls, dots, image positioning |
| `src/ui/preview/notice.module.css` | Preview notice sizing/positioning/font |
| `src/ui/loading/dots.module.css` | Loading indicator sizing and local blink animation |

#### Code: CSS modules reference the app's theme definitions

**Before — particle header module excerpt:**

```css
.content {
  & > p {
    @apply px-1 self-center font-basis-grotesque-pro-regular text-[1rem] leading-normal;
  }

  & > audio {
    @apply rounded-full;
  }
}
```

**After — proposed module:** the definitions are referenced; global CSS is not duplicated in this module's output.

```css
@reference "../../app/global.css";

.content {
  & > p {
    @apply px-1 self-center font-basis-grotesque-pro-regular text-[1rem] leading-normal;
  }

  & > audio {
    @apply rounded-full;
  }
}
```

### Targeted v4 utility compatibility

- Review renamed shadow/radius/blur scales and ring defaults against existing rendered values, rather than blindly replacing every token. The app customizes sm/md/lg radii, so those require comparison with its own definitions.
- Replace removed opacity utilities at their consumers; preserve colors and focus visibility.
- Audit transform composition and private `[--tw-rotate:...]` / `[--tw-translate-x:...]` assignments in `Hero.tsx`; use supported utilities/direct styles that preserve the existing visual placement.
- Inspect stacked variants, arbitrary values, gradients, and `tailwind-merge` results where used. Make changes only for identified incompatibilities.
- Resolve the dark selector's missing `.dark *` descendant case and decide how data-theme and class-based themes coexist.
- Review base border color and the new global `border-color: var(--color-border)` override against the old gray defaults.

The scale/utility changes are described in the [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide#changes-from-v3).

#### Code: removed opacity utility and private transform variables

**Before — current navbar fallback and Hero class excerpts:**

```css
@supports not (backdrop-filter: none) {
  .stickyNav {
    backdrop-filter: none;
    @apply bg-opacity-100;
  }
}
```

```tsx
<Image className="scale-[0.7] [--tw-rotate:14deg]" />
<Image className="scale-[0.55] [--tw-translate-x:-2.25rem]" />
```

**After — proposed equivalent intent:** the navbar's existing background is white; keep its fallback opaque. Hero image props and other classes are omitted here and retained during the actual edit.

```css
@reference "../../app/global.css";

@supports not (backdrop-filter: none) {
  .stickyNav {
    backdrop-filter: none;
    background-color: #fff;
  }
}
```

```tsx
<Image className="scale-[0.7] rotate-[14deg]" />
<Image className="scale-[0.55] -translate-x-[2.25rem]" />
```

Compare the actual transform origin/composition and avatar placement in the browser before calling these replacements equivalent. Apply the reviewed opaque fallback to `.navMobile` as well.

### Retirement gate for `tailwind.config.ts`

- [ ] Every active config section above has an implemented CSS/built-in equivalent.
- [ ] Legacy class names used in TSX and `@apply` resolve.
- [ ] No v3 plugin/config loader remains necessary.
- [ ] Shared UI CSS has a documented source/theme ownership model.
- [ ] Remove the config file and its explicit `tsconfig.json` include after these checks.

## 8. Application and deployment compatibility

### A01 + A15: workspace presets and build graph

Before: old preset layout and v3/Next 15 dependency graph. After: keep the transplanted catalog/shared-package structure and reconcile application-specific requirements.

- Resolve current pnpm 11.21.0 versus sibling preset 10.33.2 intentionally; preserve the chosen lockfile/package-manager contract and verify Vercel can execute it.
- Verify Vercel/local Node selection against root `engines >=24` and the `node26` build targets currently used by tooling/types packages.
- Audit direct dependencies for all active imports. Restore or replace `tsparticles`' full loader and `lodash.throttle` before build validation; confirm the selected particles loader provides all currently configured features.
- Ensure built package exports and declaration files are available before dependent web, lint, and typecheck tasks. The current root lint/typecheck tasks have no build dependencies, unlike the old graph.
- Review `packages/ui/package.json`'s `sideEffecs` spelling while defining stylesheet exports/retention; verify emitted `globals.css` and package consumers.
- Refresh VS Code's loaded formatter: inspection found editor Prettier 3.3.3 while current CLI Prettier 3.9.9 resolves the shared config correctly. Preserve `"prettier": "@dcs/prettier-config"` and `trailingComma: "none"`.

Next 16 uses Turbopack by default and does not run lint as part of `next build`; include an explicit lint gate. Existing custom integrations must be checked against the chosen bundler. [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16).

#### Code: preset builds precede dependent checks

**Before — current root Turbo excerpts:**

```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"] },
    "lint": {},
    "typecheck": {}
  }
}
```

**After — proposed prerequisite graph:** retain the existing build inputs/outputs/env settings outside this excerpt.

```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"] },
    "lint": { "dependsOn": ["^build"] },
    "typecheck": { "dependsOn": ["^build"] }
  }
}
```

Verify that dependency declarations connect each app/check to the required presets; the task names alone cannot create those package dependencies.

#### Code: mark CSS as a package side effect with the recognized key

**Before — current `packages/ui/package.json` excerpt:**

```json
{
  "sideEffecs": ["**/*.css"],
  "exports": {
    "./globals.css": "./dist/globals.css"
  }
}
```

**After — proposed spelling correction, preserving the CSS export:**

```json
{
  "sideEffects": ["**/*.css"],
  "exports": {
    "./globals.css": "./dist/globals.css"
  }
}
```

#### Code: the formatter's loaded config shape

**Before — reduced shape from the editor's older formatter instance:**

```json
{
  "__esModule": true,
  "default": {
    "trailingComma": "none"
  }
}
```

**After — reduced resolved-config shape from the current CLI:**

```json
{
  "trailingComma": "none"
}
```

The package declaration stays `"prettier": "@dcs/prettier-config"`. Reload the VS Code window so its formatter can pick up the installed version; no export-format rewrite is implied by this example.

### A11: CMS, routes, forms, and metadata

| Area | Before | Proposed after |
| --- | --- | --- |
| WordPress auth | Server `wpHeaders` uses refresh-token env value | Retain the working refresh-token setup and align build/runtime env loading; keep values out of docs and client code |
| Fetching | Public pages/children query WordPress through current fetcher | Same data and errors with explicit preserved cache/revalidation behavior; compare direct script execution with Next server requests |
| Route params | Dynamic pages already await `params` | Preserve this working async pattern and validate current Next-generated types |
| Static generation | Child routes supply static params; pages use 60s revalidation | Retain route generation and assessed caching after any cookie integration |
| About audio | `/about-us.mp3` in `public` and local audio HTML in the route | Same local audio/player; title and child cards still depend on WordPress |
| Metadata API | `/api?code=yes` returns full UA, qr, ua, ip, tz, city, lat, lng, flag | Preserve HTTP shape/status and fields while typed cookies are introduced |
| API runtime | `/api/route.ts` explicitly declares Edge | Proxy's Node migration does not itself migrate this route. Decide separately whether it also moves to Node and verify the same API behavior |
| Contact/event forms | SWR metadata appended to FormData; existing WP submission mutations | Same submitted fields, metadata body, confirmation/error handling, and reset/pending behavior |
| Resume | Vercel Blob upload, then WP form submission with blob URL | Equivalent behavior with the upgraded Blob API and upload limits |
| DCS shell/SEO | Drisdell content, Nav/Footer, analytics, icons, canonical URLs | Retain these through provider/font/config transplantation |

If replacing SWR/API reads with cookies, first map `userAgentObject`, `flag`, separate lat/lng, QR state, and initial-visit behavior. Keep the API compatible until all consumers have an equivalent path. The current API returns empty metadata fallbacks for several fields, which differ from middleware's defaults; preserve those per-consumer distinctions or explicitly review unification.

#### Code: environment loading happens before env-reading imports

**Before — current `src/utils/testing.ts` import order:**

```ts
import { QueryChildPageBySlug } from "@/queries/page-by-uri";
import * as dotenv from "dotenv";

dotenv.config();
```

**After — proposed CLI ordering:** choose the same env source/precedence as Next for the real comparison; this excerpt demonstrates the ordering that prevents import-time constants from capturing an unloaded token.

```ts
import * as dotenv from "dotenv";

dotenv.config();

const { QueryChildPageBySlug } = await import("@/queries/page-by-uri");
const data = await QueryChildPageBySlug("About_Us", "our-organization");

console.log(data.page);
```

No token value is printed or embedded in this example. The existing server fetcher remains the request path to verify in Next.

#### Code: About audio changes source, while content lookup stays

**Before — committed About header excerpt:**

```tsx
<ParticleHeaderComponent
  title={data.page.title}
  target="ABOUT"
  content={data.page.content}
/>
```

**After — already present local-audio fix:**

```tsx
<ParticleHeaderComponent
  title={data.page.title}
  target="ABOUT"
  content='<audio controls preload="metadata" aria-label="About Us"><source src="/about-us.mp3" type="audio/mpeg" /></audio>'
/>
```

Keep `QueryPageByIdWithChildren("About_Us")`, the not-found check, and the child cards. Local audio alone does not replace the WordPress page query.

#### Code: async route params are already migrated

**Before — current child route's async pattern, simplified and already compatible:**

```tsx
export default async function AboutUsSubPages({
  params
}: InferGSPRT<typeof generateStaticParams>) {
  const slug = (await params).slug;
  const data = await QueryChildPageBySlug("About_Us", slug);

  if (!data.page) notFound();

  return <SubContent page={data.page} />;
}
```

**After — preserved:** retain that awaited `params` pattern and `revalidate = 60`; check it against the newly generated Next route types. No synchronous `params.slug` replacement is proposed.

#### Code: API runtime is a separate choice from proxy runtime

**Before — current `src/app/api/route.ts`:**

```ts
export const runtime = "edge";
```

**After — only if moving this route to Node is approved:**

```ts
export const runtime = "nodejs";
```

Keep the GET response's `userAgentObject`, `qr`, `ua`, `ip`, `tz`, `city`, `lat`, `lng`, and `flag` fields and status 200. This route-level runtime setting must not be copied into `proxy.ts`.

### A12: client libraries

Before: old React/particles/animation/UI library versions. After: supported versions with equivalent rendered behavior.

- Verify particles initialization, loader, interactivity options, and container callback against the installed engine/react versions.
- Verify Motion/Motion+ imports and peer requirements together; the current catalog's Motion 14 range needs reconciliation with the selected Motion+ release's actual requirements.
- Validate React 19 behavior for form actions, effects, forwarded refs, dialogs/dropdowns, and the currently enabled React Compiler.
- Retain Embla slide selection/dragging, Radix animation utilities, Headless UI navigation, scroll throttling, and reduced-motion behavior.

#### Code: particles loader must match a declared dependency

**Before — active particle initialization excerpt:**

```ts
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

initParticlesEngine(async engine => {
  await loadFull(engine);
});
```

**After — proposed slim-loader candidate:** `@tsparticles/slim` is already declared, and its installed declaration exports `loadSlim(engine)`. Verify its registered features cover all current options before selecting this replacement over restoring a full loader.

```ts
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

initParticlesEngine(async engine => {
  await loadSlim(engine);
});
```

Keep the existing completion callback that sets `init`, options, route-based colors, and particle rendering. This excerpt only changes the loader call.

#### Code: navigation keeps its throttle import with a direct dependency

**Before — import still exists, but its direct dependency was removed:**

```ts
import throttle from "lodash.throttle";
```

**After — proposed restoration through the existing lodash catalog:** the version here is the committed app's known range, not a newly checked latest release.

```yaml
catalogs:
  lodash:
    lodash.throttle: ^4.1.1
```

```json
{
  "dependencies": {
    "lodash.throttle": "catalog:lodash"
  }
}
```

Merge that catalog entry alongside the existing type packages. Keep Nav's handler, throttle interval, listener lifecycle, and mobile scroll locking while restoring resolution.

#### Code: animation package declarations changed

**Before — committed manifest entry:**

```json
{
  "dependencies": {
    "framer-motion": "^11.11.17"
  }
}
```

**After — current transplanted manifest entries, compatibility still to verify:**

```json
{
  "dependencies": {
    "motion": "catalog:motion",
    "motion-plus": "npm:@motionplus/core@^3.0.0"
  }
}
```

Do not infer compatible peer ranges from these declarations alone. Resolve Motion/Motion+ requirements before changing any consuming animation imports.

### A13: build hooks, sitemap, and manifest

Before: GraphQL prebuild and next-sitemap postbuild. Current: prebuild remains, but postbuild names deleted tooling. Proposed after: keep a complete codegen/build/sitemap pipeline with matching SEO URLs.

Recommended draft: implement an App Router `sitemap.ts` using the existing page/path queries, then retire the dead `next-sitemap` postbuild hook together. A temporary restoration of next-sitemap/config is another reviewable option if it provides the quickest compatible build; select one before editing.

- Retain GraphQL generation while resolving its upgraded codegen/GraphQL dependencies and env-loading behavior; never treat a failed schema fetch as successful generation.
- Include existing static routes and WP child pages in the sitemap; agree how the QR-only route should be represented.
- Preserve the public sitemap endpoint referenced by `robots.ts` and use the same production/preview host policy as metadata.
- Reconcile layout's `/meta/site.webmanifest`, generated `manifest.ts`, and actual public manifest files. Verify all referenced icon paths exist.
- Preserve configured image origins and the qualities used by existing components, including quality 100 assets.

#### Code: replace the dangling postbuild hook with a complete sitemap route

**Before — current app script excerpt:**

```json
{
  "scripts": {
    "prebuild": "graphql-codegen --config codegen.ts",
    "build": "next build",
    "postbuild": "next-sitemap --config next-sitemap.mjs"
  }
}
```

**After — proposed scripts once the native sitemap is implemented:**

```json
{
  "scripts": {
    "prebuild": "graphql-codegen --config codegen.ts",
    "build": "next build"
  }
}
```

**After — proposed `src/app/sitemap.ts` shape:** reuse the existing child-path queries and node URIs. This example includes `/qr` pending the explicit indexing decision. Confirm route coverage, URI normalization, connection pagination, and revalidation before adopting the final implementation.

```ts
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { QueryChildPaths } from "@/queries/paths";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl(process.env.VERCEL_ENV);
  const [about, consultants] = await Promise.all([
    QueryChildPaths("About_Us"),
    QueryChildPaths("Consultants")
  ]);

  const childUris = [
    ...about.pages.edges,
    ...consultants.pages.edges
  ].map(({ node }) => node.uri);

  const paths = new Set([
    "/",
    "/about-us",
    "/consultants",
    "/contact-us",
    "/qr",
    ...childUris
  ]);

  return Array.from(paths, path => ({
    url: new URL(path, base).toString(),
    changeFrequency: "daily" as const,
    priority: 0.9
  }));
}
```

The file convention and response type come from the [Next.js sitemap reference](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-a-sitemap-using-code-js-ts). Do not remove the postbuild hook without installing the selected replacement or restoring its old dependency/config.

### A14: PWA decision

Before: `@ducanh2912/next-pwa` wrapper with worker output and scope `/app`. Current: wrapper/dependency removed, public worker artifacts remain. After: either retain supported PWA behavior under the chosen Next build pipeline, or approve retirement and address old registrations/artifacts together. Determine actual registration and scope before deciding; the old configured scope does not establish offline coverage for every route.

#### Code: distinguish the current config from completed PWA migration

**Before — committed wrapper excerpt:**

```ts
import withPWAInit from "@ducanh2912/next-pwa";

export default withPWAInit({
  dest: "public",
  register: true,
  scope: "/app"
})({
  reactStrictMode: true
});
```

**After — current config shape, PWA decision still open:** other image/header/action settings are omitted from this excerpt.

```ts
import type { NextConfig } from "next";

export default {
  reactStrictMode: true,
  reactCompiler: true
} satisfies NextConfig;
```

This shows the removed wrapper, not an implemented offline replacement. The final retained/retired worker behavior is still an A14 review item.

### A16: Vercel release contract

- Verify supported/patched resolved Next/React versions satisfy the actual Vercel deployment gate.
- Align root/app install and build commands, selected Node runtime, pnpm version, workspace package builds, and lockfile.
- Confirm private Motion+ dependency installation has its required registry configuration in the deployment environment.
- Confirm `WORDPRESS_AUTH_REFRESH_TOKEN` and other required existing build/runtime env names are available for codegen and Next execution. Record names/status only, never token values.
- Test host-only preview cookies and production-domain cookies independently.
- Review the preview result before a production deployment; this draft does not initiate either deployment.

#### Code: release checks use environment names, not pasted secrets

**Before — ambiguous runtime/deployment checks:** a CLI query can load a different env source than a build or Vercel request; a successful local query does not establish the deployed env configuration.

**After — proposed checklist values, with intentional placeholders:** this is a release worksheet, not an env file to copy into source control.

```text
Local / Vercel Preview / Vercel Production:

WORDPRESS_AUTH_REFRESH_TOKEN = <verify freshly generated value>
WORDPRESS_API_URL            = <verify configured WordPress endpoint>
BLOB_READ_WRITE_TOKEN        = <verify existing upload configuration>
Private Motion+ registry     = <verify install credentials/configuration>
Node runtime                = <match the reviewed tooling build targets>
pnpm version                = <match the root packageManager and lockfile>
Root build command          = pnpm build:web
```

## 9. Validation plan after approval

Run development from the repository root with the user's requested `pnpm run:web`; keep port 3001. Start the server only during an approved implementation/verification phase and stop it when that phase ends.

### Build and contracts

- [ ] Build required shared presets/packages, then run focused typecheck/lint and `pnpm build:web` from the root.
- [ ] Check GraphQL prebuild and sitemap generation complete; confirm no dead postbuild commands remain.
- [ ] Use focused proxy tests for all QR branches, regex substring/case behavior, pathname-prefix behavior, matcher exclusions, unrelated query preservation, fallback values, and cookies on returned responses.
- [ ] Verify cookie get/set/remove/select behavior, missing values, attribute scope, and first-visit/server-client agreement.
- [ ] Confirm CLI/editor formatting both honor no trailing commas after editor reload.

#### Code: a focused proxy contract check

**Before — behavior documented in middleware branches but no new migration check has been run.**

**After — proposed Vitest examples against the future proxy:** these tests are shown for review only; no test file has been added. They preserve substring matching and the legacy query-dropping behavior.

```ts
import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import proxy from "./proxy";

describe("legacy QR routing", () => {
  it.each(["true", "TRUE", "untrue"])("rewrites qr=%s", qr => {
    const request = new NextRequest(
      `https://drisdell.com/about-us?qr=${qr}&code=event`
    );
    const response = proxy(request);

    expect(response.headers.get("x-middleware-rewrite"))
      .toBe("https://drisdell.com/qr");
  });

  it("redirects a direct QR visit without a matching flag", () => {
    const response = proxy(new NextRequest("https://drisdell.com/qr"));

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://drisdell.com/");
  });
});
```

These examples target the synchronous proxy shape above. If implementation requires an async proxy, await it in the checks. Matcher coverage, metadata/cookie attributes, and ordinary rewrite preservation need their own focused cases.

#### Code: root verification commands after approval

**Before — `next build` alone is not the full migration gate.**

**After — proposed sequence from `/home/dopaminedriven/wcd/dcs/dcs`:**

```bash
pnpm build:targeted
pnpm --filter=@dcs/web typecheck
pnpm --filter=@dcs/web lint
pnpm build:web
pnpm run:web
```

The final command starts the development server for the browser checks below; stop it when verification is finished. These commands have not been run while adding the examples.

### Route and visual parity

| Route / surface | Required result |
| --- | --- |
| `/` | WP home content, blue background/white particles, original navigation and hero |
| `/about-us` | WP title/children, white background/blue particles, playable local MP3 |
| `/about-us/[slug]` | Representative/all generated children resolve with original content and metadata |
| `/consultants` | WP content/cards, blue background/white particles |
| `/consultants/[slug]` | Child content, employee resources/resume forms where applicable |
| `/contact-us` | White background/blue particles, contact anchor and form |
| QR cases | Legacy internal rewrite/direct-visit redirect behavior and event form |
| `/api?code=yes` | Compatible metadata JSON without unintended proxy enrichment |
| Unknown route | Existing not-found shell and return-home navigation |
| Public assets | Audio, fonts, images, manifest, robots, sitemap, and Next static/image paths resolve |
| Mobile / desktop / wide | Nav scroll locking, backdrop stacking, carousel dimensions, 2780px cap, fonts/colors, dialogs/focus, view transitions |

Form payload/error paths can be checked without contacting real recipients. A live submission/upload check must be intentional because it creates real external records. Browser/preview validation should include full navigation, client navigation, refresh, initial cookies, and reduced-motion settings.

## 10. Review decisions before the relevant implementation batch

| Decision | Draft recommendation | Why it needs a deliberate choice |
| --- | --- | --- |
| QR query retention | Preserve the old branches' query-dropping behavior; propose any fix separately | Retaining parameters would alter existing behavior |
| Query enrichment versus cookies | Keep legacy enrichment and API shape while adding typed cookie access | Cookies alone do not reproduce current consumers/contracts |
| Legacy fallback values | Preserve first; change inaccurate values in a separate reviewed correction | Region, coordinates, locale, IP, and timezone currently differ between versions |
| Root server cookie snapshot | Avoid by default; read request cookies only where required | Root reads affect rendering/caching |
| Default theme/provider | Preserve DCS visual defaults; review ThemeProvider placement/options | Generated system theme/default shell is not the existing client site |
| Basis Black/italic mapping | Match legacy selected faces before adopting unified family aliases | New font weights and alias removal can change layout/appearance |
| xs breakpoint | Review adding 375px support separately | Old definition was commented out despite a Footer `xs:*` consumer |
| CORS header | Preserve documented intent only after choosing request versus response behavior | Archived middleware and copied helper affect different sides of the response |
| Sitemap generation | Prefer complete native App Router implementation; review a temporary restoration if faster | Current hook is incomplete and deployment needs an actual generator |
| PWA | Decide retain versus retire after registration/scope inventory | Removing the wrapper alone does not finish this migration |
| Package/runtime versions | Reconcile chosen pnpm and Vercel Node with current package targets | Preset/current versions differ; deployment settings are not yet inspected |

## 11. Definition of done

- [ ] Approved action items are implemented in reviewable batches.
- [ ] Proxy preserves all documented legacy behavior, with any deliberate exceptions recorded.
- [ ] Cookie types/provider/server access are complete for their actual consumers.
- [ ] Tailwind is configured entirely through CSS and the legacy config is removed after parity.
- [ ] Fonts, colors, layout, particles, forms, carousels, and view transitions pass the required checks.
- [ ] The production build and sitemap/codegen hooks complete.
- [ ] Vercel preview validates the release candidate and environment-specific cookie behavior.
- [ ] Production release receives approval against that concrete result.

The immediate next step is review of this outline. Implementation can then start with the selected P0 batch; no application implementation is included in this document-only task.

### A17 example: remove the old config include after the retirement gate

**Before — selected current `apps/web/tsconfig.json` entries:**

```json
{
  "include": [
    "next.config.ts",
    "postcss.config.ts",
    "tailwind.config.ts",
    "index.d.ts",
    "src/**/*.tsx",
    "src/**/*.ts",
    ".next/types/**/*.ts"
  ]
}
```

**After — proposed excerpt after CSS parity and config removal:** retain the remaining original include entries that are omitted from this short example.

```json
{
  "include": [
    "next.config.ts",
    "postcss.config.ts",
    "index.d.ts",
    "src/**/*.tsx",
    "src/**/*.ts",
    ".next/types/**/*.ts"
  ]
}
```

This cleanup follows the mapped replacements and checks; it does not authorize deleting the archived migration references before review.
