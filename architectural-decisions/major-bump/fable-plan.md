# DCS Redesign Docket and Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Status:** Docket current as of October 8, 2026. Phase 1 (site header) design approved in chat; Phase 2 (heroes) design proposed, awaiting approval; Phase 3 unscheduled.
**Working repository:** `/home/dopaminedriven/wcd/dcs/dcs` (branch `dev`).
**Design source:** `/home/dopaminedriven/wcd/dcs/v0` (the v0 redesign; its About Us copy is the live site's exact content).
**Related:** `architectural-decisions/major-bump/action-items.md` (migration action register A01–A17, October 4) and `architectural-decisions/major-bump/navigation-sync.md` (router transition pattern from the slipstream repo).

**Goal:** Replace the heavy, dated shell of the DCS site (Radix dropdown nav and full-canvas tsparticles heroes) with the polished, lightweight header and heroes from the v0 redesign, rebuilt on Tailwind v4, Base UI, and motion, without regressing the WordPress-driven pages.

**Architecture:** Site-specific components (header, heroes, brand primitives, navigation model) live in `apps/web`. Generic pieces (icons, toast, carousel) live in `@dcs/ui`. Styling is Tailwind utilities plus a handful of `@utility` definitions and brand-tuned semantic theme tokens; no new CSS modules. Navigation state closes on link click for instant feedback and on Next's pre-commit router transition hook for back/forward and programmatic navigations.

**Tech Stack:** Next 16.4 (App Router, React Compiler on), React 19.3, Tailwind 4.3, motion 14, motion-plus 3, `@dcs/ui` (Base UI primitives), next-themes 0.4.6, vitest 5 (jsdom) and `node --test` for tests, tsgo for typecheck, pnpm 12 with `nodeLinker: hoisted`.

**Spec:** This document (Part A records decisions; Part B is the Phase 1 plan). Visual reference: `v0/components/site-header.tsx`, `v0/app/globals.css` lines 50–97 and 168–188 (header, mega menu, drawer), and the responsive rules in the same file.

## Global Constraints

- Installs, builds, and dev servers run only from the repo root via root scripts: `pnpm install`, `pnpm build:ui`, `pnpm run:web`. The user runs reinstalls; executors edit manifests and stop.
- Typecheck, lint, and tests run inside the package: `cd apps/web && pnpm typecheck`, `pnpm lint`, `pnpm test` (node), `pnpm test:vitest run`.
- Test notation: `src/tests/*.test.ts` are pure Node tests (`node --test --import tsx`); `src/test/*.spec.tsx` are vitest + jsdom. Spec files must stay out of tsdown entry globs in `@dcs/ui`.
- No Radix. Prefer Base UI exports from `@dcs/ui`. Carousels are motion-plus only.
- Tailwind v4 only: `bg-opacity-*` and `shadow-sm` (v3 meaning) do not exist; use `/opacity` modifiers and `shadow-xs`. CSS modules must start with `@reference "../../app/global.css"`; prefer no new modules.
- Pre-existing debt is not in scope: web typecheck has 10 errors in 7 untouched files and lint has roughly 97 errors in untouched files. Report only that touched files are clean.
- Constant data uses `as const satisfies T` (readonly element types in `T`), never a `const x: T[]` annotation.
- Keep edits to in-progress files hunk-scoped; do not reformat files the user is mid-edit on (single-quote JSX in `Cards.tsx`, `EventForm.tsx`, `ParticleHeader.tsx` is intentional for now).
- The user never asked for commits. Checkpoint steps below are optional and user-run.

## Review Focus

1. Keyboard user tabs past the last mega-menu link: focus leaves the header and the panel must close so it does not float over content. Pinned in Task 6, spec case "closes when focus leaves the header".
2. Back/forward navigation while a menu or drawer is open: the transition is a `traverse`, no link was clicked, and the menu must still close. Pinned in Task 2 (store delivers traverse URLs) and Task 6, spec case "closes on a router transition".
3. Viewport grows from mobile to desktop while the drawer is open: the drawer must close and body scroll must unlock. Pinned in Task 6, spec case "closes the drawer when the viewport reaches desktop".
4. Clicking a mega-menu link to the page you are already on: Next does not navigate, so no transition fires, and the menu must still close via the click handler. Pinned in Task 6, spec case "closes when a panel link is clicked".
5. Hard reload on a child route like `/about-us/our-mission`: no transition exists, so the active parent must come from the committed `usePathname`. Pinned in Task 3 (`activeParent`) and Task 6, spec case "marks the active parent".

---

# Part A: Docket

## A0. Completed this cycle (October 7–8, 2026)

| Item | Outcome |
|---|---|
| Toast | react-hot-toast and the shadcn `use-toast` store removed; `useToast` from `@dcs/ui` wired; contact popup now submits through the form action and toasts the real result; `submissionResult` helper with node tests; 6-case toast spec in `@dcs/ui`. |
| Carousel | embla removed entirely; `CoverflowCarousel` / `CoverflowItem` in `@dcs/ui` with pure mappers and a 5-case spec; `CarouselCards` rebuilt on it, `lg:hidden`; dead `subpage-carousel.tsx` deleted. |
| tsparticles v4 | `ParticleHeader` migrated to `ParticlesProvider` + `loadSlim`; `ParticleButton` opacity classes converted to v4 modifiers. (Both become dead code in Phase 2.) |
| Dev hygiene | `predev: rm -rf .next` in web; `test` / `test:vitest` scripts in web and ui; `coverage.json` ignored; CSS modules fixed by the user with `@reference`. |

## A1. Phase 1: site header (approved)

Replace `apps/web/src/ui/sections/Nav.tsx` with a v0-derived header: sticky bar, brand lockup, Home / About Us / Consultants / Contact Us, mega panels for About Us and Consultants, Contact Us rendered as the primary brand button, native `dialog` drawer below `lg`, theme toggle in the right cluster. Full task breakdown in Part B.

## A2. Phase 2: parent-page heroes (design proposed, needs approval)

Pages using `ParticleHeaderComponent` today: `/` (HOME), `/about-us` (ABOUT), `/consultants` (CONSULTANTS), `/contact-us` (CONTACT), `/qr` (QR).

Proposed:
- `apps/web/src/ui/heroes/HomeHero.tsx`: static, code-owned copy ported from v0 (`Complex systems. Human solutions.`), eyebrow with rule line, primary brand button to `/contact-us`, text link to `/about-us/our-expertise`, reassurance line, image frame using `v0/public/images/dcs-architecture.webp` copied to `apps/web/public/images/`, corner caption, the "30+ years" note card, and the bottom strip. WordPress no longer supplies the home hero.
- `apps/web/src/ui/heroes/DetailHero.tsx`: muted background, breadcrumbs, eyebrow, headline, description, optional image. Props: `{ eyebrow, title, description, image?, crumbs }`. `/about-us` and `/consultants` pass the WordPress title and the v0 description; `/contact-us` and `/qr` pass static copy (QR keeps its current welcome text).
- Delete `ParticleHeader.tsx`, `ParticleButton.tsx`, `particle-header.module.css`; remove `@tsparticles/engine`, `@tsparticles/react`, `@tsparticles/slim` from the web manifest and the `tsparticles` catalog; drop the `Suspense` + `LoadingDots` wrappers that only existed for the particle init.
- `/qr` is a targeted landing page reachable only through the `?qr=true` rewrite (old logic in `apps/web/src/middleware.old.md`; proxy migration is action item A02). It never appears in the nav, `activeParent("/qr")` is `undefined` by design, and its hero keeps the business-card welcome copy.
- The About Us narration `audio` element currently injected as hero content moves into the page body (a `details` panel like v0's "Listen to this page").
- Tests: node test for a `breadcrumbs(pathname)` helper; vitest spec for `DetailHero` (renders crumbs with `aria-current`, renders image only when given).

## A3. Phase 3: later

- Home sections from v0: discovery grid, company promise band, contact band.
- Footer refresh from v0 (`SiteFooter`).
- Subpage layout from v0 `DetailPage`: sticky sidebar of sibling pages, content sections, narration panel. v0's About Us copy equals the live content, so WordPress can keep supplying body HTML while the frame comes from code.
- Copy v0 assets (`public/images/about-*.webp`, `public/audio/*.mp3`) once the pages that use them are built.
- Remove the now-unused offset-linked carousel export from `@dcs/ui` if nothing adopts it.

## A4. Housekeeping

- Reinstall after manifest edits: lockfile still references react-hot-toast, embla, and lodash until `pnpm install` runs from the root.
- Theming: `layout.tsx` has both the next-themes `ThemeProvider` (class attribute, system default) and a hand-written head script that adds `.dark` from OS preference. The script ignores a stored "light" choice and will fight the provider; remove it once the header lands. Dark mode stays supported (revised from the earlier light-only suggestion after seeing the toggle).
- `ThemeToggle` uses `text-brand-text-muted` / `hover:text-brand-text` which have no tokens; Task 7 passes semantic classes instead.
- `LayoutScaffold` wrapper hardcodes `bg-white`; Task 7 switches it to `bg-background` so dark mode renders correctly behind the header.
- `ParticleButton` size `dcs` uses `shadow-sm` (v4 meaning, heavier than the live site); moot once Phase 2 deletes it.
- `viewport.userScalable: false` / `maximumScale: 1` in `layout.tsx` block pinch-zoom; drop them (accessibility).
- Move the vitest `include` for `src/**/*.spec.{ts,tsx}` into `@dcs/vitest-config` so `packages/ui` cannot hit the same `node --test` collision.
- Pre-existing typecheck and lint debt tracked in `action-items.md` sections 7–9.

## A5. Decisions log

| Decision | Choice | Why |
|---|---|---|
| Home hero copy | Static, code-owned | Marketing copy is designed; WordPress keeps supplying subpage bodies. |
| Nav parents | Home, About Us, Consultants, Contact Us | Matches the WordPress route tree; v0's Expertise top-level dropped. |
| Contact Us | Rendered as the primary brand button in the header and as a plain link in the drawer | Keeps it a parent route and gives the header its CTA without duplication. |
| Typeface | DM Sans via `next/font`, set as `--font-sans` | v0 tuned tracking and weights for it; free; no license question. |
| Palette | Site code uses `dcs-*` and `gray-*` utilities directly; `dcs-800` is DCS blue. Semantic `@theme` tokens stay at their original values for `@dcs/ui` only (revised October 9) | One explicit palette; no `bg-primary`-style indirection in site code. |
| Dark mode | Removed on October 9: light only, next-themes dropped | Simpler; matches the original site. |
| Navigation events | Link `onClick` closes immediately; `instrumentation-client` `onRouterTransitionStart` publishes to a tiny store the header subscribes to; `usePathname` effect as committed-truth fallback | See "Two cents" below. |
| Where code lives | Header, model, brand primitives, heroes in `apps/web`; icons in `@dcs/ui` | Site-specific content and `next/navigation` usage belong to the app. |
| QR route | Not in the nav; reachable only via the `?qr=true` rewrite | Business-card landing page; direct `/qr` hits redirect home once the proxy (A02) is restored. |

### Two cents on `navigation-sync.md`

The pattern is sound and worth porting in a trimmed form. The valuable ideas are (1) splitting pre-commit intent (`onRouterTransitionStart`, which fires for `push`, `replace`, and `traverse`) from committed truth (`usePathname` / `useParams`), (2) keeping route hooks out of providers so context values stay stable across navigations, and (3) replaying the latest transition for subscribers that mount late. For this site the only consumer is "close any open menu the instant a navigation begins", which `usePathname` alone cannot do promptly because it updates after the new route commits, and `onClick` alone cannot do for back/forward. The warm-cache registry from slipstream is not needed here.

Version note: in the installed Next 16.4.0 the types are declared in `node_modules/next/dist/client/router-transition-types.d.ts` (`RouterTransitionType = 'push' | 'replace' | 'traverse'`, `RouterTransitionStartEvent = { id; timestamp; fromRoutes; prefetchIntent }`) and the hook signature is `onRouterTransitionStart(url, navigationType, event)`. They are not re-exported from the `next` package entry in 16.4.0, so Task 2 derives the parameter types from `ClientInstrumentationHooks` via a type-only deep import rather than copying the union by hand.

---

# Part B: Phase 1 Implementation Plan (site header)

## File structure

| File | Responsibility |
|---|---|
| `packages/ui/src/icons/arrow-up-right.tsx`, `arrow-down.tsx` | Two lucide-style icons in the existing `BaseSVGProps` pattern, registered in `icons/index.tsx` and re-exported from `src/index.ts`. |
| `apps/web/src/navigation/transition-store.ts` | Framework-free pub/sub for router transition starts with latest-value replay. |
| `apps/web/src/instrumentation-client.ts` | Next client instrumentation hook forwarding to the store. |
| `apps/web/src/lib/site-navigation.ts` | Navigation model (menus, groups, links, copy) and `activeParent(pathname)`. |
| `apps/web/src/app/global.css` | Theme token changes, `--font-sans`, `@utility page-container`, `@utility eyebrow`. |
| `apps/web/src/app/layout.tsx` | DM Sans font variable on `html`. |
| `apps/web/src/ui/brand/button.tsx`, `text-link.tsx`, `brand.tsx` | Brand button link, text link, brand lockup. |
| `apps/web/src/ui/sections/SiteHeader.tsx` | Header bar, mega panel, mobile drawer. |
| `apps/web/src/ui/layout/index.tsx` | Mount `SiteHeader`, `id="main-content"`, `bg-background`. |
| Deleted | `ui/sections/Nav.tsx`, `ui/sections/navbar.module.css`, `ui/buttons/NavButton.tsx`; `lodash`, `@types/lodash`, `@types/lodash.throttle` from `apps/web/package.json`. |
| Tests | `apps/web/src/tests/transition-store.test.ts`, `apps/web/src/tests/site-navigation.test.ts`, `apps/web/src/test/site-header.spec.tsx`, `packages/ui/src/test/icons.spec.tsx`. |

---

### Task 1: ArrowUpRight and ArrowDown icons in `@dcs/ui`

**Status:** Done by the user on October 8, 2026 (icons added, registered, re-exported, `pnpm build:ui` run). Verified at execution start.

**Files:**
- Create: `packages/ui/src/icons/arrow-up-right.tsx`, `packages/ui/src/icons/arrow-down.tsx`
- Modify: `packages/ui/src/icons/index.tsx` (imports, `IconComponents`, export list), `packages/ui/src/index.ts` (re-exports next to `ArrowDownCircle`)
- Test: `packages/ui/src/test/icons.spec.tsx`

**Interfaces:**
- Produces: `ArrowUpRight`, `ArrowDown` components of type `(props: BaseSVGProps) => JSX.Element`, exported from `@dcs/ui` and `@dcs/ui/icons`.

- [ ] **Step 1: Write the failing test**

```tsx
// packages/ui/src/test/icons.spec.tsx
import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { ArrowDown, ArrowUpRight } from "@/icons/index";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function render(node: React.ReactNode) {
  const container = document.createElement("div");
  const root = createRoot(container);
  act(() => root.render(node));
  return container;
}

describe("arrow icons", () => {
  it("renders ArrowUpRight as a 24px stroke icon that accepts className", () => {
    const el = render(<ArrowUpRight className="size-4" aria-hidden />);
    const svg = el.querySelector("svg");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
    expect(svg?.getAttribute("stroke")).toBe("currentColor");
    expect(svg?.getAttribute("class")).toBe("size-4");
    expect(svg?.querySelectorAll("path")).toHaveLength(2);
  });

  it("renders ArrowDown with the img role by default", () => {
    const el = render(<ArrowDown />);
    expect(el.querySelector("svg")?.getAttribute("role")).toBe("img");
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `cd packages/ui && pnpm vitest run src/test/icons.spec.tsx`
Expected: FAIL, `"ArrowUpRight" is not exported` (or `does not provide an export named`).

- [ ] **Step 3: Add the two icons**

```tsx
// packages/ui/src/icons/arrow-up-right.tsx
import type { BaseSVGProps } from "@/icons/index";

export function ArrowUpRight({ role = "img", ...svg }: BaseSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svg}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
```

```tsx
// packages/ui/src/icons/arrow-down.tsx
import type { BaseSVGProps } from "@/icons/index";

export function ArrowDown({ role = "img", ...svg }: BaseSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svg}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
```

In `packages/ui/src/icons/index.tsx`: add `import { ArrowDown } from "@/icons/arrow-down";` and `import { ArrowUpRight } from "@/icons/arrow-up-right";` in alphabetical position; add `ArrowDown,` and `ArrowUpRight,` to the `IconComponents` object and to the trailing `export { ... }` list, both alphabetically next to `ArrowDownCircle` and `ArrowRight`.

In `packages/ui/src/index.ts`, after `export { ArrowDownCircle } from "@/icons/arrow-down-circle";` add:

```ts
export { ArrowDown } from "@/icons/arrow-down";
```

and after `export { ArrowRight } from "@/icons/arrow-right";` add:

```ts
export { ArrowUpRight } from "@/icons/arrow-up-right";
```

- [ ] **Step 4: Run tests, lint, typecheck, build**

Run: `cd packages/ui && pnpm vitest run && pnpm eslint src/icons src/test/icons.spec.tsx src/index.ts && pnpm typecheck`
Expected: all pass. Then from the repo root: `pnpm build:ui`. Confirm `rg -c "ArrowUpRight" packages/ui/dist/index.d.ts` is at least 1.

- [ ] **Step 5: Checkpoint (optional, user-run)**

`git add packages/ui/src/icons packages/ui/src/index.ts packages/ui/src/test/icons.spec.tsx`

---

### Task 2: Router transition store and client instrumentation

**Files:**
- Create: `apps/web/src/navigation/transition-store.ts`, `apps/web/src/instrumentation-client.ts`
- Test: `apps/web/src/tests/transition-store.test.ts`

**Interfaces:**
- Produces:
  - `type RouterTransition = { readonly id: string; readonly url: URL; readonly type: "push" | "replace" | "traverse"; readonly startedAt: number; readonly fromRoutes: readonly string[]; readonly prefetchIntent: "full" | "auto" | "none" | null }`
  - `publishRouterTransitionStart(url: string, type, event | null): void`
  - `subscribeRouterTransitionStart(listener: (t: RouterTransition) => void): () => void`
  - `getLatestRouterTransition(): RouterTransition | undefined`
  - `resetRouterTransitions(): void` (test-only helper, clears latest and listeners)

- [ ] **Step 1: Write the failing test**

```ts
// apps/web/src/tests/transition-store.test.ts
import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";
import {
  getLatestRouterTransition,
  publishRouterTransitionStart,
  resetRouterTransitions,
  subscribeRouterTransitionStart
} from "@/navigation/transition-store";

// The store resolves hrefs against the document; give Node a location.
(globalThis as { window?: unknown }).window = {
  location: { href: "https://www.drisdell.com/about-us" }
};

const event = {
  id: "t1",
  timestamp: 1700000000000,
  fromRoutes: ["/about-us"],
  prefetchIntent: "auto" as const
};

describe("transition store", () => {
  beforeEach(() => resetRouterTransitions());

  it("resolves a relative push href against the current document", () => {
    publishRouterTransitionStart("/consultants", "push", event);
    assert.equal(getLatestRouterTransition()?.url.pathname, "/consultants");
    assert.equal(getLatestRouterTransition()?.url.origin, "https://www.drisdell.com");
  });

  it("accepts the absolute href Next passes for traverse", () => {
    publishRouterTransitionStart("https://www.drisdell.com/contact-us?x=1", "traverse", null);
    const latest = getLatestRouterTransition();
    assert.equal(latest?.type, "traverse");
    assert.equal(latest?.url.pathname, "/contact-us");
    assert.equal(latest?.url.search, "?x=1");
  });

  it("fills in a local id, timestamp, and empty routes when Next sends no event", () => {
    publishRouterTransitionStart("/", "replace", null);
    const latest = getLatestRouterTransition();
    assert.match(latest?.id ?? "", /^local-/);
    assert.ok(typeof latest?.startedAt === "number");
    assert.deepEqual(latest?.fromRoutes, []);
    assert.equal(latest?.prefetchIntent, null);
  });

  it("delivers transitions to subscribers until they unsubscribe", () => {
    const seen: string[] = [];
    const unsubscribe = subscribeRouterTransitionStart(t => seen.push(t.url.pathname));
    publishRouterTransitionStart("/about-us/our-mission", "push", event);
    unsubscribe();
    publishRouterTransitionStart("/consultants", "push", event);
    assert.deepEqual(seen, ["/about-us/our-mission"]);
  });

  it("exposes the latest transition so late subscribers can replay it", () => {
    publishRouterTransitionStart("/qr", "push", event);
    assert.equal(getLatestRouterTransition()?.url.pathname, "/qr");
    resetRouterTransitions();
    assert.equal(getLatestRouterTransition(), undefined);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `cd apps/web && pnpm test`
Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `@/navigation/transition-store`.

- [ ] **Step 3: Write the store and the instrumentation hook**

```ts
// apps/web/src/navigation/transition-store.ts
import type { ClientInstrumentationHooks } from "next/dist/client/router-transition-types";

// Next 16.4.0 does not re-export these from the package entry; derive them
// from the hook signature so a future re-export is a one-line swap.
type OnRouterTransitionStart = NonNullable<
  ClientInstrumentationHooks["onRouterTransitionStart"]
>;
type TransitionType = Parameters<OnRouterTransitionStart>[1];
type TransitionStartEvent = Parameters<OnRouterTransitionStart>[2];

export type RouterTransition = {
  readonly id: string;
  readonly url: URL;
  readonly type: TransitionType;
  readonly startedAt: number;
  readonly fromRoutes: readonly string[];
  readonly prefetchIntent: NonNullable<TransitionStartEvent>["prefetchIntent"];
};

type TransitionListener = (transition: RouterTransition) => void;

const listeners = new Set<TransitionListener>();
let latest: RouterTransition | undefined;
let fallbackSequence = 0;

export function publishRouterTransitionStart(
  url: string,
  type: TransitionType,
  event: TransitionStartEvent
) {
  // Next passes a raw href for push/replace ("/consultants") but an absolute
  // location.href for traverse; resolving against the document normalizes both.
  const transition = {
    id: event?.id ?? `local-${(++fallbackSequence).toString(36)}`,
    url: new URL(url, window.location.href),
    type,
    startedAt: event?.timestamp ?? Date.now(),
    fromRoutes: event?.fromRoutes ?? [],
    prefetchIntent: event?.prefetchIntent ?? null
  } satisfies RouterTransition;

  latest = transition;
  for (const listener of listeners) listener(transition);
}

export function subscribeRouterTransitionStart(listener: TransitionListener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLatestRouterTransition() {
  return latest;
}

/** Test-only: forget the latest transition and drop every subscriber. */
export function resetRouterTransitions() {
  latest = undefined;
  listeners.clear();
}
```

```ts
// apps/web/src/instrumentation-client.ts
import type { ClientInstrumentationHooks } from "next/dist/client/router-transition-types";
import { publishRouterTransitionStart } from "@/navigation/transition-store";

export const onRouterTransitionStart: NonNullable<
  ClientInstrumentationHooks["onRouterTransitionStart"]
> = (url, navigationType, event) => {
  publishRouterTransitionStart(url, navigationType, event);
};
```

- [ ] **Step 4: Run tests, lint, typecheck**

Run: `cd apps/web && pnpm test && pnpm eslint src/navigation src/instrumentation-client.ts src/tests/transition-store.test.ts && pnpm typecheck 2>&1 | rg "transition-store|instrumentation-client" || echo clean`
Expected: 5 node tests pass; lint clean; typecheck prints `clean`. If lint rejects the deep `next/dist/...` type import, replace both imports with local aliases `type TransitionType = "push" | "replace" | "traverse"` and `type TransitionStartEvent = { id: string; timestamp: number; fromRoutes: string[]; prefetchIntent: "full" | "auto" | "none" | null } | null`, and type the hook export as `(url: string, navigationType: TransitionType, event: TransitionStartEvent) => void`.

- [ ] **Step 5: Checkpoint (optional, user-run)**

`git add apps/web/src/navigation apps/web/src/instrumentation-client.ts apps/web/src/tests/transition-store.test.ts`

---

### Task 3: Navigation model and `activeParent`

**Files:**
- Create: `apps/web/src/lib/site-navigation.ts`
- Test: `apps/web/src/tests/site-navigation.test.ts`

**Interfaces:**
- Produces:
  - `type NavLink = { label: string; description: string; href: string }`
  - `type NavGroup = { title: string; links: NavLink[] }`
  - `type MenuId = "about" | "consultants"`
  - `type NavMenu = { id: MenuId; label: string; href: string; eyebrow: string; headline: string; blurb: string; cta: { label: string; href: string }; groups: NavGroup[] }`
  - `const menus: readonly NavMenu[]`, `const contactUrl = "/contact-us"`, `const homeUrl = "/"`
  - `type ParentId = "home" | MenuId | "contact"`
  - `activeParent(pathname: string): ParentId | undefined`
  - `menuLinks(menu: NavMenu): NavLink[]` (flattened groups)

- [ ] **Step 1: Write the failing test**

```ts
// apps/web/src/tests/site-navigation.test.ts
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { activeParent, menuLinks, menus } from "@/lib/site-navigation";

const wordpressChildren = [
  "/about-us/our-careers",
  "/about-us/our-consultants",
  "/about-us/our-customers",
  "/about-us/our-expertise",
  "/about-us/our-mission",
  "/about-us/our-organization",
  "/about-us/our-project-delivery",
  "/about-us/our-satisfied-clients",
  "/about-us/our-world",
  "/consultants/consultant-testimonials",
  "/consultants/skills-and-positions",
  "/consultants/submit-a-resume",
  "/consultants/why-drisdell-consulting-services"
];

describe("menus", () => {
  it("covers every WordPress child route exactly once", () => {
    const hrefs = menus.flatMap(menuLinks).map(link => link.href).sort();
    assert.deepEqual(hrefs, [...wordpressChildren].sort());
  });

  it("gives every link a label and a description", () => {
    for (const link of menus.flatMap(menuLinks)) {
      assert.ok(link.label.trim().length > 0, link.href);
      assert.ok(link.description.trim().length > 0, link.href);
    }
  });

  it("orders the parents About Us then Consultants", () => {
    assert.deepEqual(menus.map(menu => menu.id), ["about", "consultants"]);
  });
});

describe("activeParent", () => {
  it("maps the home path", () => {
    assert.equal(activeParent("/"), "home");
  });

  it("maps a parent and its children to the same menu", () => {
    assert.equal(activeParent("/about-us"), "about");
    assert.equal(activeParent("/about-us/our-mission"), "about");
    assert.equal(activeParent("/consultants/submit-a-resume"), "consultants");
  });

  it("maps contact and ignores query strings and trailing slashes", () => {
    assert.equal(activeParent("/contact-us/"), "contact");
    assert.equal(activeParent("/contact-us?x=1"), "contact");
  });

  it("returns undefined for routes outside the nav", () => {
    assert.equal(activeParent("/qr"), undefined);
    assert.equal(activeParent("/about-usual"), undefined);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `cd apps/web && pnpm test`
Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `@/lib/site-navigation`.

- [ ] **Step 3: Write the model**

```ts
// apps/web/src/lib/site-navigation.ts
export const homeUrl = "/";
export const contactUrl = "/contact-us";

export type NavLink = { label: string; description: string; href: string };
export type NavGroup = { title: string; links: readonly NavLink[] };
export type MenuId = "about" | "consultants";
export type ParentId = "home" | MenuId | "contact";

export type NavMenu = {
  id: MenuId;
  label: string;
  href: string;
  eyebrow: string;
  headline: string;
  blurb: string;
  cta: { label: string; href: string };
  groups: readonly NavGroup[];
};

export const menus = [
  {
    id: "about",
    label: "About Us",
    href: "/about-us",
    eyebrow: "In the company of experts",
    headline: "Good people.\nLasting partnerships.",
    blurb:
      "Independent thinking. Personal attention. A commitment that lasts beyond go-live.",
    cta: { label: "Get to know DCS", href: "/about-us" },
    groups: [
      {
        title: "Who we are",
        links: [
          { label: "Our mission", description: "Clear purpose. Real commitment.", href: "/about-us/our-mission" },
          { label: "Our organization", description: "Independent. Since 1995.", href: "/about-us/our-organization" },
          { label: "Our world", description: "Expertise wherever you work.", href: "/about-us/our-world" }
        ]
      },
      {
        title: "What we bring",
        links: [
          { label: "Our expertise", description: "Know-how that moves you forward.", href: "/about-us/our-expertise" },
          { label: "Our consultants", description: "Meet your next problem-solvers.", href: "/about-us/our-consultants" },
          { label: "Project delivery", description: "From day one to done.", href: "/about-us/our-project-delivery" }
        ]
      },
      {
        title: "Who we work with",
        links: [
          { label: "Our customers", description: "Built around your business.", href: "/about-us/our-customers" },
          { label: "Satisfied clients", description: "Relationships built on delivery.", href: "/about-us/our-satisfied-clients" },
          { label: "Careers at DCS", description: "Good work. Good people.", href: "/about-us/our-careers" }
        ]
      }
    ]
  },
  {
    id: "consultants",
    label: "Consultants",
    href: "/consultants",
    eyebrow: "In the company of experts",
    headline: "Experience is\nour difference.",
    blurb:
      "Independent thinking. Personal attention. A commitment that lasts beyond go-live.",
    cta: { label: "Consulting with DCS", href: "/consultants" },
    groups: [
      {
        title: "The people behind the work",
        links: [
          { label: "Consultant testimonials", description: "Hear from people who know us best.", href: "/consultants/consultant-testimonials" },
          { label: "Skills and positions", description: "Find where your experience belongs.", href: "/consultants/skills-and-positions" },
          { label: "Submit a résumé", description: "Start your next chapter with DCS.", href: "/consultants/submit-a-resume" },
          { label: "Why Drisdell?", description: "A different kind of consultancy.", href: "/consultants/why-drisdell-consulting-services" }
        ]
      }
    ]
  }
] as const satisfies readonly NavMenu[];

export function menuLinks(menu: NavMenu) {
  return menu.groups.flatMap(group => group.links);
}

const parents = [
  { id: "about", prefix: "/about-us" },
  { id: "consultants", prefix: "/consultants" },
  { id: "contact", prefix: contactUrl }
] as const satisfies readonly { id: ParentId; prefix: string }[];

export function activeParent(pathname: string): ParentId | undefined {
  const stripped = (pathname.split(/[?#]/)[0] ?? "").replace(/\/+$/, "");
  const path = stripped === "" ? homeUrl : stripped;
  if (path === homeUrl) return "home";
  return parents.find(
    parent => path === parent.prefix || path.startsWith(`${parent.prefix}/`)
  )?.id;
}
```

- [ ] **Step 4: Run tests, lint, typecheck**

Run: `cd apps/web && pnpm test && pnpm eslint src/lib/site-navigation.ts src/tests/site-navigation.test.ts && pnpm typecheck 2>&1 | rg "site-navigation" || echo clean`
Expected: 12 node tests pass (5 from Task 2, 7 here); lint clean; `clean`.

- [ ] **Step 5: Checkpoint (optional, user-run)**

`git add apps/web/src/lib/site-navigation.ts apps/web/src/tests/site-navigation.test.ts`

---

### Task 4: Brand tokens, font, and shared utilities

**Files:**
- Modify: `apps/web/src/app/global.css` (`@theme` block around lines 95–100 and 158–177; `.dark` block around lines 297–320; new `@utility` rules after the existing `@utility font-basis-grotesque-pro-*` block near line 420)
- Modify: `apps/web/src/app/layout.tsx` (font import and `html` className)

**Interfaces:**
- Produces: utilities `page-container`, `eyebrow`; theme tokens `--color-dcs-brand`, brand-tuned `--color-primary`, `--color-primary-foreground`, `--color-muted`, `--color-muted-foreground`, `--color-border`, `--color-input`, `--color-ring`, `--color-secondary`, `--color-secondary-foreground`, `--color-accent`, `--color-accent-foreground`; `--font-sans` set to DM Sans.

- [ ] **Step 1: Write the verification script (the "test" for CSS)**

Create `apps/web/scripts/check-theme.mjs` is not needed; use an inline check. Save this as the command you will run in Step 4:

```bash
cd apps/web && node -e "
const postcss=require('postcss');const tw=require('@tailwindcss/postcss');const fs=require('fs');
const css=fs.readFileSync('src/app/global.css','utf8').replace('source(\"../../src\")','source(none)')+'@source inline(\"page-container eyebrow bg-primary text-primary-foreground border-border bg-muted text-muted-foreground font-sans\");';
postcss([tw()]).process(css,{from:'src/app/global.css'}).then(r=>{const out=r.css;
for (const [label,needle] of [
 ['page-container utility','.page-container'],
 ['page-container <1024 rule','width: calc(100% - 56px)'],
 ['eyebrow utility','.eyebrow'],
 ['brand token','--color-dcs-brand: #234670'],
 ['primary is brand','--color-primary: var(--color-dcs-brand)'],
 ['dark primary','--color-primary: var(--color-dcs-400)'],
 ['font-sans is DM Sans','--font-sans: var(--font-dm-sans)'],
]) console.log(label.padEnd(26), out.includes(needle)?'ok':'MISSING');
}).catch(e=>console.error('ERR',e.message.split('\n')[0]))"
```

- [ ] **Step 2: Run it to verify it fails**

Expected now: `page-container utility MISSING`, `eyebrow utility MISSING`, `brand token MISSING`, `primary is brand MISSING`, `dark primary MISSING`, `font-sans is DM Sans MISSING`.

- [ ] **Step 3: Edit the stylesheet and layout**

In the `@theme` block, directly after `--font-geist-mono: var(--font-geist-mono);` add:

```css
  --font-sans: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
  --color-dcs-brand: #234670;
```

Replace these existing light-mode lines in the same `@theme` block:

```css
  --color-primary: var(--color-dcs-brand);
  --color-primary-foreground: oklch(100% 0 0);
  --color-secondary: var(--color-dcs-50);
  --color-secondary-foreground: var(--color-dcs-brand);
  --color-muted: var(--color-dcs-50);
  --color-muted-foreground: var(--color-gray-500);
  --color-accent: var(--color-dcs-50);
  --color-accent-foreground: var(--color-dcs-brand);
  --color-border: color-mix(in oklch, var(--color-dcs-brand) 14%, transparent);
  --color-input: color-mix(in oklch, var(--color-dcs-brand) 14%, transparent);
  --color-ring: var(--color-dcs-brand);
```

In the `.dark` block inside `@layer theme`, replace the matching lines:

```css
    --color-primary: var(--color-dcs-400);
    --color-primary-foreground: var(--color-dcs-950);
    --color-border: color-mix(in oklch, var(--color-dcs-400) 18%, transparent);
    --color-input: color-mix(in oklch, var(--color-dcs-400) 18%, transparent);
    --color-ring: var(--color-dcs-400);
```

(leave the dark `--color-muted`, `--color-muted-foreground`, `--color-secondary*`, `--color-accent*` values as they are.)

After the last `@utility font-basis-grotesque-pro-black-italic { ... }` block add:

```css
@utility page-container {
  width: min(100% - 112px, 1280px);
  margin-inline: auto;
  @media (width < 1200px) {
    width: calc(100% - 72px);
  }
  @media (width < 1024px) {
    width: calc(100% - 56px);
  }
  @media (width < 600px) {
    width: calc(100% - 40px);
  }
}

@utility eyebrow {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.115em;
  text-transform: uppercase;
  color: var(--color-primary);
}
```

In `apps/web/src/app/layout.tsx`, change `import { Inter } from "next/font/google";` to `import { DM_Sans, Inter } from "next/font/google";`, add after the `inter` constant:

```ts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap"
});
```

and add `${dmSans.variable}` to the `html` className template string.

- [ ] **Step 4: Run the verification script, then typecheck and lint the layout**

Run the Step 1 command. Expected: every line `ok`.
Run: `cd apps/web && pnpm eslint src/app/layout.tsx && pnpm typecheck 2>&1 | rg "layout.tsx" || echo clean`
Expected: lint clean; `clean`.

- [ ] **Step 5: Checkpoint (optional, user-run)**

`git add apps/web/src/app/global.css apps/web/src/app/layout.tsx`

---

### Task 5: Brand primitives (button link, text link, brand lockup)

**Files:**
- Create: `apps/web/src/ui/brand/button.tsx`, `apps/web/src/ui/brand/text-link.tsx`, `apps/web/src/ui/brand/brand.tsx`
- Test: `apps/web/src/test/brand.spec.tsx`

**Interfaces:**
- Consumes: `ArrowUpRight` from `@dcs/ui` (Task 1); `DrisdellIcon` from `@/ui/icons/DrisdellIcon` (exists).
- Produces:
  - `brandButtonVariants` (cva) with `variant: "primary" | "light"`
  - `BrandButtonLink(props: ComponentProps<typeof Link> & { variant?: "primary" | "light" })` renders a `next/link` anchor
  - `TextLink(props: ComponentProps<typeof Link>)`
  - `Brand({ onNavigate?: () => void; compact?: boolean })` renders the logo lockup link to `/`

- [ ] **Step 1: Write the failing test**

```tsx
// apps/web/src/test/brand.spec.tsx
import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { Brand } from "@/ui/brand/brand";
import { BrandButtonLink } from "@/ui/brand/button";
import { TextLink } from "@/ui/brand/text-link";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function render(node: React.ReactNode) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(node));
  return container;
}

describe("brand primitives", () => {
  it("renders the primary button as a link with brand colors", () => {
    const el = render(<BrandButtonLink href="/contact-us">Contact Us</BrandButtonLink>);
    const a = el.querySelector("a");
    expect(a?.getAttribute("href")).toBe("/contact-us");
    expect(a?.className).toContain("bg-primary");
    expect(a?.className).toContain("text-primary-foreground");
  });

  it("renders the light variant on a background surface", () => {
    const el = render(<BrandButtonLink href="/x" variant="light">Go</BrandButtonLink>);
    expect(el.querySelector("a")?.className).toContain("bg-background");
  });

  it("renders a text link in primary color", () => {
    const el = render(<TextLink href="/about-us">More</TextLink>);
    expect(el.querySelector("a")?.className).toContain("text-primary");
  });

  it("renders the brand lockup as a home link with the wordmark", () => {
    const el = render(<Brand />);
    const a = el.querySelector("a");
    expect(a?.getAttribute("href")).toBe("/");
    expect(a?.getAttribute("aria-label")).toBe("Drisdell Consulting Services home");
    expect(a?.textContent).toContain("Drisdell");
    expect(a?.textContent).toContain("Consulting Services");
    expect(a?.querySelector("svg")).not.toBeNull();
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `cd apps/web && pnpm vitest run src/test/brand.spec.tsx`
Expected: FAIL, cannot resolve `@/ui/brand/brand`. If instead `next/link` throws `invariant expected app router to be mounted`, add at the top of the spec:

```tsx
import { vi } from "vitest";
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: React.ComponentProps<"a"> & { href: string }) => (
    <a href={href} {...rest}>{children}</a>
  )
}));
```

- [ ] **Step 3: Write the primitives**

```tsx
// apps/web/src/ui/brand/button.tsx
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const brandButtonVariants = cva(
  "group/btn inline-flex min-h-12 items-center justify-center gap-5 rounded border border-transparent px-5 py-3 text-sm font-medium transition-[background-color,box-shadow] duration-180 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-180 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-foreground hover:shadow-[0_4px_12px_color-mix(in_oklch,var(--color-primary)_12%,transparent)]",
        light: "bg-background text-primary hover:bg-muted"
      }
    },
    defaultVariants: { variant: "primary" }
  }
);

export type BrandButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof brandButtonVariants>;

export function BrandButtonLink({ variant, className, ...props }: BrandButtonLinkProps) {
  return <Link className={cn(brandButtonVariants({ variant }), className)} {...props} />;
}
```

```tsx
// apps/web/src/ui/brand/text-link.tsx
import type { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TextLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-primary inline-flex items-center gap-3 text-sm font-medium [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-180 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5",
        className
      )}
      {...props}
    />
  );
}
```

```tsx
// apps/web/src/ui/brand/brand.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DrisdellIcon } from "@/ui/icons/DrisdellIcon";

export function Brand({
  onNavigate,
  compact = false
}: {
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Drisdell Consulting Services home"
      onClick={onNavigate}
      className="text-primary inline-flex shrink-0 items-center gap-3 max-sm:gap-2.5">
      <DrisdellIcon
        aria-hidden
        className={cn(
          "h-15 w-14.5 object-contain max-lg:h-13.5 max-lg:w-13 max-sm:h-12.5 max-sm:w-12",
          compact && "size-12"
        )}
      />
      <span className="flex flex-col">
        <span
          className={cn(
            "text-[23px] leading-[1.2] font-[650] tracking-[-0.045em] max-sm:text-[22px]",
            compact && "text-[21px]"
          )}>
          Drisdell
        </span>
        <span className="text-sm leading-[1.8] tracking-[0.015em]">Consulting Services</span>
      </span>
    </Link>
  );
}
```

- [ ] **Step 4: Run tests, lint, typecheck**

Run: `cd apps/web && pnpm vitest run src/test/brand.spec.tsx && pnpm eslint src/ui/brand src/test/brand.spec.tsx && pnpm typecheck 2>&1 | rg "ui/brand|brand.spec" || echo clean`
Expected: 4 pass; lint clean; `clean`.

- [ ] **Step 5: Checkpoint (optional, user-run)**

`git add apps/web/src/ui/brand apps/web/src/test/brand.spec.tsx`

---

### Task 6: `SiteHeader` with mega panel and mobile drawer

**Files:**
- Create: `apps/web/src/ui/sections/SiteHeader.tsx`
- Test: `apps/web/src/test/site-header.spec.tsx`

**Interfaces:**
- Consumes: `menus`, `activeParent`, `contactUrl`, `homeUrl`, `menuLinks`, types `MenuId`, `NavMenu`, `NavLink` (Task 3); `subscribeRouterTransitionStart`, `publishRouterTransitionStart`, `resetRouterTransitions` (Task 2); `Brand`, `BrandButtonLink`, `TextLink` (Task 5); `ArrowRight`, `ArrowUpRight`, `ChevronDown`, `Menu`, `X` from `@dcs/ui`; `page-container` and `eyebrow` utilities (Task 4).
- Produces: `SiteHeader({ actions?: ReactNode })`. `actions` renders once in the right cluster at every width (the theme toggle goes here).

- [ ] **Step 1: Write the failing spec**

```tsx
// apps/web/src/test/site-header.spec.tsx
import type { Root } from "react-dom/client";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { MotionGlobalConfig } from "motion/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  publishRouterTransitionStart,
  resetRouterTransitions
} from "@/navigation/transition-store";
import { SiteHeader } from "@/ui/sections/SiteHeader";

MotionGlobalConfig.skipAnimations = true;
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let pathname = "/";
vi.mock("next/navigation", () => ({ usePathname: () => pathname }));

// jsdom has no <dialog> methods; mirror the open attribute like a browser would.
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); };
});

type MediaListener = (e: { matches: boolean }) => void;
const mediaListeners = new Set<MediaListener>();
let desktop = true;
window.matchMedia = ((query: string) => ({
  media: query,
  get matches() { return desktop; },
  addEventListener: (_: "change", l: MediaListener) => mediaListeners.add(l),
  removeEventListener: (_: "change", l: MediaListener) => mediaListeners.delete(l),
  onchange: null, addListener() {}, removeListener() {}, dispatchEvent: () => true
})) as typeof window.matchMedia;

let container: HTMLDivElement;
let root: Root;

function mount(path = "/") {
  pathname = path;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<SiteHeader actions={<span data-testid="actions" />} />));
}

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  resetRouterTransitions();
  desktop = true;
  document.body.style.overflow = "";
});

const trigger = (id: string) => container.querySelector<HTMLButtonElement>(`#nav-trigger-${id}`)!;
const panel = () => container.querySelector<HTMLElement>("[data-mega-panel]");
const drawer = () => container.querySelector<HTMLDialogElement>("dialog")!;
const click = (el: Element) => act(() => el.dispatchEvent(new MouseEvent("click", { bubbles: true })));
const key = (el: Element, k: string) => act(() => el.dispatchEvent(new KeyboardEvent("keydown", { key: k, bubbles: true })));

describe("SiteHeader", () => {
  it("marks the active parent from the committed pathname", () => {
    mount("/about-us/our-mission");
    expect(trigger("about").dataset.current).toBe("true");
    expect(trigger("consultants").dataset.current).toBeUndefined();
    expect(container.querySelector('a[href="/"]')?.getAttribute("aria-current")).toBeNull();
  });

  it("marks Home as the current page on the root path", () => {
    mount("/");
    expect(container.querySelector('nav a[href="/"]')?.getAttribute("aria-current")).toBe("page");
  });

  it("opens and closes the About Us panel from its trigger", () => {
    mount();
    expect(panel()).toBeNull();
    click(trigger("about"));
    expect(trigger("about").getAttribute("aria-expanded")).toBe("true");
    expect(panel()?.textContent).toContain("Our mission");
    click(trigger("about"));
    expect(panel()).toBeNull();
  });

  it("switches panels when another trigger is clicked", () => {
    mount();
    click(trigger("about"));
    click(trigger("consultants"));
    expect(panel()?.textContent).toContain("Skills and positions");
    expect(panel()?.textContent).not.toContain("Our mission");
  });

  it("closes on Escape and returns focus to the trigger", () => {
    mount();
    click(trigger("about"));
    key(panel()!, "Escape");
    expect(panel()).toBeNull();
    expect(document.activeElement).toBe(trigger("about"));
  });

  it("closes on a pointerdown outside the header", () => {
    mount();
    click(trigger("about"));
    act(() => document.body.dispatchEvent(new Event("pointerdown", { bubbles: true })));
    expect(panel()).toBeNull();
  });

  it("closes when focus leaves the header", () => {
    mount();
    const outside = document.createElement("button");
    document.body.appendChild(outside);
    click(trigger("about"));
    act(() => {
      container.querySelector("header")!.dispatchEvent(
        new FocusEvent("focusout", { bubbles: true, relatedTarget: outside })
      );
    });
    expect(panel()).toBeNull();
    outside.remove();
  });

  it("closes when a panel link is clicked, even without navigation", () => {
    mount();
    click(trigger("about"));
    click(panel()!.querySelector('a[href="/about-us/our-mission"]')!);
    expect(panel()).toBeNull();
  });

  it("closes on a router transition such as back/forward", () => {
    mount();
    click(trigger("about"));
    act(() => publishRouterTransitionStart("https://www.drisdell.com/consultants", "traverse", null));
    expect(panel()).toBeNull();
  });

  it("opens the drawer from the menu trigger, locks scroll, and closes from its close button", () => {
    mount();
    const open = container.querySelector<HTMLButtonElement>('button[aria-label="Open navigation"]')!;
    click(open);
    expect(drawer().hasAttribute("open")).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    click(drawer().querySelector('button[aria-label="Close navigation"]')!);
    expect(drawer().hasAttribute("open")).toBe(false);
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(open);
  });

  it("closes the drawer when the viewport reaches desktop", () => {
    mount();
    click(container.querySelector('button[aria-label="Open navigation"]')!);
    desktop = true;
    act(() => { for (const l of mediaListeners) l({ matches: true }); });
    expect(drawer().hasAttribute("open")).toBe(false);
  });

  it("renders the actions slot exactly once", () => {
    mount();
    expect(container.querySelectorAll('[data-testid="actions"]')).toHaveLength(1);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `cd apps/web && pnpm vitest run src/test/site-header.spec.tsx`
Expected: FAIL, cannot resolve `@/ui/sections/SiteHeader`. (If `next/link` needs the mock from Task 5 Step 2, add it here too.)

- [ ] **Step 3: Write the header**

```tsx
// apps/web/src/ui/sections/SiteHeader.tsx
"use client";

import type { ComponentProps, FocusEvent, KeyboardEvent, ReactNode, RefObject } from "react";
import { useEffect, useEffectEvent, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "@dcs/ui";
import type { MenuId, NavLink, NavMenu } from "@/lib/site-navigation";
import { activeParent, contactUrl, homeUrl, menuLinks, menus } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { subscribeRouterTransitionStart } from "@/navigation/transition-store";
import { Brand } from "@/ui/brand/brand";
import { BrandButtonLink } from "@/ui/brand/button";
import { TextLink } from "@/ui/brand/text-link";

const DESKTOP_QUERY = "(min-width: 64rem)";

const navLinkClass =
  "text-muted-foreground relative inline-flex min-h-24 items-center justify-center gap-1.5 text-sm font-medium transition-colors duration-180 hover:text-primary";
const navLinkActiveClass =
  "text-primary after:bg-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:content-['']";

export function SiteHeader({ actions }: { actions?: ReactNode }) {
  const pathname = usePathname();
  const current = activeParent(pathname);
  const [openMenu, setOpenMenu] = useState<MenuId>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const drawerTriggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const drawerId = useId();

  function closeAll() {
    setOpenMenu(undefined);
    setDrawerOpen(false);
  }

  // Pre-commit: any push/replace/traverse closes everything immediately.
  useEffect(
    () =>
      subscribeRouterTransitionStart(() => {
        setOpenMenu(undefined);
        setDrawerOpen(false);
      }),
    []
  );

  // Committed truth: covers transitions that began before the subscription.
  useEffect(() => {
    setOpenMenu(undefined);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: PointerEvent | Event) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpenMenu(undefined);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  function onHeaderKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && openMenu) {
      document.getElementById(`nav-trigger-${openMenu}`)?.focus();
      setOpenMenu(undefined);
    }
  }

  function onHeaderBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(undefined);
  }

  const activeMenu = menus.find(menu => menu.id === openMenu);

  return (
    <>
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground fixed top-3 left-4 z-100 -translate-y-[150%] px-5 py-3 transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <header
        ref={headerRef}
        onKeyDown={onHeaderKeyDown}
        onBlur={onHeaderBlur}
        className="bg-background border-border sticky top-0 z-40 border-b">
        <div className="page-container flex min-h-24 items-center justify-between gap-7 max-lg:min-h-20 max-sm:min-h-19 max-sm:gap-3">
          <Brand onNavigate={closeAll} />

          <nav aria-label="Main navigation" className="mr-5 ml-auto hidden items-center gap-7 lg:flex xl:gap-7.5">
            <Link
              href={homeUrl}
              aria-current={current === "home" ? "page" : undefined}
              onClick={closeAll}
              className={cn(navLinkClass, current === "home" && navLinkActiveClass)}>
              Home
            </Link>
            {menus.map(menu => {
              const isOpen = openMenu === menu.id;
              const isCurrent = current === menu.id;
              return (
                <button
                  key={menu.id}
                  type="button"
                  id={`nav-trigger-${menu.id}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  data-current={isCurrent ? "true" : undefined}
                  onClick={() => setOpenMenu(open => (open === menu.id ? undefined : menu.id))}
                  className={cn(navLinkClass, (isOpen || isCurrent) && navLinkActiveClass)}>
                  {menu.label}
                  <ChevronDown
                    aria-hidden
                    className={cn("size-3.5 transition-transform duration-180", isOpen && "rotate-180")}
                  />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {actions}
            <BrandButtonLink
              href={contactUrl}
              onClick={closeAll}
              aria-current={current === "contact" ? "page" : undefined}
              className="hidden min-h-11 px-4 py-2 lg:inline-flex">
              Contact Us
              <ArrowUpRight aria-hidden className="size-4" />
            </BrandButtonLink>
            <button
              ref={drawerTriggerRef}
              type="button"
              aria-label="Open navigation"
              aria-expanded={drawerOpen}
              aria-controls={drawerId}
              onClick={() => setDrawerOpen(true)}
              className="border-border text-primary inline-flex size-11 items-center justify-center rounded border lg:hidden">
              <Menu aria-hidden className="size-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && <MegaPanel id={panelId} menu={activeMenu} onNavigate={closeAll} />}
        </AnimatePresence>
      </header>

      <MobileDrawer
        id={drawerId}
        open={drawerOpen}
        current={current}
        triggerRef={drawerTriggerRef}
        onClose={() => setDrawerOpen(false)}
        onNavigate={closeAll}
      />
    </>
  );
}

function MegaPanel({ id, menu, onNavigate }: { id: string; menu: NavMenu; onNavigate: () => void }) {
  const multiGroup = menu.groups.length > 1;
  return (
    <motion.div
      id={id}
      data-mega-panel
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.18 }}
      className="bg-background border-border absolute inset-x-0 top-full border-b shadow-[0_18px_32px_color-mix(in_oklch,var(--color-foreground)_8%,transparent)]">
      <div className="page-container">
        <div className={cn("flex py-9", multiGroup ? "gap-7.5" : "gap-14 max-xl:gap-8")}>
          <div className={cn("border-border shrink-0 border-r pr-7", multiGroup ? "basis-1/4" : "basis-[29%] max-xl:basis-[26%]")}>
            <span className="eyebrow">{menu.eyebrow}</span>
            <h2 className="mt-4 text-[27px] leading-[1.22] tracking-[-0.04em] whitespace-pre-line">{menu.headline}</h2>
            <p className="text-muted-foreground mt-4 mb-6 max-w-[29ch] text-sm">{menu.blurb}</p>
            <TextLink href={menu.cta.href} onClick={onNavigate}>
              {menu.cta.label}
              <ArrowRight aria-hidden className="size-4" />
            </TextLink>
          </div>
          {menu.groups.map(group => (
            <div key={group.title} className="min-w-0 flex-1">
              <h3 className="eyebrow mb-4">{group.title}</h3>
              <div className={cn(multiGroup ? "flex flex-col gap-0.5" : "grid grid-cols-2 gap-x-8 gap-y-5")}>
                {group.links.map(link => (
                  <MenuLink key={link.href} link={link} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-border text-muted-foreground flex items-center justify-between gap-5 border-t py-4 text-sm">
          <span>Solving business challenges since 1995.</span>
          <Link href={contactUrl} onClick={onNavigate} className="text-primary inline-flex items-center gap-2">
            Have a project in mind?
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MenuLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group/link hover:bg-muted focus-visible:bg-muted -mx-3 flex items-center justify-between gap-3 rounded px-3 py-2 transition-colors duration-150 outline-none">
      <span className="flex flex-col gap-0.5">
        <span className="text-primary text-[15px] font-medium">{link.label}</span>
        <span className="text-muted-foreground text-sm">{link.description}</span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="text-primary size-4 shrink-0 opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
      />
    </Link>
  );
}

function MobileDrawer({
  id,
  open,
  current,
  triggerRef,
  onClose,
  onNavigate
}: {
  id: string;
  open: boolean;
  current: ReturnType<typeof activeParent>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onNavigate: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [section, setSection] = useState<MenuId>();
  const close = useEffectEvent(onClose);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: { matches: boolean }) => {
      if (event.matches) close();
    };
    media.addEventListener("change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      triggerRef.current?.focus();
    };
  }, [open, triggerRef]);

  const sectionLink = (props: ComponentProps<typeof Link>) => (
    <Link
      onClick={onNavigate}
      className="text-muted-foreground hover:text-primary flex items-center justify-between gap-3 py-2.5 text-[15px]"
      {...props}
    />
  );

  return (
    <dialog
      id={id}
      ref={ref}
      aria-label="Site navigation"
      onCancel={event => {
        event.preventDefault();
        onClose();
      }}
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="bg-background text-foreground fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(440px,100%)] max-w-full translate-x-full overflow-y-auto border-0 p-0 opacity-0 transition-[transform,opacity,display,overlay] duration-240 ease-out transition-discrete open:translate-x-0 open:opacity-100 starting:open:translate-x-full starting:open:opacity-0 backdrop:bg-foreground/35 backdrop:opacity-0 backdrop:transition-[opacity,display,overlay] backdrop:duration-240 backdrop:transition-discrete open:backdrop:opacity-100 starting:open:backdrop:opacity-0">
      <div className="flex min-h-full flex-col px-7 pt-5.5 pb-7">
        <div className="flex items-center justify-between gap-4 pb-6">
          <Brand compact onNavigate={onNavigate} />
          <button
            type="button"
            autoFocus
            aria-label="Close navigation"
            onClick={onClose}
            className="border-border text-primary inline-flex size-11 items-center justify-center rounded-full border">
            <X aria-hidden className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col">
          <Link
            href={homeUrl}
            onClick={onNavigate}
            aria-current={current === "home" ? "page" : undefined}
            className="text-primary flex w-full items-center justify-between gap-4 py-4 text-[23px] font-[450]">
            Home
            <ArrowUpRight aria-hidden className="size-5" />
          </Link>
          {menus.map(menu => {
            const expanded = section === menu.id;
            return (
              <div key={menu.id} className="border-border border-t">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${id}-${menu.id}`}
                  onClick={() => setSection(expanded ? undefined : menu.id)}
                  className="text-primary flex w-full items-center justify-between gap-4 py-4 text-[23px] font-[450]">
                  {menu.label}
                  <ChevronDown aria-hidden className={cn("size-5 transition-transform duration-180", expanded && "rotate-180")} />
                </button>
                <div id={`${id}-${menu.id}`} hidden={!expanded} className="flex flex-col pb-4.5">
                  {sectionLink({ href: menu.href, children: <>{menu.cta.label}<ArrowUpRight aria-hidden className="size-4" /></> })}
                  {menuLinks(menu).map(link =>
                    sectionLink({ key: link.href, href: link.href, children: <>{link.label}<ArrowUpRight aria-hidden className="size-4" /></> })
                  )}
                </div>
              </div>
            );
          })}
          <Link
            href={contactUrl}
            onClick={onNavigate}
            aria-current={current === "contact" ? "page" : undefined}
            className="border-border text-primary flex w-full items-center justify-between gap-4 border-t py-4 text-[23px] font-[450]">
            Contact Us
            <ArrowUpRight aria-hidden className="size-5" />
          </Link>
        </nav>
        <div className="mt-auto pt-9">
          <BrandButtonLink href={contactUrl} onClick={onNavigate} className="w-full justify-between">
            Let&apos;s talk
            <ArrowUpRight aria-hidden className="size-4" />
          </BrandButtonLink>
          <p className="text-muted-foreground mt-4 text-center text-sm">Independent expertise. Since 1995.</p>
        </div>
      </div>
    </dialog>
  );
}
```

- [ ] **Step 4: Run the spec, then lint and typecheck**

Run: `cd apps/web && pnpm vitest run src/test/site-header.spec.tsx`
Expected: 12 pass. Known places this can need adjustment, in order of likelihood:
- `next/link` outside the App Router throws: add the mock from Task 5 Step 2 to this spec.
- The "focus leaves" case: React's `onBlur` listens to `focusout`; the dispatched event must bubble (it does above).
- The "Escape" case: focus is moved before state clears; if `document.activeElement` is `body`, make sure the trigger exists in the DOM at the time (`document.getElementById` requires the container to be attached, which `mount` does).

Run: `cd apps/web && pnpm eslint src/ui/sections/SiteHeader.tsx src/test/site-header.spec.tsx && pnpm typecheck 2>&1 | rg "SiteHeader|site-header" || echo clean`
Expected: lint clean (the React Compiler lint allows `useEffectEvent` and state setters in effects); `clean`.

- [ ] **Step 5: Verify the drawer's backdrop utilities compile**

Run the Task 4 Step 1 command with this `@source inline(...)` list instead: `"starting:open:backdrop:opacity-0 open:backdrop:opacity-100 backdrop:transition-discrete backdrop:duration-240 starting:open:translate-x-full transition-discrete"` and check each selector appears in the output. If `starting:open:backdrop:opacity-0` is missing, move the backdrop rules into `global.css`:

```css
@layer components {
  .site-drawer::backdrop {
    background: color-mix(in oklch, var(--color-foreground) 35%, transparent);
    opacity: 0;
    transition: opacity 240ms, display 240ms allow-discrete, overlay 240ms allow-discrete;
  }
  .site-drawer[open]::backdrop { opacity: 1; }
  @starting-style { .site-drawer[open]::backdrop { opacity: 0; } }
}
```

and replace the four `backdrop:*` / `starting:open:backdrop:*` classes on the `dialog` with `site-drawer`.

- [ ] **Step 6: Checkpoint (optional, user-run)**

`git add apps/web/src/ui/sections/SiteHeader.tsx apps/web/src/test/site-header.spec.tsx`

---

### Task 7: Mount the header, retire the old nav

**Files:**
- Modify: `apps/web/src/ui/layout/index.tsx`
- Modify: `apps/web/package.json` (remove `lodash`, `@types/lodash`, `@types/lodash.throttle`), `pnpm-workspace.yaml` (remove the `lodash` catalog block if nothing else uses it: check with `rg -n "catalog:lodash" --glob 'package.json'`)
- Delete: `apps/web/src/ui/sections/Nav.tsx`, `apps/web/src/ui/sections/navbar.module.css`, `apps/web/src/ui/buttons/NavButton.tsx`

**Interfaces:**
- Consumes: `SiteHeader` (Task 6).

- [ ] **Step 1: Write the failing check**

Run: `cd apps/web && rg -n "SiteHeader|main-content" src/ui/layout/index.tsx || echo "not wired"`
Expected: `not wired`.

- [ ] **Step 2: Rewrite the scaffold**

```tsx
// apps/web/src/ui/layout/index.tsx
"use client";

import type { ReactNode } from "react";
import { useResolvedTheme } from "@dcs/ui";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Footer } from "@/ui/sections/Footer";
import { SiteHeader } from "@/ui/sections/SiteHeader";

const ThemeToggle = dynamic(
  () => import("@/ui/theme/index").then(d => d.ThemeToggle),
  { ssr: false }
);

export function LayoutScaffold({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  useResolvedTheme(resolvedTheme);

  return (
    <div className="bg-background m-0 flex min-h-full flex-col justify-between p-0">
      <SiteHeader
        actions={
          <ThemeToggle className="text-muted-foreground hover:bg-muted hover:text-primary" />
        }
      />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Delete the old nav and its dependencies**

```bash
cd apps/web && rm src/ui/sections/Nav.tsx src/ui/sections/navbar.module.css src/ui/buttons/NavButton.tsx
rmdir src/ui/buttons 2>/dev/null || true
rg -n "Nav\b|NavButton|navbar.module|lodash" src || echo "no stale references"
```

Then remove the three lodash entries from `apps/web/package.json` (dependencies: `lodash`; devDependencies: `@types/lodash`, `@types/lodash.throttle`) and, if `rg -n "catalog:lodash" --glob 'package.json' .` reports no other package, the `lodash:` block from the catalog in `pnpm-workspace.yaml`. Do not run `pnpm install`; the user reinstalls.

- [ ] **Step 4: Verify**

Run: `cd apps/web && pnpm test && pnpm vitest run && pnpm eslint src/ui/layout/index.tsx && pnpm typecheck 2>&1 | tail -3`
Expected: all node tests and specs pass; lint clean; typecheck total drops below the previous 10 errors (the old `Nav.tsx` had none, so expect the same count or lower) with no error in any touched file.
Then the user runs `pnpm run:web` from the root and checks: header at 1280px with both panels, keyboard tab order through a panel, the drawer at 390px, dark mode via the toggle, and that `Contact Us` is the only CTA in the bar.

- [ ] **Step 5: Checkpoint (optional, user-run)**

`git add -A apps/web/src/ui apps/web/package.json pnpm-workspace.yaml`

---

## Final review (October 8, 2026)

Fresh-context review found no Critical issues and four Important ones, all fixed in one pass with a failing test first:
- Task 6 plan defect: the drawer listed `transform` in its transition while Tailwind v4's `translate-x-*` writes the `translate` property, so it faded without sliding. Now `transition-[translate,opacity,display,overlay]`.
- Task 5/6 plan defect: `outline-none` sets `--tw-outline-style: none`, which `focus-visible:outline-2` then inherits, so neither the brand button nor the panel links showed a focus ring. `outline-none` removed from both.
- Task 6: the mega panel now renders inside the `nav` landmark right after its triggers, so it hides below `lg` with the nav, joins the landmark, and follows the trigger in tab order.
- Task 4 omission: `html { scroll-padding-top }` base rule (6rem, 5rem below 1024px, 4.75rem below 640px) so skip-link and in-page anchors clear the sticky header.
Deferred minors are listed in the ledger and the hand-off message.

## Revision (October 9, 2026): light only, dcs palette direct

- next-themes, the ThemeToggle, `useResolvedTheme` in the scaffold, the dark-flash head script, and `suppressHydrationWarning` are gone; `viewport.colorScheme` is `light`. The `.dark` token block and the two `.dark .ripple-container` rules were removed from `global.css`; `@custom-variant dark` stays defined but inert.
- Site code uses the dcs palette directly: `dcs-800` (= `#234670`) for brand blue, `dcs-950` for dark text, `dcs-50` for tinted surfaces, `gray-500` for muted text, `white` for surfaces, `dcs-800/15` for hairlines. The semantic tokens in `@theme` are back at their original values for `@dcs/ui`; `--color-dcs-brand` was dropped as redundant with `dcs-800`.
- `SiteHeader` lost its `actions` slot (nothing fills it now). The brand button's primary variant is `bg-dcs-800 text-white hover:bg-dcs-900`; the focus outline is `dcs-800` on both variants since it sits on the page background at offset 4.
- Specs pin the rule: the header must contain no semantic primary/background/muted/border utilities, and the brand primitives assert dcs classes.

## Self-review notes

- Spec coverage: approved design items map to tasks as follows: model → 3; icons → 1; tokens, font, utilities → 4; brand primitives → 5; header, mega panel, drawer, skip link, close-on-navigation → 6 (with 2 for the transition source); mounting, `main-content`, theme toggle slot, cleanup → 7.
- Type consistency: `MenuId`, `NavMenu`, `NavLink`, `activeParent`, `menuLinks`, `contactUrl`, `homeUrl` are defined in Task 3 and used by name in Task 6; `subscribeRouterTransitionStart`, `publishRouterTransitionStart`, `resetRouterTransitions` are defined in Task 2 and used in Task 6's spec; `Brand`, `BrandButtonLink`, `TextLink` are defined in Task 5 and used in Task 6.
- Review Focus items 1–5 are each pinned to a named spec case in Task 6 or a test in Tasks 2–3.
