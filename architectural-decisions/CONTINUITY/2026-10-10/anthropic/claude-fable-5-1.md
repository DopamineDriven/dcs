# Continuity brief — DCS redesign (v0-tw port)

**Written:** 2026-10-10 by Claude Fable 5.1, just before context compaction.
**Repo:** `/home/dopaminedriven/wcd/dcs/dcs` (pnpm + turbo monorepo), branch `dev`, default branch `master`.
**User:** Andrew Ross (andrew@windycitydevs.io). The site is his aunt and uncle's consulting firm (Drisdell Consulting Services). No formal spec; goal is "polished, sleek, less gimmicky".
**Plan + ledger:** `architectural-decisions/major-bump/fable-plan.md` (docket, decisions log, Phase 1 plan, revisions), `fable-plan-ledger.md`, `fable-plan-review-2026-10-08.md`, `action-items.md` (migration register A01–A17), `navigation-sync.md`.
**Design source:** `/home/dopaminedriven/wcd/dcs/v0-tw` (Tailwind-converted v0 redesign; `components/*.tsx`, `app/globals.css`, `lib/site-content.ts`). Its About Us copy equals the live site content. The older `/home/dopaminedriven/wcd/dcs/v0` used handwritten CSS; ignore it now.

---

## 1. Hard rules and conventions (also saved in Claude memory)

- **Root scripts only** for install/build/dev: `pnpm install`, `pnpm build:ui`, `pnpm run:web` from repo root. The user runs reinstalls. Typecheck/lint/test run inside the package: `cd apps/web && pnpm typecheck | pnpm lint | pnpm test | pnpm vitest run`.
- **Test notation:** `src/tests/*.test.ts` = pure Node tests (`node --test --import tsx`); `src/test/*.spec.tsx` = vitest + jsdom. `apps/web/vitest.config.ts` restricts vitest to `src/**/*.spec.{ts,tsx}`. Specs render with `react-dom/client` + `act` (no Testing Library), mock `next/navigation` with `vi.mock`, await a tick after AnimatePresence exits.
- **TDD** per superpowers skills: failing test first, watched red, then green. Commit only when the user asks ("can we commit please"); always `git add -A` at root, attribution line `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`. Records (plans/ledgers) live in `architectural-decisions/`, never `.superpowers/`.
- **TypeScript:** constant data uses `const x = [...] as const satisfies readonly T[]` (types use readonly arrays); never `const x: T[]`. `ComponentPropsWithRef<typeof Link>` for next/link props.
- **ui tree:** kebab-case file names; each section's root is `<dir>/index.tsx` (`ui/nav/index.tsx` exports `SiteHeader`, `ui/hero/index.tsx` exports `HomeHero`); folders named by function (`ui/nav`, not `ui/brand`); one component per file; conditional classes always via `cn()`; `src/components` is gone, shared primitives come from `@dcs/ui`. Remaining PascalCase files (`ui/sections/*`, `ui/dynamic/*`, `ui/loading/*`, `ui/meta/Swr.tsx`, `ui/preview/Notice.tsx`) migrate as touched. **Never touch GraphQL files** (`src/fragments/*`, `src/queries/*`, `src/mutations/*`).
- **Styling:** Tailwind v4.3. Light theme only (next-themes removed; `@custom-variant dark` stays defined but inert). Semantic tokens now map to the dcs palette in BOTH `apps/web/src/app/global.css` and `packages/ui/src/globals.css`: primary = dcs-800 (`#234670`, DCS blue), foreground = dcs-950, muted = dcs-50, muted-foreground = gray-500, border = 14% dcs-800 mix. v0-tw class strings port as written (`bg-primary`, `text-muted-foreground`, bare `border`). Named breakpoints: `xssm` 30rem, `smaller` 37.5rem, `mdlg` 56.25rem, `almost-lg` 62.5rem, `larger` 68.75rem, `lgxl` 75rem, `2xlplus` 93.75rem. `page-container` utility = v0-tw container (2.5rem gutters → 3.5 at smaller → 4.5 at almost-lg → 7 at lgxl, max 80rem); `eyebrow` utility. Tokens like `shadow-link`, `animate-image-arrive`, `animate-loading-blink`, `bg-loading-dot` exist.
- **Element custom variants** in both themes: `p: h1: h2: h3: h4: ul: ol: li: a: img: audio: video: svg: strong: pp:` (`& p+p`) plus `h1h3`. Use them instead of `[&_p]:`. Stacking verified: `hover:svg:x` → `:hover svg`; `smaller:p:` and `p:smaller:` both work; complex guard form `svg:not-[[class*='size-']]:size-4`. Direct-child selectors (`[&>svg]:`, `[&>input]:`) stay as written.
- **CSS modules** in web must start with `@reference "../../app/global.css"`; prefer no new modules.
- **Headless WordPress is the source of truth:** WP-backed routes keep `export const revalidate = 120` so CMS edits ship without a redeploy. `lib/server-cookies.ts`, `proxy.ts`, `context/cookie-context.tsx`, `types/cookies.ts` are the user's visitor/cookie pipeline: **do not change their logic**. Locally the cookies hold the fallback values from `server-cookies.ts`; that is expected.
- **`@d0paminedriven/*` packages are the user's** (`fs`, `codemod`, `turbogen`, `iso-3166-1`). Use their APIs directly: `new Fs(process.cwd())`, `fs.fileToBuffer(path)`, `fs.readDir`, `fs.withWs(path, data)` (creates directories), `fs.fetchRemoteWriteLocalLargeFiles`.
- **QR route** `/qr` is a business-card landing page reachable only via `?qr=true` (proxy rewrites + `qr_access` cookie); never in the nav; `activeParent("/qr")` is undefined by design.
- Pre-existing debt not in scope: web typecheck has ~4 errors in `types/fs.ts`, `utils/fs.ts`, `utils/blobby.ts`; lint has ~90 errors in untouched files. Report only that touched files are clean.

