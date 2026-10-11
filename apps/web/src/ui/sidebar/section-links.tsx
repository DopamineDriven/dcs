"use client";

import type { JSX } from "react";
import type { BaseSVGProps } from "@dcs/ui";
import {
  BadgeCheck,
  Briefcase,
  BuildingComplex,
  ChevronRight,
  FileUp,
  Globe,
  Handshake,
  HeartHandshake,
  Layers,
  ListChecks,
  MessageSquareQuote,
  Network,
  RouteIcon,
  Target,
  UsersRound
} from "@dcs/ui";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarCursorZone } from "@/ui/sidebar/utils";

type IconValueProps = ({
  role,
  strokeWidth,
  ...svg
}: BaseSVGProps) => JSX.Element;

const sectionIcons = new Map<string, IconValueProps>([
  ["/about-us", BuildingComplex],
  ["/about-us/our-mission", Target],
  ["/about-us/our-organization", Network],
  ["/about-us/our-world", Globe],
  ["/about-us/our-expertise", Layers],
  ["/about-us/our-consultants", UsersRound],
  ["/about-us/our-project-delivery", RouteIcon],
  ["/about-us/our-customers", Handshake],
  ["/about-us/our-satisfied-clients", BadgeCheck],
  ["/about-us/our-careers", Briefcase],
  ["/consultants", UsersRound],
  ["/consultants/consultant-testimonials", MessageSquareQuote],
  ["/consultants/skills-and-positions", ListChecks],
  ["/consultants/submit-a-resume", FileUp],
  ["/consultants/why-drisdell-consulting-services", HeartHandshake]
]);
export function SectionLinks({
  links,
  path,
  collapsed
}: {
  links: { label: string; href: string }[];
  path: string;
  collapsed: boolean;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {links.map(link => {
        let Icon: IconValueProps;
        const tryGet = sectionIcons.get(link.href);
        if (tryGet) {
          Icon = tryGet;
        } else {
          Icon = BuildingComplex;
        }
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={link.href === path ? "page" : undefined}
              data-cursor-zone={
                collapsed ? `${sidebarCursorZone}${link.label}` : undefined
              }
              className={cn(
                "group text-muted-foreground hover:bg-muted hover:text-primary aria-[current=page]:bg-muted aria-[current=page]:text-primary flex min-h-11 items-center rounded-md text-sm leading-relaxed transition-colors aria-[current=page]:font-medium",
                collapsed ? "justify-center" : "gap-3 px-3 py-2.5"
              )}>
              <Icon
                strokeWidth={1.75}
                aria-hidden="true"
                className="size-5 shrink-0"
              />
              <span className={cn(collapsed ? "sr-only" : "min-w-0 flex-1")}>
                {link.label}
              </span>
              {!collapsed && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 shrink-0 opacity-0 group-hover:opacity-100 group-aria-[current=page]:opacity-100"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
