# Review package — fable-plan Phase 1 (site header)

Working-tree review: nothing in this phase is committed. Modified tracked files are shown as `git diff HEAD`; new files are shown in full. Base for reference: e175361 on branch dev.

NOTE for the reviewer: the diffs of apps/web/package.json, pnpm-workspace.yaml, apps/web/src/app/global.css and apps/web/src/app/layout.tsx also contain the user's own earlier, unrelated migration edits. In scope for this phase are only: lodash removals (package.json, catalog), the `--font-sans` / `--color-dcs-brand` lines, the semantic token lines in the light @theme block and the .dark block, the `@utility page-container` and `@utility eyebrow` blocks, and the DM_Sans font in layout.tsx.

## Files in scope

### New
- apps/web/src/navigation/transition-store.ts
- apps/web/src/instrumentation-client.ts
- apps/web/src/lib/site-navigation.ts
- apps/web/src/ui/brand/button.tsx
- apps/web/src/ui/brand/text-link.tsx
- apps/web/src/ui/brand/brand.tsx
- apps/web/src/ui/sections/SiteHeader.tsx
- apps/web/src/tests/transition-store.test.ts
- apps/web/src/tests/site-navigation.test.ts
- apps/web/src/test/brand.spec.tsx
- apps/web/src/test/site-header.spec.tsx
- packages/ui/src/icons/arrow-up-right.tsx
- packages/ui/src/icons/arrow-down.tsx
- packages/ui/src/test/icons.spec.tsx

### Modified
- apps/web/src/ui/layout/index.tsx
- apps/web/vitest.config.ts
- apps/web/src/app/global.css
- apps/web/src/app/layout.tsx
- apps/web/package.json
- pnpm-workspace.yaml
- packages/ui/src/icons/index.tsx
- packages/ui/src/index.ts

### Deleted
- apps/web/src/ui/sections/Nav.tsx
- apps/web/src/ui/sections/navbar.module.css
- apps/web/src/ui/buttons/NavButton.tsx

## Stat (tracked files, vs HEAD)
```
 apps/web/package.json                      |  25 +--
 apps/web/src/app/global.css                |  77 ++++++---
 apps/web/src/app/layout.tsx                |  30 ++--
 apps/web/src/ui/buttons/NavButton.tsx      |  63 --------
 apps/web/src/ui/layout/index.tsx           |  20 ++-
 apps/web/src/ui/sections/Nav.tsx           | 240 -----------------------------
 apps/web/src/ui/sections/navbar.module.css |  23 ---
 apps/web/vitest.config.ts                  |   6 +-
 packages/ui/src/icons/index.tsx            |   9 ++
 packages/ui/src/index.ts                   |   9 ++
 pnpm-workspace.yaml                        |  20 +--
 11 files changed, 122 insertions(+), 400 deletions(-)
```

## New files (full contents)

### apps/web/src/navigation/transition-store.ts
```tsx
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

### apps/web/src/instrumentation-client.ts
```tsx
import type { ClientInstrumentationHooks } from "next/dist/client/router-transition-types";
import { publishRouterTransitionStart } from "@/navigation/transition-store";

export const onRouterTransitionStart: NonNullable<
  ClientInstrumentationHooks["onRouterTransitionStart"]
> = (url, navigationType, event) => {
  publishRouterTransitionStart(url, navigationType, event);
};
```

### apps/web/src/lib/site-navigation.ts
```tsx
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
          {
            label: "Our mission",
            description: "Clear purpose. Real commitment.",
            href: "/about-us/our-mission"
          },
          {
            label: "Our organization",
            description: "Independent. Since 1995.",
            href: "/about-us/our-organization"
          },
          {
            label: "Our world",
            description: "Expertise wherever you work.",
            href: "/about-us/our-world"
          }
        ]
      },
      {
        title: "What we bring",
        links: [
          {
            label: "Our expertise",
            description: "Know-how that moves you forward.",
            href: "/about-us/our-expertise"
          },
          {
            label: "Our consultants",
            description: "Meet your next problem-solvers.",
            href: "/about-us/our-consultants"
          },
          {
            label: "Project delivery",
            description: "From day one to done.",
            href: "/about-us/our-project-delivery"
          }
        ]
      },
      {
        title: "Who we work with",
        links: [
          {
            label: "Our customers",
            description: "Built around your business.",
            href: "/about-us/our-customers"
          },
          {
            label: "Satisfied clients",
            description: "Relationships built on delivery.",
            href: "/about-us/our-satisfied-clients"
          },
          {
            label: "Careers at DCS",
            description: "Good work. Good people.",
            href: "/about-us/our-careers"
          }
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
          {
            label: "Consultant testimonials",
            description: "Hear from people who know us best.",
            href: "/consultants/consultant-testimonials"
          },
          {
            label: "Skills and positions",
            description: "Find where your experience belongs.",
            href: "/consultants/skills-and-positions"
          },
          {
            label: "Submit a résumé",
            description: "Start your next chapter with DCS.",
            href: "/consultants/submit-a-resume"
          },
          {
            label: "Why Drisdell?",
            description: "A different kind of consultancy.",
            href: "/consultants/why-drisdell-consulting-services"
          }
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

### apps/web/src/ui/brand/button.tsx
```tsx
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

export function BrandButtonLink({
  variant,
  className,
  ...props
}: BrandButtonLinkProps) {
  return (
    <Link
      className={cn(brandButtonVariants({ variant }), className)}
      {...props}
    />
  );
}
```

### apps/web/src/ui/brand/text-link.tsx
```tsx
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

### apps/web/src/ui/brand/brand.tsx
```tsx
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
        <span className="text-sm leading-[1.8] tracking-[0.015em]">
          Consulting Services
        </span>
      </span>
    </Link>
  );
}
```

### apps/web/src/ui/sections/SiteHeader.tsx
```tsx
"use client";

