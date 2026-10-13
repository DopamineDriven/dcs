"use client";

import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "@dcs/ui";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, domAnimation, LazyMotion, m } from "motion/react";
import type { MenuName } from "@/ui/site-header/utils";
import {
  companyGroups,
  consultantLinks,
  contactUrl,
  expertiseLinks
} from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { Brand } from "@/ui/site-header/brand";
import { MenuLink } from "@/ui/site-header/menu-link";
import { isMenuCurrent, menuItems } from "@/ui/site-header/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuName>();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuName>();
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDialogElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  const closeMenus = () => {
    setOpenMenu(undefined);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!openMenu) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpenMenu(undefined);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [openMenu]);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    if (mobileOpen) {
      drawer.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const media = window.matchMedia("(min-width: 1000px)");
      const closeDesktop = () => {
        if (media.matches) setMobileOpen(false);
      };
      media.addEventListener("change", closeDesktop);
      const mobileTriggerRefInner = mobileTriggerRef.current;
      return () => {
        document.body.style.overflow = previousOverflow;
        media.removeEventListener("change", closeDesktop);
        drawer.close();
        mobileTriggerRefInner?.focus();
      };
    }
    drawer.close();
  }, [mobileOpen]);

  return (
    <>
      <a
        className="bg-primary text-primary-foreground fixed top-3 left-4 z-100 translate-y-[-150%] px-5 py-3 focus:translate-y-0"
        href="#main-content">
        Skip to content
      </a>
      <header
        className="bg-background text-foreground sticky top-0 z-40 border-b"
        ref={headerRef}
        onKeyDown={event => {
          if (event.key === "Escape" && openMenu) {
            document.getElementById(`nav-trigger-${openMenu}`)?.focus();
            setOpenMenu(undefined);
          }
        }}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setOpenMenu(undefined);
        }}>
        <div className="smaller:min-h-20.25 smaller:w-[calc(100%-3.5rem)] smaller:gap-7 almost-lg:min-h-24 almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto flex min-h-19 w-[calc(100%-2.5rem)] max-w-7xl items-center justify-between gap-3">
          <Brand onNavigateAction={closeMenus} />
          <nav
            className="almost-lg:flex lgxl:mr-5.5 lgxl:gap-7.5 mr-2 ml-auto hidden items-center gap-5.5"
            aria-label="Main navigation">
            <Link
              href="/"
              className="text-muted-foreground after:bg-primary hover:text-primary aria-[current=page]:text-primary relative inline-flex min-h-24 items-center justify-center gap-1.75 text-sm/[1.55] font-medium transition-colors duration-180 ease-[ease] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:opacity-0 aria-[current=page]:after:opacity-100"
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={closeMenus}>
              Home
            </Link>
            {menuItems.map(item => (
              <button
                key={item.id}
                id={`nav-trigger-${item.id}`}
                className="group text-muted-foreground after:bg-primary hover:text-primary aria-expanded:text-primary data-[current=true]:text-primary relative inline-flex min-h-24 items-center justify-center gap-1.75 text-sm/[1.55] font-medium transition-colors duration-180 ease-[ease] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:opacity-0 aria-expanded:after:opacity-100 data-[current=true]:after:opacity-100"
                data-current={isMenuCurrent(item.id, pathname)}
                aria-expanded={openMenu === item.id}
                aria-controls="desktop-navigation-panel"
                onClick={() =>
                  setOpenMenu(openMenu === item.id ? undefined : item.id)
                }>
                {item.label}
                <ChevronDown
                  className="size-3.5 transition-transform duration-180 ease-[ease] group-aria-expanded:rotate-180"
                  aria-hidden="true"
                />
              </button>
            ))}
          </nav>
          <Link
            href={contactUrl}
            onClick={closeMenus}
            className="group bg-primary text-primary-foreground hover:bg-foreground hover:shadow-primary/12 almost-lg:inline-flex hidden min-h-10.75 items-center justify-center gap-5 rounded-sm border border-transparent px-4.25 py-2.25 text-sm/[1.55] font-medium transition-[background,box-shadow] duration-180 ease-[ease] hover:shadow-[0_4px_12px]">
            Let&apos;s talk{" "}
            <ArrowUpRight
              className="size-4.25 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <button
            className="text-primary almost-lg:hidden inline-flex size-11 items-center justify-center rounded-sm border"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            ref={mobileTriggerRef}
            onClick={() => setMobileOpen(true)}>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <LazyMotion features={domAnimation} strict>
          <AnimatePresence>
            {openMenu && (
              <m.div
                id="desktop-navigation-panel"
                className="bg-background text-foreground font-basis shadow-foreground/8 almost-lg:block absolute top-full left-0 hidden w-full border-b shadow-[0_18px_32px]"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.18 }}>
                <div className="smaller:w-[calc(100%-3.5rem)] almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto w-[calc(100%-2.5rem)] max-w-7xl">
                  <div
                    className={cn(
                      "flex gap-8.5 py-9",
                      openMenu === "company" ? "lgxl:gap-7.5" : "lgxl:gap-14"
                    )}>
                    <div
                      className={cn(
                        "shrink-0 grow-0 border-r pr-7",
                        openMenu === "company"
                          ? "basis-1/4"
                          : "lgxl:basis-[29%] basis-[26%]"
                      )}>
                      <span className="text-primary text-sm/normal font-semibold tracking-[0.115em] uppercase">
                        In the company of experts
                      </span>
                      <h2 className="mt-4.25 text-[1.6875rem] leading-[1.22] tracking-[-0.04em] whitespace-pre-line">
                        {openMenu === "company"
                          ? "Good people.\nLasting partnerships."
                          : openMenu === "expertise"
                            ? "Big challenges.\nThe right expertise."
                            : "Experience is\nour difference."}
                      </h2>
                      <p className="text-muted-foreground mt-4.25 mb-5.75 max-w-[29ch] text-sm/[1.55]">
                        Independent thinking. Personal attention. A commitment
                        that lasts beyond go-live.
                      </p>
                      <Link
                        href={
                          openMenu === "consultants"
                            ? "/consultants"
                            : "/about-us"
                        }
                        className="group text-primary inline-flex items-center gap-3 text-sm/[1.55] font-medium"
                        onClick={closeMenus}>
                        {openMenu === "consultants"
                          ? "Consulting with DCS"
                          : "Get to know DCS"}{" "}
                        <ArrowRight
                          className="size-4 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    {openMenu === "company" ? (
                      companyGroups.map(group => (
                        <div className="min-w-0 flex-1" key={group.title}>
                          <h3 className="text-primary mb-3.75 text-sm/normal font-semibold tracking-[0.115em] uppercase">
                            {group.title}
                          </h3>
                          <div className="flex flex-col gap-0.75">
                            {group.links.map(link => (
                              <MenuLink
                                description={link.description}
                                href={link.href}
                                label={link.label}
                                key={link.href}
                                onNavigateAction={closeMenus}
                              />
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="min-w-0 flex-1">
                        <h3 className="text-primary mb-3.75 text-sm/normal font-semibold tracking-[0.115em] uppercase">
                          {openMenu === "expertise"
                            ? "How we can help"
                            : "The people behind the work"}
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                          {(openMenu === "expertise"
                            ? expertiseLinks
                            : consultantLinks
                          ).map(link => (
                            <MenuLink
                              description={link.description}
                              href={link.href}
                              label={link.label}
                              key={link.href}
                              onNavigateAction={closeMenus}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-muted-foreground flex items-center justify-between gap-5 border-t py-4.25 text-sm/[1.55]">
                    <span>Solving business challenges since 1995.</span>
                    <Link
                      href={contactUrl}
                      className="text-primary inline-flex items-center gap-2"
                      onClick={closeMenus}>
                      Have a project in mind?{" "}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </header>
      <dialog
        id="mobile-navigation"
        className="bg-background text-foreground backdrop:bg-foreground/35 fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-110 max-w-full translate-x-full overflow-y-auto border-0 p-0 opacity-0 [transition:translate_240ms_ease-out,opacity_240ms,display_240ms_allow-discrete,overlay_240ms_allow-discrete] backdrop:opacity-0 backdrop:[transition:opacity_240ms,display_240ms_allow-discrete,overlay_240ms_allow-discrete] open:translate-x-0 open:opacity-100 open:backdrop:opacity-100 starting:open:translate-x-full starting:open:opacity-0 starting:open:backdrop:opacity-0"
        ref={drawerRef}
        aria-label="Site navigation"
        onCancel={event => {
          event.preventDefault();
          setMobileOpen(false);
        }}
        onClick={event => {
          if (event.target === event.currentTarget) setMobileOpen(false);
        }}>
        <div className="flex min-h-full flex-col px-6.75 pt-5.5 pb-7">
          <div className="flex items-center justify-between gap-4 pb-6">
            <Brand compact onNavigateAction={closeMenus} />
            <button
              aria-label="Close navigation"
              className="text-primary inline-flex size-11 items-center justify-center rounded-full border"
              autoFocus
              onClick={() => setMobileOpen(false)}>
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <Link
              className="text-primary flex w-full items-center justify-between gap-4 py-4.25 text-[1.4375rem] font-[450]"
              href="/"
              onClick={closeMenus}>
              Home <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
            {menuItems.map(item => (
              <div className="border-t" key={item.id}>
                <button
                  className="group text-primary flex w-full items-center justify-between gap-4 py-4.25 text-[1.4375rem] font-[450]"
                  aria-expanded={mobileSection === item.id}
                  aria-controls={`mobile-${item.id}`}
                  onClick={() =>
                    setMobileSection(
                      mobileSection === item.id ? undefined : item.id
                    )
                  }>
                  {item.label}
                  <ChevronDown
                    className="size-5 transition-transform duration-180 ease-[ease] group-aria-expanded:rotate-180"
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`mobile-${item.id}`}
                  hidden={mobileSection !== item.id}
                  className="flex flex-col pb-4.5 [[hidden]]:hidden">
                  {item.id === "company" && (
                    <Link
                      className="text-muted-foreground hover:text-primary flex items-center justify-between gap-3 py-2.25 text-[0.9375rem]"
                      href="/about-us"
                      onClick={closeMenus}>
                      About DCS
                      <ArrowUpRight className="size-3.75" aria-hidden="true" />
                    </Link>
                  )}
                  {item.id === "consultants" && (
                    <Link
                      className="text-muted-foreground hover:text-primary flex items-center justify-between gap-3 py-2.25 text-[0.9375rem]"
                      href="/consultants"
                      onClick={closeMenus}>
                      Consulting with DCS
                      <ArrowUpRight className="size-3.75" aria-hidden="true" />
                    </Link>
                  )}
                  {(item.id === "company"
                    ? companyGroups.flatMap(group => group.links)
                    : item.id === "expertise"
                      ? expertiseLinks
                      : consultantLinks
                  ).map(link => (
                    <Link
                      className="text-muted-foreground hover:text-primary flex items-center justify-between gap-3 py-2.25 text-[0.9375rem]"
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}>
                      {link.label}
                      <ArrowUpRight className="size-3.75" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div className="mt-auto pt-8.75">
            <Link
              href={contactUrl}
              className="group bg-primary text-primary-foreground hover:bg-foreground hover:shadow-primary/12 inline-flex min-h-12.25 w-full items-center justify-between gap-5 rounded-sm border border-transparent px-5.25 py-3 text-sm/[1.55] font-medium transition-[background,box-shadow] duration-180 ease-[ease] hover:shadow-[0_4px_12px]"
              onClick={closeMenus}>
              Let&apos;s talk{" "}
              <ArrowUpRight
                className="size-4.25 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <p className="text-muted-foreground mt-4.25 text-center text-sm/[1.55]">
              Independent expertise. Since 1995.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
