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
  return (
    <Link
      href={link.href}
      onClick={onNavigateAction}
      className="group/link hover:bg-dcs-50 focus-visible:bg-dcs-50 focus-visible:outline-dcs-800 -mx-3 flex items-center justify-between gap-3 rounded px-3 py-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2">
      <span className="flex flex-col gap-0.5">
        <span className="text-dcs-800 text-[0.9375rem] font-medium">
          {link.label}
        </span>
        <span className="text-sm text-gray-500">{link.description}</span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="text-dcs-800 size-4 shrink-0 opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
      />
    </Link>
  );
}