import type {
  ComponentProps,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  RefObject
} from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "@dcs/ui";
import { useEffect, useEffectEvent, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { MenuId, NavLink, NavMenu } from "@/lib/site-navigation";
import {
  activeParent,
  contactUrl,
  homeUrl,
  menuLinks,
  menus
} from "@/lib/site-navigation";
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

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: Event) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
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
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenMenu(undefined);
    }
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

          <nav
            aria-label="Main navigation"
            className="mr-5 ml-auto hidden items-center gap-7 lg:flex">
            <Link
              href={homeUrl}
              aria-current={current === "home" ? "page" : undefined}
              onClick={closeAll}
              className={cn(
                navLinkClass,
                current === "home" && navLinkActiveClass
              )}>
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
                  onClick={() =>
                    setOpenMenu(open =>
                      open === menu.id ? undefined : menu.id
                    )
                  }
                  className={cn(
                    navLinkClass,
                    (isOpen || isCurrent) && navLinkActiveClass
                  )}>
                  {menu.label}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-3.5 transition-transform duration-180",
                      isOpen && "rotate-180"
                    )}
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
          {activeMenu && (
            <MegaPanel id={panelId} menu={activeMenu} onNavigate={closeAll} />
          )}
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

function MegaPanel({
  id,
  menu,
  onNavigate
}: {
  id: string;
  menu: NavMenu;
  onNavigate: () => void;
}) {
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
        <div
          className={cn(
            "flex py-9",
            multiGroup ? "gap-7.5" : "gap-14 max-xl:gap-8"
          )}>
          <div
            className={cn(
              "border-border shrink-0 border-r pr-7",
              multiGroup ? "basis-1/4" : "basis-[29%] max-xl:basis-[26%]"
            )}>
            <span className="eyebrow">{menu.eyebrow}</span>
            <h2 className="mt-4 text-[27px] leading-[1.22] tracking-[-0.04em] whitespace-pre-line">
              {menu.headline}
            </h2>
            <p className="text-muted-foreground mt-4 mb-6 max-w-[29ch] text-sm">
              {menu.blurb}
            </p>
            <TextLink href={menu.cta.href} onClick={onNavigate}>
              {menu.cta.label}
              <ArrowRight aria-hidden className="size-4" />
            </TextLink>
          </div>
          {menu.groups.map(group => (
            <div key={group.title} className="min-w-0 flex-1">
              <h3 className="eyebrow mb-4">{group.title}</h3>
              <div
                className={cn(
                  multiGroup
                    ? "flex flex-col gap-0.5"
                    : "grid grid-cols-2 gap-x-8 gap-y-5"
                )}>
                {group.links.map(link => (
                  <MenuLink
                    key={link.href}
                    link={link}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-border text-muted-foreground flex items-center justify-between gap-5 border-t py-4 text-sm">
          <span>Solving business challenges since 1995.</span>
          <Link
            href={contactUrl}
            onClick={onNavigate}
            className="text-primary inline-flex items-center gap-2">
            Have a project in mind?
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MenuLink({
  link,
  onNavigate
}: {
  link: NavLink;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group/link hover:bg-muted focus-visible:bg-muted -mx-3 flex items-center justify-between gap-3 rounded px-3 py-2 transition-colors duration-150 outline-none">
      <span className="flex flex-col gap-0.5">
        <span className="text-primary text-[15px] font-medium">
          {link.label}
        </span>
        <span className="text-muted-foreground text-sm">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="text-primary size-4 shrink-0 opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
      />
    </Link>
  );
}

function DrawerLink({
  onNavigate,
  ...props
}: ComponentProps<typeof Link> & { onNavigate: () => void }) {
  return (
    <Link
      onClick={onNavigate}
      className="text-muted-foreground hover:text-primary flex items-center justify-between gap-3 py-2.5 text-[15px]"
      {...props}
    />
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
    const trigger = triggerRef.current;
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
      trigger?.focus();
    };
  }, [open, triggerRef]);

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
      className="bg-background text-foreground backdrop:bg-foreground/35 fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(440px,100%)] max-w-full translate-x-full overflow-y-auto border-0 p-0 opacity-0 transition-[transform,opacity,display,overlay] transition-discrete duration-240 ease-out backdrop:opacity-0 backdrop:transition-[opacity,display,overlay] backdrop:transition-discrete backdrop:duration-240 open:translate-x-0 open:opacity-100 open:backdrop:opacity-100 starting:open:translate-x-full starting:open:opacity-0 starting:open:backdrop:opacity-0">
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
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-5 transition-transform duration-180",
                      expanded && "rotate-180"
                    )}
                  />
                </button>
                <div
                  id={`${id}-${menu.id}`}
                  hidden={!expanded}
                  className="flex flex-col pb-4.5">
                  <DrawerLink href={menu.href} onNavigate={onNavigate}>
                    {menu.cta.label}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </DrawerLink>
                  {menuLinks(menu).map(link => (
                    <DrawerLink
                      key={link.href}
                      href={link.href}
                      onNavigate={onNavigate}>
                      {link.label}
                      <ArrowUpRight aria-hidden className="size-4" />
                    </DrawerLink>
                  ))}
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
          <BrandButtonLink
            href={contactUrl}
            onClick={onNavigate}
            className="w-full justify-between">
            Let&apos;s talk
            <ArrowUpRight aria-hidden className="size-4" />
          </BrandButtonLink>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            Independent expertise. Since 1995.
          </p>
        </div>
      </div>
    </dialog>
  );
}
```

### apps/web/src/tests/transition-store.test.ts
```tsx
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
    assert.equal(
      getLatestRouterTransition()?.url.origin,
      "https://www.drisdell.com"
    );
  });

  it("accepts the absolute href Next passes for traverse", () => {
    publishRouterTransitionStart(
      "https://www.drisdell.com/contact-us?x=1",
      "traverse",
      null
    );
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
    const unsubscribe = subscribeRouterTransitionStart(t =>
      seen.push(t.url.pathname)
    );
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

### apps/web/src/tests/site-navigation.test.ts
```tsx
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
    const hrefs = menus
      .flatMap(menuLinks)
      .map(link => link.href)
      .sort();
    assert.deepEqual(hrefs, [...wordpressChildren].sort());
  });

  it("gives every link a label and a description", () => {
    for (const link of menus.flatMap(menuLinks)) {
      assert.ok(link.label.trim().length > 0, link.href);
      assert.ok(link.description.trim().length > 0, link.href);
    }
  });

  it("orders the parents About Us then Consultants", () => {
    assert.deepEqual(
      menus.map(menu => menu.id),
      ["about", "consultants"]
    );
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

### apps/web/src/test/brand.spec.tsx
```tsx
import type { ReactNode } from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { Brand } from "@/ui/brand/brand";
import { BrandButtonLink } from "@/ui/brand/button";
import { TextLink } from "@/ui/brand/text-link";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

function render(node: ReactNode) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(node));
  return container;
}