## 2. Commits made this cycle (all on `dev`)

| Commit | Summary |
|---|---|
| `7da3bac` | Rebuild web shell: SiteHeader, toast (`@dcs/ui` ToastProvider/useToast replaces react-hot-toast), coverflow carousel (motion-plus; embla removed), light-only theme, node/vitest scripts, plan docs |
| `d1e365d` | Base border color → `var(--color-border)` |
| `80c1994` | Port project delivery diagram (`ui/delivery/*`, `lib/project-delivery.ts`) |
| `94488cc` | Port home hero (`ui/hero`) and discovery section (`ui/discovery`); `public/images/dcs-architecture.webp`; `companyGroups/expertiseLinks/consultantLinks` added to `lib/site-navigation.ts` by the user |
| `86975ce` | Move header to `ui/nav/index.tsx` (+ `public/images/dcs-logo.svg`) |
| `de414c6` | Port detail frame (`ui/detail/{index,hero,breadcrumbs,sidebar,content,narration}.tsx`), `lib/site-content.ts` (curated SiteContent for 14 pages + `findSitePage`, `detailParent`, `detailCrumbs`, `siblingLinks`, `isWidePresentation`, `normalizeSitePath`), `ui/expertise` + `lib/expertise.ts`, `ui/promise`, `ui/cta`, `ui/footer` (replaces old Footer), static home page; about images + audio under `public/images`, `public/audio`; `page-container` realigned |
| `382a31e` | Wire About Us / Consultants parent + `[slug]` routes to `DetailPage` with live WP content: `lib/wp-page.ts` (`parseWpContent` lifts opening `<h3>` as lead, extracts narration mp3 from the audio shortcode, strips shortcode/IE comment/empty `<p>`; `mergeSiteContent(curated, wpPage)` keeps designed title/description/presentation/action, takes eyebrow/lead/body/narration/image from WP, builds a frame from WP alone when no curated entry); `ui/detail/wp-body.tsx`; `DetailPage` gained `after` slot and renders `lead`; careers → `<ContactForm />` in `after`, submit-a-resume → `<SubmitResume />`; removed SubContent/Switch/ChildrenScaffold/OurExpertise/OurProjectDelivery/children-scaffold.module.css |
| `c5010b0` | Element custom variants in both themes; `WpBody` uses them |
| `7793857` | `svg/h1/h4/video` variants; `[&_svg]:` → `svg:` across `@dcs/ui` (41 sites) and web nav; `svg:not-[[class*='size-']]:size-N` |
| `355c7ca` | Last `text-` svg guards in select/dropdown-menu |

