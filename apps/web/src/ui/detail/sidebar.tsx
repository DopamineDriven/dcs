import { ArrowUpRight } from "@dcs/ui";
import Link from "next/link";
import type { DetailParent, SiteAction } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Sidebar({
  parent,
  links,
  currentPath,
  wide
}: {
  parent: DetailParent;
  links: readonly SiteAction[];
  currentPath: string;
  wide: boolean;
}) {
  return (
    <aside
      className={cn(
        "static w-full basis-auto border-t",
        wide
          ? "pt-8"
          : "smaller:basis-47.5 smaller:pt-7 almost-lg:basis-60 pt-6.75 md:sticky md:top-32.5 md:w-auto md:shrink-0 md:grow-0 md:border-t-0 md:pt-0"
      )}>
      <h2 className="eyebrow">{parent.label}</h2>
      <nav
        className={cn(
          "mt-4.5",
          wide
            ? "mdlg:grid-cols-4 grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-x-4"
            : "smaller:gap-1 grid grid-cols-2 gap-0.75 md:flex md:flex-col"
        )}
        aria-label={`${parent.label} pages`}>
        {links.map(link => (
          <Link
            className="text-muted-foreground hover:bg-muted hover:text-primary aria-[current=page]:bg-muted aria-[current=page]:text-primary smaller:px-3.25 smaller:py-2.75 flex items-center justify-between gap-3 rounded-sm p-2.25 text-sm/[1.55]"
            href={link.href}
            key={link.href}
            aria-current={link.href === currentPath ? "page" : undefined}>
            {link.label}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