describe("brand primitives", () => {
  it("renders the primary button as a link with brand colors", () => {
    const el = render(
      <BrandButtonLink href="/contact-us">Contact Us</BrandButtonLink>
    );
    const a = el.querySelector("a");
    expect(a?.getAttribute("href")).toBe("/contact-us");
    expect(a?.className).toContain("bg-primary");
    expect(a?.className).toContain("text-primary-foreground");
  });

  it("renders the light variant on a background surface", () => {
    const el = render(
      <BrandButtonLink href="/x" variant="light">
        Go
      </BrandButtonLink>
    );
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
    expect(a?.getAttribute("aria-label")).toBe(
      "Drisdell Consulting Services home"
    );
    expect(a?.textContent).toContain("Drisdell");
    expect(a?.textContent).toContain("Consulting Services");
    expect(a?.querySelector("svg")).not.toBeNull();
  });
});
```

### apps/web/src/test/site-header.spec.tsx
```tsx
import type { Root } from "react-dom/client";
import { act } from "react";
import { MotionGlobalConfig } from "motion/react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  publishRouterTransitionStart,
  resetRouterTransitions
} from "@/navigation/transition-store";
import { SiteHeader } from "@/ui/sections/SiteHeader";

MotionGlobalConfig.skipAnimations = true;
(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let pathname = "/";
vi.mock("next/navigation", () => ({ usePathname: () => pathname }));

// jsdom has no <dialog> methods; mirror the open attribute like a browser would.
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

type MediaListener = (e: { matches: boolean }) => void;
const mediaListeners = new Set<MediaListener>();
let desktop = true;
window.matchMedia = ((query: string) => ({
  media: query,
  get matches() {
    return desktop;
  },
  addEventListener: (_: "change", l: MediaListener) => mediaListeners.add(l),
  removeEventListener: (_: "change", l: MediaListener) =>
    mediaListeners.delete(l),
  onchange: null,
  addListener() {},
  removeListener() {},
  dispatchEvent: () => true
})) as unknown as typeof window.matchMedia;

let container: HTMLDivElement;
let root: Root;

function must<T>(value: T | null | undefined, what: string): T {
  if (value == null) throw new Error(`missing ${what}`);
  return value;
}

function mount(path = "/") {
  pathname = path;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() =>
    root.render(<SiteHeader actions={<span data-testid="actions" />} />)
  );
}

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  resetRouterTransitions();
  desktop = true;
  document.body.style.overflow = "";
});

const trigger = (id: string) =>
  must(
    container.querySelector<HTMLButtonElement>(`#nav-trigger-${id}`),
    `trigger ${id}`
  );
const panel = () => container.querySelector<HTMLElement>("[data-mega-panel]");
const drawer = () =>
  must(container.querySelector<HTMLDialogElement>("dialog"), "dialog");
const click = (el: Element) =>
  act(() => el.dispatchEvent(new MouseEvent("click", { bubbles: true })));
// AnimatePresence unmounts exited children on a later tick, even with animations skipped.
async function flush() {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
}

const key = (el: Element, k: string) =>
  act(() =>
    el.dispatchEvent(new KeyboardEvent("keydown", { key: k, bubbles: true }))
  );

