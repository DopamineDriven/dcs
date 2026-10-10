"use client";

import type { FocusEvent, KeyboardEvent } from "react";
import { ArrowUpRight, BaseButton, ChevronDown, Menu } from "@dcs/ui";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import type { MenuId } from "@/lib/site-navigation";
import {
  activeParent,
  contactUrl,
  homeUrl,
  menus
} from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { subscribeRouterTransitionStart } from "@/navigation/transition-store";
import { Brand } from "@/ui/nav/brand";
import { MegaPanel } from "@/ui/nav/mega-panel";
import { MobileDrawer } from "@/ui/nav/mobile-drawer";

const navLinkClass =
  "text-gray-500 relative inline-flex min-h-24 items-center justify-center gap-1.5 text-sm font-medium transition-colors duration-180 hover:text-dcs-800";
const navLinkActiveClass =
  "text-dcs-800 after:bg-dcs-800 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:content-['']";

export function SiteHeader() {
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
        className="bg-dcs-800 fixed top-3 left-4 z-100 translate-y-[-150%] px-5 py-3 text-white transition-transform focus:translate-y-0">
        Skip to content
      </a>
      <header
        ref={headerRef}
        onKeyDown={onHeaderKeyDown}
        onBlur={onHeaderBlur}
        className="border-dcs-800 sticky top-0 z-40 border-b bg-white">
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
            <AnimatePresence>
              {activeMenu && (
                <MegaPanel
                  id={panelId}
                  menu={activeMenu}
                  onNavigateAction={closeAll}
                />
              )}
            </AnimatePresence>
          </nav>

          <div className="flex items-center gap-2">
            <Link href={contactUrl}>
              <BaseButton
                onClick={closeAll}
                aria-current={current === "contact" ? "page" : undefined}
                variant="ghost"
                className="hidden min-h-11 px-4 py-2 lg:inline-flex lg:cursor-pointer">
                Contact Us
                <ArrowUpRight aria-hidden className="size-4" />
              </BaseButton>
            </Link>
            <button
              ref={drawerTriggerRef}
              type="button"
              aria-label="Open navigation"
              aria-expanded={drawerOpen}
              aria-controls={drawerId}
              onClick={() => setDrawerOpen(true)}
              className="border-dcs-800/15 text-dcs-800 inline-flex size-11 items-center justify-center rounded border lg:hidden">
              <Menu aria-hidden className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        id={drawerId}
        open={drawerOpen}
        current={current}
        triggerRef={drawerTriggerRef}
        onCloseAction={() => setDrawerOpen(false)}
        onNavigateAction={closeAll}
      />
    </>
  );
}
