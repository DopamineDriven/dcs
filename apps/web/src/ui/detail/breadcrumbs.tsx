import { ChevronRight } from "@dcs/ui";
import { Fragment } from "react";
import Link from "next/link";
import type { Crumb } from "@/lib/site-content";

export function Breadcrumbs({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <nav
      className="text-muted-foreground smaller:mb-13 mb-8.5 flex flex-wrap items-center gap-2.5 text-sm/[1.55]"
      aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => {
        const last = index === crumbs.length - 1;
        return (
          <Fragment key={crumb.href ?? crumb.label}>
            {crumb.href && !last ? (
              <Link className="hover:text-primary" href={crumb.href}>
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page">{crumb.label}</span>
            )}
            {!last && <ChevronRight className="size-3.25" aria-hidden="true" />}
          </Fragment>
        );
      })}
    </nav>
  );
}