describe("SiteHeader", () => {
  it("marks the active parent from the committed pathname", () => {
    mount("/about-us/our-mission");
    expect(trigger("about").dataset.current).toBe("true");
    expect(trigger("consultants").dataset.current).toBeUndefined();
    expect(
      container.querySelector('nav a[href="/"]')?.getAttribute("aria-current")
    ).toBeNull();
  });

  it("marks Home as the current page on the root path", () => {
    mount("/");
    expect(
      container.querySelector('nav a[href="/"]')?.getAttribute("aria-current")
    ).toBe("page");
  });

  it("opens and closes the About Us panel from its trigger", async () => {
    mount();
    expect(panel()).toBeNull();
    click(trigger("about"));
    expect(trigger("about").getAttribute("aria-expanded")).toBe("true");
    expect(panel()?.textContent).toContain("Our mission");
    click(trigger("about"));
    expect(trigger("about").getAttribute("aria-expanded")).toBe("false");
    await flush();
    expect(panel()).toBeNull();
  });

  it("switches panels when another trigger is clicked", () => {
    mount();
    click(trigger("about"));
    click(trigger("consultants"));
    expect(panel()?.textContent).toContain("Skills and positions");
    expect(panel()?.textContent).not.toContain("Our mission");
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    mount();
    click(trigger("about"));
    key(must(panel(), "panel"), "Escape");
    await flush();
    expect(panel()).toBeNull();
    expect(document.activeElement).toBe(trigger("about"));
  });

  it("closes on a pointerdown outside the header", async () => {
    mount();
    click(trigger("about"));
    act(() =>
      document.body.dispatchEvent(new Event("pointerdown", { bubbles: true }))
    );
    await flush();
    expect(panel()).toBeNull();
  });

  it("closes when focus leaves the header", async () => {
    mount();
    const outside = document.createElement("button");
    document.body.appendChild(outside);
    click(trigger("about"));
    act(() => {
      must(container.querySelector("header"), "header").dispatchEvent(
        new FocusEvent("focusout", { bubbles: true, relatedTarget: outside })
      );
    });
    await flush();
    expect(panel()).toBeNull();
    outside.remove();
  });

  it("closes when a panel link is clicked, even without navigation", async () => {
    mount();
    click(trigger("about"));
    click(
      must(
        must(panel(), "panel").querySelector('a[href="/about-us/our-mission"]'),
        "mission link"
      )
    );
    await flush();
    expect(panel()).toBeNull();
  });

  it("closes on a router transition such as back/forward", async () => {
    mount();
    click(trigger("about"));
    act(() =>
      publishRouterTransitionStart(
        "https://www.drisdell.com/consultants",
        "traverse",
        null
      )
    );
    await flush();
    expect(panel()).toBeNull();
  });

  it("opens the drawer from the menu trigger, locks scroll, and closes from its close button", () => {
    mount();
    const open = must(
      container.querySelector<HTMLButtonElement>(
        'button[aria-label="Open navigation"]'
      ),
      "open button"
    );
    click(open);
    expect(drawer().hasAttribute("open")).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    click(
      must(
        drawer().querySelector('button[aria-label="Close navigation"]'),
        "close button"
      )
    );
    expect(drawer().hasAttribute("open")).toBe(false);
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(open);
  });

  it("closes the drawer when the viewport reaches desktop", () => {
    mount();
    click(
      must(
        container.querySelector('button[aria-label="Open navigation"]'),
        "open button"
      )
    );
    desktop = true;
    act(() => {
      for (const l of mediaListeners) l({ matches: true });
    });
    expect(drawer().hasAttribute("open")).toBe(false);
  });

  it("renders the actions slot exactly once", () => {
    mount();
    expect(container.querySelectorAll('[data-testid="actions"]')).toHaveLength(
      1
    );
  });
});
```

### packages/ui/src/icons/arrow-up-right.tsx
```tsx
import type { BaseSVGProps } from "@/icons/index";

export function ArrowUpRight({
  role = "img",
  strokeWidth = "2",
  ...svg
}: BaseSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svg}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
```

### packages/ui/src/icons/arrow-down.tsx
```tsx
import type { BaseSVGProps } from "@/icons/index";

export function ArrowDown({
  role = "img",
  strokeWidth = "2",
  ...svg
}: BaseSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svg}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
```

### packages/ui/src/test/icons.spec.tsx
```tsx
import type { ReactNode } from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { ArrowDown, ArrowUpRight } from "@/icons/index";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

