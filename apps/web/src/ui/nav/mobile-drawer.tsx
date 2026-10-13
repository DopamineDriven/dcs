"use client";

import type { RefObject } from "react";
import { ArrowUpRight, BaseButton, ChevronDown, X } from "@dcs/ui";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import Link from "next/link";
import type { MenuId } from "@/lib/site-navigation";
import {
  activeParent,
  contactUrl,
  homeUrl,
  menuLinks,
  menus
} from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { Brand } from "@/ui/nav/brand";
import { DrawerLink } from "@/ui/nav/drawer-link";

const DESKTOP_QUERY = "(min-width: 64rem)";

export function MobileDrawer({
  id,
  open,
  current,
  triggerRef,
  onCloseAction,
  onNavigateAction
}: {
  id: string;
  open: boolean;
  current: ReturnType<typeof activeParent>;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onCloseAction: () => void;
  onNavigateAction: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [section, setSection] = useState<MenuId>();
  const close = useEffectEvent(onCloseAction);

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
        onCloseAction();
      }}
      onClick={event => {
        if (event.target === event.currentTarget) onCloseAction();
      }}
      className="text-dcs-950 backdrop:bg-dcs-950/35 fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(440px,100%)] max-w-full translate-x-full overflow-y-auto border-0 bg-white p-0 opacity-0 transition-[translate,opacity,display,overlay] transition-discrete duration-240 ease-out backdrop:opacity-0 backdrop:transition-[opacity,display,overlay] backdrop:transition-discrete backdrop:duration-240 open:translate-x-0 open:opacity-100 open:backdrop:opacity-100 starting:open:translate-x-full starting:open:opacity-0 starting:open:backdrop:opacity-0">
      <div className="flex min-h-full flex-col px-7 pt-5.5 pb-7">
        <div className="flex items-center justify-between gap-4 pb-6">
          <Brand compact onNavigateAction={onNavigateAction} />
          <button
            type="button"
            autoFocus
            aria-label="Close navigation"
            onClick={onCloseAction}
            className="border-dcs-800/15 text-dcs-800 inline-flex size-11 items-center justify-center rounded-full border">
            <X aria-hidden className="size-6" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col">
          <Link
            href={homeUrl}
            onClick={onNavigateAction}
            aria-current={current === "home" ? "page" : undefined}
            className="text-dcs-800 flex w-full items-center justify-between gap-4 py-4 text-[1.4375rem] font-[450]">
            Home
            <ArrowUpRight aria-hidden className="size-5" />
          </Link>
          {menus.map(menu => {
            const expanded = section === menu.id;
            return (
              <div key={menu.id} className="border-dcs-800/15 border-t">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${id}-${menu.id}`}
                  onClick={() => setSection(expanded ? undefined : menu.id)}
                  className="text-dcs-800 flex w-full items-center justify-between gap-4 py-4 text-[1.4375rem] font-[450]">
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
                  <DrawerLink
                    href={menu.href}
                    onNavigateAction={onNavigateAction}>
                    {menu.cta.label}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </DrawerLink>
                  {menuLinks(menu).map(link => (
                    <DrawerLink
                      key={link.href}
                      href={link.href}
                      onNavigateAction={onNavigateAction}>
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
            onClick={onNavigateAction}
            aria-current={current === "contact" ? "page" : undefined}
            className="border-dcs-800/15 text-dcs-800 flex w-full items-center justify-between gap-4 border-t py-4 text-[1.4375rem] font-[450]">
            Contact Us
            <ArrowUpRight aria-hidden className="size-5" />
          </Link>
        </nav>
        <div className="mt-auto pt-9 justify-center">
          <Link href={contactUrl} onClick={onNavigateAction} className="apperance-none">
            <BaseButton variant="link" className="w-full justify-center">
              Let&apos;s talk
              <ArrowUpRight aria-hidden className="size-4" />
            </BaseButton>
          </Link>
          <p className="mt-4 text-center text-sm text-gray-500">
            Independent expertise. Since 1995.
          </p>
        </div>
      </div>
    </dialog>
  );
}
