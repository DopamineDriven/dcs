"use client";

import { ChevronDown, PanelLeftClose, PanelLeftOpen } from "@dcs/ui";
import { useId, useState } from "react";
import { companyGroups, consultantLinks } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { SidebarCursor } from "@/ui/sidebar/cursor";
import { SectionLinks } from "@/ui/sidebar/section-links";
import { sidebarCursorZone } from "@/ui/sidebar/utils";

export function SectionSidebar({ path }: { path: string }) {
  const [collapsed, setCollapsed] = useState(true);
  const navigationId = useId();
  const isConsultantPage = path.startsWith("/consultants");
  const title = isConsultantPage ? "Consultants" : "About us";
  const links = isConsultantPage
    ? [
        { label: "Consulting with DCS", href: "/consultants" },
        ...consultantLinks
      ]
    : [
        { label: "About DCS", href: "/about-us" },
        ...companyGroups.flatMap(group => group.links)
      ];
  const toggleLabel = collapsed ? "Expand sidebar" : "Collapse sidebar";
  const ToggleIcon = collapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <>
      <aside
        aria-label={`${title} section navigation`}
        data-collapsed={collapsed}
        className={cn(
          "bg-background text-foreground border-b transition-[width] duration-200 ease-out md:shrink-0 md:border-r md:border-b-0",
          collapsed ? "md:w-18" : "md:w-60"
        )}>
        <SidebarCursor className="almost-lg:top-24.25 almost-lg:max-h-[calc(100dvh-6.0625rem)] hidden md:sticky md:top-20.5 md:block md:max-h-[calc(100dvh-5.125rem)] md:overflow-y-auto">
          <div className="px-3 py-5">
            <div
              className={cn(
                "mb-4 flex items-center",
                collapsed ? "justify-center" : "justify-between"
              )}>
              <h2
                className={cn(
                  collapsed
                    ? "sr-only"
                    : "text-primary pl-3 text-sm font-semibold tracking-[0.115em] uppercase"
                )}>
                {title}
              </h2>
              <button
                type="button"
                aria-expanded={!collapsed}
                aria-controls={navigationId}
                data-cursor-zone={`${sidebarCursorZone}${toggleLabel}`}
                onClick={() => setCollapsed(value => !value)}
                className="text-muted-foreground hover:bg-muted hover:text-primary flex size-11 shrink-0 items-center justify-center rounded-md transition-colors">
                <ToggleIcon
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="sr-only">{toggleLabel}</span>
              </button>
            </div>
            <nav id={navigationId} aria-label={`${title} pages`}>
              <SectionLinks links={links} path={path} collapsed={collapsed} />
            </nav>
          </div>
        </SidebarCursor>
        <details
          className="group/section smaller:mx-7 mx-5 md:hidden"
          key={path}>
          <summary className="text-primary flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
            <span>
              {title}
              <span className="text-muted-foreground ml-3 font-normal">
                In this section
              </span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className="size-4.5 shrink-0 transition-transform group-open/section:rotate-180"
            />
          </summary>
          <nav className="pb-4" aria-label={`${title} pages`}>
            <SectionLinks links={links} path={path} collapsed={false} />
          </nav>
        </details>
      </aside>
    </>
  );
}