Tests at last green run: web node 41 (after helper work), web vitest 31 (brand 5, site-header 15, detail-page 10, footer 1), ui vitest 13.

## 3. Uncommitted working tree right now (do not lose)

**User's own in-progress edits (not mine; review before committing):** `apps/web/next.config.ts`, `apps/web/src/app/global.css`, `src/instrumentation-client.ts`, `src/ui/layout/index.tsx`, `src/ui/nav/{brand,index,menu-link,mobile-drawer}.tsx`, `src/ui/particles/ParticleButton.tsx`, `src/ui/preview/Notice.tsx` (+ deleted `notice.module.css`), new `src/ui/nav/test.tsx`, new `public/flags/` (259 country SVGs, lowercase alpha-2 names, pulled by `src/utils/get-flags.ts`), new `src/utils/get-flags.ts`.

**Mine, tested, not yet wired:**
- `src/lib/visitor.ts` — `visitorFields(cookies: Partial<CookieValue>): VisitorFields` forwards EVERY cookie key from `COOKIES` plus `"user-agent"` (from `ua`), `lat`, `lng` (split from `latlng`, validated). Test: `src/tests/visitor.test.ts` (green).
- `src/lib/flag.ts` — currently the browser canvas version (`captureFlag`, `flagCode`, `flagImageTag`) with test `src/tests/flag.test.ts` (green). **This is being superseded** (see §4.1).
- `src/tests/alpha2.test.ts` — written, NOT yet run (user said "wait"): asserts every key of `alpha2ToCountryCode` resolves via `getDataByAlpha2`, `alpha2 === key`, `flagUrl` ends with `/flags/<cc>.svg`, `flagAspectRatio` is a `w/h` string; spot checks US `19/10`, CH `1/1`, QA `28/11`.

## 4. In-flight decision: the submission `flag` field

Forms (`ui/sections/ContactForm.tsx`, `SubmitResumeForm.tsx`, `EventForm.tsx`) still fetch `/api?code=yes` via `useSWR` and append `user-agent, ip, lat, lng, tz, city, flag`. Server actions (`src/app/actions.ts`: `contactUsAction`, `eventSubmissionAction`, `resumeSubmissionAction`) read those names and pass them to `utils/handle-body.ts` (`flag: ${flag}` in the email body). The user wants the forms to keep their exact look (he is happy with them) and to stop using the API route; metadata comes from the cookie context (`useCookiesCtx().getAll()` → `visitorFields`).