function render(node: ReactNode) {
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

## Modified files (diff vs HEAD)

### apps/web/src/ui/layout/index.tsx
```diff
diff --git a/apps/web/src/ui/layout/index.tsx b/apps/web/src/ui/layout/index.tsx
index 000d3e4..d6751bd 100644
--- a/apps/web/src/ui/layout/index.tsx
+++ b/apps/web/src/ui/layout/index.tsx
@@ -1,20 +1,30 @@
 "use client";
 
 import type { ReactNode } from "react";
+import { useResolvedTheme } from "@dcs/ui";
 import dynamic from "next/dynamic";
+import { useTheme } from "next-themes";
 import { Footer } from "@/ui/sections/Footer";
-import { Nav } from "@/ui/sections/Nav";
+import { SiteHeader } from "@/ui/sections/SiteHeader";
 
 const ThemeToggle = dynamic(
   () => import("@/ui/theme/index").then(d => d.ThemeToggle),
   { ssr: false }
 );
 
-export function Layout({ children }: { children: ReactNode }) {
+export function LayoutScaffold({ children }: { children: ReactNode }) {
+  const { resolvedTheme } = useTheme();
+
+  useResolvedTheme(resolvedTheme);
+
   return (
-    <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
-      <Nav />
-      <main className="">{children}</main>
+    <div className="bg-background m-0 flex min-h-full flex-col justify-between p-0">
+      <SiteHeader
+        actions={
+          <ThemeToggle className="text-muted-foreground hover:bg-muted hover:text-primary" />
+        }
+      />
+      <main id="main-content">{children}</main>
       <Footer />
     </div>
   );
```

### apps/web/vitest.config.ts
```diff
diff --git a/apps/web/vitest.config.ts b/apps/web/vitest.config.ts
index 8c829a8..475b34b 100644
--- a/apps/web/vitest.config.ts
+++ b/apps/web/vitest.config.ts
@@ -1,3 +1,7 @@
 import { sharedConfig } from "@dcs/vitest-config";
+import { mergeConfig } from "vitest/config";
 
-export default sharedConfig(process.cwd());
+// `*.spec.*` belongs to vitest; `src/tests/*.test.ts` are plain `node --test` files.
+export default mergeConfig(sharedConfig(process.cwd()), {
+  test: { include: ["src/**/*.spec.{ts,tsx}"] }
+});
```

### apps/web/src/app/layout.tsx
```diff
diff --git a/apps/web/src/app/layout.tsx b/apps/web/src/app/layout.tsx
index 2224cd1..a272a2a 100644
--- a/apps/web/src/app/layout.tsx
+++ b/apps/web/src/app/layout.tsx
@@ -5,20 +5,26 @@ import { GeistPixelSquare } from "geist/font/pixel";
 import { GeistSans } from "geist/font/sans";
 import { CookieProvider } from "@/context/cookie-context";
 import { getSiteUrl } from "@/lib/site-url";
+import "@dcs/ui/globals.css";
 import "./global.css";
-import { Inter } from "next/font/google";
+import { ToastProvider } from "@dcs/ui";
+import { DM_Sans, Inter } from "next/font/google";
 import Script from "next/script";
-import { Footer } from "@/ui/sections/Footer";
-import { Nav } from "@/ui/sections/Nav";
+import { ThemeProvider } from "next-themes";
+import { LayoutScaffold } from "@/ui/layout";
 import * as myGtag from "@/utils/analytics";
-import "@dcs/ui/globals.css";
-import { ToastProvider } from "@dcs/ui";
 
 const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin", "latin-ext"]
 });
 
