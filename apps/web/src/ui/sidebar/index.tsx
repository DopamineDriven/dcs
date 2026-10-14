"use client";

import { ChevronDown, PanelLeftClose, PanelLeftOpen } from "@d0paminedriven/icons";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { useSectionSidebar } from "@/context/sidebar-provider";
import { cn } from "@/lib/utils";
import { SidebarCursor } from "@/ui/sidebar/cursor";
import { SectionLinks } from "@/ui/sidebar/section-links";
import { sidebarCursorZone } from "@/ui/sidebar/utils";

export function SectionSidebar({
  section,
  links
}: {
  section: "about-us" | "consultants";
  links: { label: string; href: string }[];
}) {
  const { collapsed, setCollapsed, mobileOpen, setMobileOpen } =
    useSectionSidebar();
  const navigationId = useId();
  const path = usePathname();
  const isConsultantPage = section === "consultants";
  const title = isConsultantPage ? "Consultants" : "About us";
  const toggleLabel = collapsed ? "Expand sidebar" : "Collapse sidebar";
  const ToggleIcon = collapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <aside
      aria-label={`${title} section navigation`}
      data-collapsed={collapsed}
      className={cn(
        "bg-background text-foreground font-basis border-b transition-[width] duration-200 ease-out md:shrink-0 md:border-r md:border-b-0",
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
                className="size-5"
                strokeWidth={1.75}
                aria-hidden="true"
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
        open={mobileOpen}
        onToggle={event => setMobileOpen(event.currentTarget.open)}>
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
  );
}