**Flag, latest direction (user-driven, 2026-10-10):** use `@d0paminedriven/iso-3166-1` through `src/lib/alpha2-to-country-code.ts` (`getDataByAlpha2(alpha2)` → `{ alpha2, alpha3, fullName, flagUrl, countryArea, flagAspectRatio }`). Findings from my probe:
- `flagAspectRatio` values are strings in **width/height** form. Full union the user supplied: `"1.21901033/1" | "1.618/1" | "1/1" | "10/7" | "11/6" | "11/7" | "11/8" | "15/13" | "18/11" | "19/10" | "2/1" | "20/11" | "22/15" | "25/18" | "26/17" | "28/11" | "3/2" | "335/189" | "36/19" | "37/28" | "4/3" | "41/22" | "5/3" | "5/4" | "7/4" | "7/5" | "7/6" | "8/5"` (type `FlagAspectRatioUnion`; check whether the package exports it).
- `flagUrl` = `https://raw.githubusercontent.com/DopamineDriven/portfolio-2025/master/apps/chess-v2/public/flags/<cc>.svg` (same files as `public/flags`).
- **Bug 1:** the package needs 3-digit numeric codes; 30 keys in `alpha2ToCountryCode` are unpadded (`AD: "20"`, `AF: "4"`, …). Fix: `alpha2ToCountryCode[a].padStart(3, "0")` inside `getDataByAlpha2` (verified: 0 failures after padding).
- **Bug 2:** `AT: "4"` is wrong (pads to Afghanistan `004`); Austria is `"40"` → `040`. The alpha2-echo test will catch it. User said "wait" before I ran it — ask how he wants both handled.
- Intended helper (replace current `lib/flag.ts`): pure, server-safe `flagImageTag(country, height = 32)` → `getDataByAlpha2` → `<img src="${flagUrl}" width="${round(height * w/h)}" height="${height}" alt="${fullName} flag">`, empty string for invalid codes; `parseAspectRatio("19/10") === 1.9`; `flagDimensions`. Then in `actions.ts` set `flag: flagImageTag(formData.get("country"))` in all three actions (the client sends `country` via `visitorFields`). The user explicitly wants the aspect ratio preserved. Earlier alternatives (hosted PNG via sharp script, base64 embed via canvas) were discussed and set aside; note Gmail does not render SVG images or data URIs, which the user accepted.
- Then wire forms in place: delete `useSWR`/`fetcher`/`UseSwrSync`/`dataCb`/`useOnLoadCb`/`onLoad`/`formData.append` blocks; in `formAction`: `for (const [k, v] of Object.entries(visitorFields(getAll()))) formData.set(k, v)`; toast results (`useToast` from `@dcs/ui`, `submissionFailure` from `utils/submission-result`); keep `SendButton` and all JSX/classes. Convert `contactUsAction` and `resumeSubmissionAction` to return `SubmissionResult` (`submissionResult(data)` / `submissionFailure(err)`) like `eventSubmissionAction`. Delete `src/app/api/route.ts`, `src/ui/meta/Swr.tsx`, `ExpectedRes` in `src/types/next.ts`, and `swr` from `apps/web/package.json` + the `swr` catalog block in `pnpm-workspace.yaml` (user reinstalls).

## 5. Remaining docket (in order)

