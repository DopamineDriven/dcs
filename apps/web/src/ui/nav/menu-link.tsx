import { ArrowUpRight } from "@dcs/ui";
import Link from "next/link";
import type { NavLink } from "@/lib/site-navigation";

export function MenuLink({
  link,
  onNavigateAction
}: {
  link: NavLink;
  onNavigateAction: () => void;
}) {
  const { description, href, label } = link;
  return (
    <Link
      href={href}
      className="group hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground -mx-2.75 flex items-center justify-between gap-3 rounded-sm px-2.75 py-2.25 transition-[background] duration-150 ease-[ease]"
      onClick={onNavigateAction}>
      <span className="flex flex-col gap-0.75">
        <span className="text-primary text-[0.9375rem] font-medium">
          {label}
        </span>
        <span className="text-muted-foreground text-sm/[1.55]">
          {description}
        </span>
      </span>
      <ArrowUpRight
        className="text-primary size-4 shrink-0 opacity-0 transition-opacity duration-150 ease-[ease] group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}
