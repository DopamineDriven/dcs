"use client";

import { ArrowRight, ArrowUpRight } from "@dcs/ui";
import Link from "next/link";
import { motion } from "motion/react";
import type { NavMenu } from "@/lib/site-navigation";
import { contactUrl } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { MenuLink } from "@/ui/nav/menu-link";
import { TextLink } from "@/ui/nav/text-link";

export function MegaPanel({
  id,
  menu,
  onNavigateAction
}: {
  id: string;
  menu: NavMenu;
  onNavigateAction: () => void;
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
      className="border-dcs-800/15 absolute inset-x-0 top-full border-b bg-white shadow-[0_18px_32px_color-mix(in_oklch,var(--color-dcs-950)_8%,transparent)]">
      <div className="page-container">
        <div
          className={cn(
            "flex py-9",
            multiGroup ? "gap-7.5" : "gap-14 max-xl:gap-8"
          )}>
          <div
            className={cn(
              "border-dcs-800/15 shrink-0 border-r pr-7",
              multiGroup ? "basis-1/4" : "basis-[29%] max-xl:basis-[26%]"
            )}>
            <span className="eyebrow">{menu.eyebrow}</span>
            <h2 className="mt-4 text-[1.6875rem] leading-[1.22] tracking-[-0.04em] whitespace-pre-line">
              {menu.headline}
            </h2>
            <p className="mt-4 mb-6 max-w-[29ch] text-sm text-gray-500">
              {menu.blurb}
            </p>
            <TextLink href={menu.cta.href} onClick={onNavigateAction}>
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
                    onNavigateAction={onNavigateAction}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-dcs-800/15 flex items-center justify-between gap-5 border-t py-4 text-sm text-gray-500">
          <span>Solving business challenges since 1995.</span>
          <Link
            href={contactUrl}
            onClick={onNavigateAction}
            className="text-dcs-800 inline-flex items-center gap-2">
            Have a project in mind?
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