1. **Finish §4** (alpha2 fixes → flag helper → actions → forms → API/swr removal). Commit.
2. **Contact Us and QR pages off the particle header, delete tsparticles.** Decision: the three form pages render just the form with its heading, no DetailPage frame, no WP data, no featured image (screenshots approved: "Submit a Resume", "Send us an Email", "Inquire to learn more about Career Opportunities"). So `app/contact-us/page.tsx` → `<ContactForm />`; `app/qr/page.tsx` → `<EventForm /><SubEventForm />`; in `app/about-us/[slug]/page.tsx` and `app/consultants/[slug]/page.tsx` the form slugs (`our-careers`, `submit-a-resume`) should return the form directly instead of `DetailPage` + `after` (undo the `after` wiring for those two). Delete `src/ui/particles/*` and `particle-header.module.css`; remove `@tsparticles/engine|react|slim` from `apps/web/package.json` and the `tsparticles` catalog block; drop now-unused `LoadingDots`/`Spinner` imports where applicable. `ParticleButton` still has `[&_svg]:` (fine, it is deleted here).
3. **Styles pass** — the user's top priority now ("styles look bad because the migration isn't finished"). Ask for screenshots of what looks off. Likely: pages still mixing old `font-basis-grotesque-pro-*` / gray-900 styling with the new frame; header collapse (`lg` → should be `almost-lg`, matchMedia `(min-width: 62.5rem)`); the user has been editing `ui/nav/*` himself — review his diffs first.
4. **Shared `@dcs/ui/variants.css`** (user approved): move the element `@custom-variant` block to `packages/ui/src/variants.css`, add a tsdown css entry + `exports`/`typesVersions`, `@import` it from both stylesheets; keep `dark` out of it.
5. **Rename sweep** to kebab-case + `index.tsx` roots (approved, waiting for a quiet moment): `ui/sections/Footer.tsx` is already gone; `ui/sections/{ContactForm,EventForm,SubEventForm,SubmitResumeForm}.tsx` → `ui/forms/{contact,event,sub-event,submit-resume}.tsx`; `ui/dynamic/*` → kebab in place; `ui/loading/{Dots,Spinner}`; `ui/meta/Swr.tsx` (delete); `ui/preview/Notice.tsx` → `notice.tsx`. Never `src/fragments/*`.
6. **A4 housekeeping:** `viewport.userScalable: false` / `maximumScale: 1` in `layout.tsx` (accessibility); move vitest `include` into `@dcs/vitest-config`; `companyGroups`/`consultantLinks` duplicate the link data already in `menus` (`siblingLinks` derives from `menus`); `LoadingDots` could use `animate-loading-blink` + `bg-loading-dot`; deferred review minors in `fable-plan-ledger.md` (compact brand sizing, panel click-through blur, dialog `onClose`, reduced motion, `aria-current` on triggers, `main` tabIndex, spec gaps).

## 6. Key file map

- Header: `src/ui/nav/{index,brand,button,text-link,menu-link,mega-panel,mobile-drawer,drawer-link}.tsx`; model `src/lib/site-navigation.ts` (`menus` as const, `activeParent`, `menuLinks`, `contactUrl`, `homeUrl`); `src/navigation/transition-store.ts` + `src/instrumentation-client.ts` (`onRouterTransitionStart`, types from `next/dist/client/router-transition-types`); spec `src/test/site-header.spec.tsx` (12 cases + 3 review-fix cases).
- Layout: `src/ui/layout/index.tsx` (`LayoutScaffold`: `SiteHeader`, `<main id="main-content">`, `SiteFooter`); `src/app/layout.tsx` (DM Sans `--font-dm-sans`, `scroll-pt-22 smaller:scroll-pt-28` on html, CookieProvider + ToastProvider).
- Content: `src/lib/site-content.ts`, `src/lib/wp-page.ts`, `src/lib/expertise.ts`, `src/lib/project-delivery.ts`; WP queries `src/queries/{paths,page-by-uri,page-by-id-with-children}.ts`; types `src/types/wp.ts` (`parentPagesById`, `PageByUriProps`, `CardsProps`).
- Sections: `src/ui/{hero,discovery,promise,cta,footer,expertise,delivery,detail}/`; data cards `src/ui/dynamic/{Cards,CarouselCards}.tsx` (coverflow from `@dcs/ui`).
- Toast: `packages/ui/src/toast/*`, used via `useToast` from `@dcs/ui`; `src/utils/submission-result.ts`.
- Verification helpers used this cycle: compile a class list through Tailwind with `postcss([require('@tailwindcss/postcss')()])` against `global.css` with `source(none)` + `@source inline("…")` (run with `NODE_PATH=<repo>/node_modules` if scripted from the scratchpad).

## 7. Open questions to confirm with the user before acting

1. Fix `AT` to `"40"` and add `padStart(3, "0")` in `getDataByAlpha2`? (Both are his file.)
2. Flag in the email as `<img src=flagUrl width height>` sized from the w/h ratio at height 32 — confirm, then wire actions + forms.
3. Which pages/styles look wrong right now (screenshots), so the styles pass targets real issues.
4. Commit his pending nav/global.css edits together with the helper files, or separately?