+const dmSans = DM_Sans({
+  variable: "--font-dm-sans",
+  subsets: ["latin"],
+  display: "swap"
+});
+
 export const viewport = {
   colorScheme: "normal",
   userScalable: false,
@@ -118,7 +124,7 @@ export default function RootLayout({
       suppressHydrationWarning
       lang="en"
       data-scroll-behavior="smooth"
-      className={`h-full ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>
+      className={`h-full ${dmSans.variable} ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>
       <head>
         <Script
           async
@@ -140,13 +146,11 @@ export default function RootLayout({
       </head>
       <body className="antialiased">
         <CookieProvider>
-          <ToastProvider>
-            <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
-              <Nav />
-              <main className="">{children}</main>
-              <Footer />
-            </div>
-          </ToastProvider>
+          <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
+            <ToastProvider>
+              <LayoutScaffold>{children}</LayoutScaffold>
+            </ToastProvider>
+          </ThemeProvider>
         </CookieProvider>
       </body>
       <Script
```

### apps/web/package.json
```diff
diff --git a/apps/web/package.json b/apps/web/package.json
index 49b3275..8b66f19 100644
--- a/apps/web/package.json
+++ b/apps/web/package.json
@@ -4,14 +4,16 @@
   "private": true,
   "type": "module",
   "scripts": {
+    "predev": "rm -rf .next",
     "dev": "next dev -p 3001",
     "build": "next build",
     "format": "prettier --write \"**/*.{ts,tsx,cts,mts,js,jsx,mjs,cjs,json,yaml,yml,css,html,md,mdx,graphql,gql}\" --ignore-unknown --cache",
     "prebuild": "graphql-codegen --config codegen.ts",
-    "postbuild": "next-sitemap --config next-sitemap.mjs",
     "start": "next start",
     "lint": "eslint",
     "typecheck": "tsgo --noEmit",
+    "test:vitest": "vitest",
+    "test": "node --test --import tsx --test-reporter spec \"src/**/*.test.ts\"",
     "typegen": "next typegen"
   },
   "prettier": "@dcs/prettier-config",
@@ -20,48 +22,35 @@
     "@d0paminedriven/codemod": "catalog:dd",
     "@d0paminedriven/fs": "catalog:dd",
     "@dcs/ui": "workspace:*",
-    "@headlessui/react": "catalog:headlessui",
-    "@radix-ui/react-dialog": "catalog:radix",
-    "@radix-ui/react-dropdown-menu": "catalog:radix",
-    "@radix-ui/react-icons": "catalog:radix",
     "@radix-ui/react-label": "catalog:radix",
     "@radix-ui/react-slot": "catalog:radix",
-    "@react-spring/web": "catalog:react",
     "@tsparticles/engine": "catalog:tsparticles",
     "@tsparticles/react": "catalog:tsparticles",
     "@tsparticles/slim": "catalog:tsparticles",
     "@vercel/blob": "catalog:vercel",
     "class-variance-authority": "catalog:cva",
     "clsx": "catalog:clsx",
-    "embla-carousel": "catalog:embla",
-    "embla-carousel-class-names": "catalog:embla",
-    "embla-carousel-react": "catalog:embla",
-    "focus-trap-react": "catalog:react",
     "geist": "catalog:geist",
     "graphql": "catalog:gql",
     "graphql-tag": "catalog:gql",
     "html-react-parser": "catalog:parse",
     "js-cookie": "catalog:cookies",
-    "lucide-react": "catalog:lucide",
     "motion": "catalog:motion",
     "motion-plus": "npm:@motionplus/core@^3.0.0",
     "motion-plus-dom": "catalog:motion",
     "mkcert": "catalog:mkcert",
-    "nanoid": "catalog:nanoid",
     "next": "catalog:next",
     "next-seo": "catalog:next",
     "next-themes": "catalog:next",
     "next-view-transitions": "catalog:next",
     "react": "catalog:react",
     "react-dom": "catalog:react",
-    "react-hot-toast": "catalog:react",
+    "remark-gfm": "catalog:remark",
     "swr": "catalog:swr",
-    "tabbable": "catalog:tabbable",
     "tailwind-merge": "catalog:tw",
     "tailwindcss": "catalog:tw",
     "tailwindcss-motion": "catalog:tw",
-    "tw-animate-css": "catalog:tw",
-    "tinymce": "catalog:wysiwyg"
+    "tw-animate-css": "catalog:tw"
   },
   "devDependencies": {
     "@dcs/eslint-config": "workspace:*",
@@ -84,9 +73,6 @@
     "@types/gtag.js": "catalog:google",
     "@types/js-cookie": "catalog:cookies",
     "@types/jsdom": "catalog:jsdom",
-    "@types/lodash": "catalog:lodash",
-    "@types/lodash.throttle": "catalog:lodash",
-    "@types/ms": "catalog:ms",
     "@types/node": "catalog:node",
     "@types/react": "catalog:react",
     "@types/react-dom": "catalog:react",
@@ -110,7 +96,6 @@
     "postcss-load-config": "catalog:styles",
     "postcss-import": "catalog:styles",
     "prettier": "catalog:prettier",
-    "remark-gfm": "catalog:remark",
     "sharp": "catalog:sharp",
     "tslib": "catalog:tslib",
     "tsx": "catalog:tsx",
```

### pnpm-workspace.yaml
```diff
diff --git a/pnpm-workspace.yaml b/pnpm-workspace.yaml
index 241bce7..e599b0e 100644
--- a/pnpm-workspace.yaml
+++ b/pnpm-workspace.yaml
@@ -40,10 +40,6 @@ catalogs:
     dotenv: ^18.0.6
     dotenv-cli: ^11.0.0
     dotenv-expand: ^1000.0.0
-  embla:
-    embla-carousel: ^8.6.0
-    embla-carousel-class-names: ^8.6.0
-    embla-carousel-react: ^8.6.0
   eslint:
     "@eslint/compat": ^2.1.1
     "@eslint/config-helpers": ^0.7.0
@@ -64,9 +60,9 @@ catalogs:
   gql:
     graphql: ^17.0.2
     graphql-tag: ^2.12.7
-    "@graphql-codegen/cli": ^7.4.4
-    "@graphql-codegen/client-preset": ^6.2.1
-    "@graphql-codegen/schema-ast": ^6.1.0
+    "@graphql-codegen/cli": ^7.4.5
+    "@graphql-codegen/client-preset": ^6.2.2
+    "@graphql-codegen/schema-ast": ^6.1.1
     "@swc-contrib/plugin-graphql-codegen-client-preset": ^0.36.0
     "@graphql-tools/executor-http": ^3.4.1
     "@graphql-typed-document-node/core": ^3.2.0
@@ -80,9 +76,6 @@ catalogs:
     jsdom: ^30.1.2
   lightning:
     unplugin-lightningcss: ^0.5.0
-  lodash:
-    "@types/lodash": ^4.17.25
-    "@types/lodash.throttle": ^4.1.9
   lucide:
     lucide-react: ^1.52.0
   motion:
@@ -121,7 +114,6 @@ catalogs:
     "@radix-ui/react-checkbox": ^1.3.12
     "@radix-ui/react-dialog": ^1.2.0
     "@radix-ui/react-dropdown-menu": ^2.1.25
-    "@radix-ui/react-icons": ^1.3.2
     "@radix-ui/react-label": ^2.1.16
     "@radix-ui/react-menubar": ^1.1.25
     "@radix-ui/react-popover": ^1.2.0
@@ -135,7 +127,6 @@ catalogs:
     "@radix-ui/react-slot": ^1.4.0
     "@radix-ui/react-switch": ^1.3.8
     "@radix-ui/react-tabs": ^1.1.22
-    "@radix-ui/react-toast": ^1.2.24
     "@radix-ui/react-toggle": ^1.1.19
     "@radix-ui/react-toggle-group": ^1.1.20
     "@radix-ui/react-tooltip": ^1.3.0
@@ -147,7 +138,6 @@ catalogs:
     focus-trap-react: ^12.0.3
     react: ^19.3.0
     react-dom: ^19.3.0
-    react-hot-toast: ^2.6.1
     react-resizable-panels: ^4.14.2
     vaul: ^1.1.2
   remark:
@@ -170,7 +160,7 @@ catalogs:
   tabbable:
     tabbable: ^6.5.0
   test:
-    "@playwright/test": ^1.63.0
+    "@playwright/test": ^1.64.0
   ts:
     typescript: ^6.0.3
   tsdown:
@@ -215,5 +205,3 @@ catalogs:
     "@vitest/coverage-istanbul": ^5.0.3
     "@vitest/ui": ^5.0.3
     vitest: ^5.0.3
-  wysiwyg:
-    tinymce: ^8.9.3
```

### packages/ui/src/icons/index.tsx
```diff
diff --git a/packages/ui/src/icons/index.tsx b/packages/ui/src/icons/index.tsx
index f636340..e316e94 100644
--- a/packages/ui/src/icons/index.tsx
+++ b/packages/ui/src/icons/index.tsx
@@ -2,15 +2,18 @@ import type { ComponentPropsWithRef } from "react";
 import { AICoalesce } from "@/icons/aicoalesce";
 import { AnonymousIcon } from "@/icons/anonymous";
 import { AnthropicIcon } from "@/icons/anthropic";
+import { ArrowDown } from "@/icons/arrow-down";
 import { ArrowDownCircle } from "@/icons/arrow-down-circle";
 import { ArrowLeft } from "@/icons/arrow-left";
 import { ArrowRight } from "@/icons/arrow-right";
+import { ArrowUpRight } from "@/icons/arrow-up-right";
 import { AudioLines } from "@/icons/audio-lines";
 import { BookOpen } from "@/icons/book-open";
 import { Bot } from "@/icons/bot";
 import { Camera } from "@/icons/camera";
 import { Check } from "@/icons/check";
 import { ChevronDown } from "@/icons/chevron-down";
+import { ChevronLeft } from "@/icons/chevron-left";
 import { ChevronRight } from "@/icons/chevron-right";
 import { ChevronUp } from "@/icons/chevron-up";
 import { Circle } from "@/icons/circle";
@@ -117,15 +120,18 @@ const IconComponents = {
   AICoalesce,
   AnonymousIcon,
   AnthropicIcon,
+  ArrowDown,
   ArrowDownCircle,
   ArrowLeft,
   ArrowRight,
+  ArrowUpRight,
   AudioLines,
   BookOpen,
   Bot,
   Camera,
   Check,
   ChevronDown,
+  ChevronLeft,
   ChevronRight,
   ChevronUp,
   CircleAlert,
@@ -261,15 +267,18 @@ export {
   AICoalesce,
   AnonymousIcon,
   AnthropicIcon,
+  ArrowDown,
   ArrowDownCircle,
   ArrowLeft,
   ArrowRight,
+  ArrowUpRight,
   AudioLines,
   BookOpen,
   Bot,
   Camera,
   Check,
   ChevronDown,
+  ChevronLeft,
   ChevronRight,
   ChevronUp,
   CircleAlert,
```

### packages/ui/src/index.ts
```diff
diff --git a/packages/ui/src/index.ts b/packages/ui/src/index.ts
index 2b0b932..8753025 100644
--- a/packages/ui/src/index.ts
+++ b/packages/ui/src/index.ts
@@ -57,6 +57,7 @@ export {
   baseInputGroupButtonVariants
 } from "@/base/input-group";
 export { BaseKbd, BaseKbdGroup } from "@/base/kbd";
+export { BaseLabel } from "@/base/label";
 export {
   BasePopover,
   BasePopoverContent,
@@ -126,6 +127,11 @@ export type {
   WpFeaturedImage
 } from "@/carousel/offset-linked";
 export { CarouselImage, CarouselItemOffset } from "@/carousel/offset-linked";
+export type {
+  CoverflowCarouselProps,
+  CoverflowItemProps
+} from "@/carousel/coverflow";
+export { CoverflowCarousel, CoverflowItem } from "@/carousel/coverflow";
 
 export { useAspectCh } from "@/hooks/use-aspect-ch";
 export { useAutoDismiss } from "@/hooks/use-auto-dismiss";
@@ -152,15 +158,18 @@ export type { BaseSVGProps, IconName } from "@/icons/index";
 export { AICoalesce } from "@/icons/aicoalesce";
 export { AnonymousIcon } from "@/icons/anonymous";
 export { AnthropicIcon } from "@/icons/anthropic";
+export { ArrowDown } from "@/icons/arrow-down";
 export { ArrowDownCircle } from "@/icons/arrow-down-circle";
 export { ArrowLeft } from "@/icons/arrow-left";
 export { ArrowRight } from "@/icons/arrow-right";
+export { ArrowUpRight } from "@/icons/arrow-up-right";
 export { AudioLines } from "@/icons/audio-lines";
 export { BookOpen } from "@/icons/book-open";
 export { Bot } from "@/icons/bot";
 export { Camera } from "@/icons/camera";
 export { Check } from "@/icons/check";
 export { ChevronDown } from "@/icons/chevron-down";
+export { ChevronLeft } from "@/icons/chevron-left";
 export { ChevronRight } from "@/icons/chevron-right";
 export { ChevronUp } from "@/icons/chevron-up";
 export { CircleAlert } from "@/icons/circle-alert";
```

### apps/web/src/app/global.css (only the hunks touching this phase's lines)
```diff
5:@@ -99,4 +99,6 @@
8:+  --font-sans: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
9:+  --color-dcs-brand: #234670;
12:@@ -162,18 +164,18 @@
15:-  --color-primary: oklch(54.49% 0.2154 255);
16:-  --color-primary-foreground: oklch(98.48% 0 0);
17:-  --color-secondary: oklch(96.5% 0.008 255);
18:-  --color-secondary-foreground: oklch(20.44% 0.02 255);
19:-  --color-muted: oklch(96.5% 0.008 255);
20:-  --color-muted-foreground: oklch(55.55% 0.015 255);
21:-  --color-accent: oklch(94.5% 0.025 255);
22:-  --color-accent-foreground: oklch(20.44% 0.02 255);
23:+  --color-primary: var(--color-dcs-brand);
24:+  --color-primary-foreground: oklch(100% 0 0);
25:+  --color-secondary: var(--color-dcs-50);
26:+  --color-secondary-foreground: var(--color-dcs-brand);
27:+  --color-muted: var(--color-dcs-50);
28:+  --color-muted-foreground: var(--color-gray-500);
29:+  --color-accent: var(--color-dcs-50);
30:+  --color-accent-foreground: var(--color-dcs-brand);
34:-  --color-border: oklch(92.19% 0.005 255);
35:-  --color-input: oklch(92.19% 0.005 255);
36:-  --color-ring: oklch(54.49% 0.2154 255);
37:+  --color-border: color-mix(in oklch, var(--color-dcs-brand) 14%, transparent);
38:+  --color-input: color-mix(in oklch, var(--color-dcs-brand) 14%, transparent);
39:+  --color-ring: var(--color-dcs-brand);
42:@@ -211,7 +213,18 @@
64:@@ -292,6 +305,6 @@
67:-    --color-primary: oklch(60.13% 0.1982 255);
68:-    --color-primary-foreground: oklch(97.06% 0.01 255);
69:+    --color-primary: var(--color-dcs-400);
70:+    --color-primary-foreground: var(--color-dcs-950);
73:@@ -303,7 +316,7 @@
76:-    --color-border: oklch(26.86% 0.015 255);
77:-    --color-input: oklch(26.86% 0.015 255);
78:-    --color-ring: oklch(60.13% 0.1982 255);
79:+    --color-border: color-mix(in oklch, var(--color-dcs-400) 18%, transparent);
80:+    --color-input: color-mix(in oklch, var(--color-dcs-400) 18%, transparent);
81:+    --color-ring: var(--color-dcs-400);
84:@@ -407,4 +420,27 @@
87:+@utility page-container {
88:+  width: min(100% - 112px, 1280px);
89:+  margin-inline: auto;
90:+  @media (width < 1200px) {
91:+    width: calc(100% - 72px);
93:+  @media (width < 1024px) {
94:+    width: calc(100% - 56px);
96:+  @media (width < 600px) {
97:+    width: calc(100% - 40px);
101:+@utility eyebrow {
102:+  font-size: 0.875rem;
103:+  font-weight: 600;
104:+  line-height: 1.5;
105:+  letter-spacing: 0.115em;
106:+  text-transform: uppercase;
112:@@ -544,4 +580,7 @@ body::-webkit-scrollbar-thumb {
```

## Deleted files (for context, first 40 lines of each at HEAD)

### apps/web/src/ui/sections/Nav.tsx
```tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import throttle from "lodash.throttle";
import {BaseButton,
  DropdownMenu,ChevronDown, ChevronUp, Menu, X,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@dcs/ui";
import { cn } from "@/lib/utils";
import { DrisdellIcon } from "@/ui/icons/DrisdellIcon";
import css from "./navbar.module.css";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    children: [
      { name: "Our Careers", href: "/about-us/our-careers" },
      { name: "Our Consultants", href: "/about-us/our-consultants" },
      { name: "Our Customers", href: "/about-us/our-customers" },
      { name: "Our Expertise", href: "/about-us/our-expertise" },
      { name: "Our Mission", href: "/about-us/our-mission" },
      { name: "Our Organization", href: "/about-us/our-organization" },
      { name: "Our Project Delivery", href: "/about-us/our-project-delivery" },
      {
        name: "Our Satisfied Clients",
        href: "/about-us/our-satisfied-clients"
      },
      { name: "Our World", href: "/about-us/our-world" }
    ]
  },
  {
    name: "Consultants",
    href: "/consultants",
    children: [
```

### apps/web/src/ui/buttons/NavButton.tsx
```tsx
import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { TsxTargeted } from "@/types/helpers";
import { cn } from "@/lib/utils";

const rootClassName = {
  root: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300"
};

const variants = {
  variant: {
    default:
      "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
    destructive:
      "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
    outline:
      "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
    secondary:
      "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
    ghost:
      "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
    link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9"
  }
};

const buttonVariants = cva(rootClassName.root, {
  variants,
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
```

## Verification evidence (this session)
- apps/web node tests: 17/17 (submission-result, transition store, menus, activeParent)
- apps/web vitest: 16/16 (brand 4, site-header 12); packages/ui vitest: icons 2/2 plus existing 11
- eslint clean on every new/modified source and test file; web typecheck 4 errors, all in untouched pre-existing files (types/fs.ts, utils/fs.ts, utils/blobby.ts), down from 10
- Tailwind compile checks: tokens/utilities 8/8; drawer backdrop + starting-style utilities 5/5 against the real theme
- Not yet done: visual check in the dev server (user-run, pnpm run:web from root after pnpm install)
