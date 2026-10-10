import type { ReactNode } from "react";
import { ArrowUpRight } from "@dcs/ui";
import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import {
  detailParent,
  isWidePresentation,
  siblingLinks
} from "@/lib/site-content";
import { contactUrl } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { ContactSection } from "@/ui/cta";
import { DetailContent } from "@/ui/detail/content";
import { DetailHero } from "@/ui/detail/hero";
import { Narration } from "@/ui/detail/narration";
import { Sidebar } from "@/ui/detail/sidebar";

/**
 * The detail frame for every About Us and Consultants page. `children`
 * replace the static sections (a WordPress body); `after` renders full-width
 * sections between the article and the contact band (child cards, a form).
 */
export function DetailPage({
  page,
  children,
  after
}: {
  page: SiteContent;
  children?: ReactNode;
  after?: ReactNode;
}) {
  const parent = detailParent(page.path);
  const wide = isWidePresentation(page);

  return (
    <>
      <DetailHero page={page} />
      <div
        className={cn(
          "page-container smaller:pt-16 smaller:pb-21 flex flex-col-reverse items-start pt-10 pb-12",
          wide
            ? "smaller:gap-10 almost-lg:gap-16 gap-11.25"
            : "smaller:gap-10 almost-lg:gap-20 gap-11.25 md:flex-row"
        )}>
        <Sidebar
          parent={parent}
          links={siblingLinks(page.path)}
          currentPath={page.path}
          wide={wide}
        />
        <article
          className={cn(
            "min-w-0 flex-1",
            wide ? "w-full max-w-none" : "max-w-190"
          )}>
          {!page.presentation && page.lead && (
            <p className="text-primary mb-7 text-[1.3125rem] leading-normal font-medium tracking-tight text-pretty md:text-[1.5rem]">
              {page.lead}
            </p>
          )}
          {children ?? <DetailContent page={page} />}
          {page.narration && (
            <Narration src={page.narration} eyebrow={page.eyebrow} />
          )}
          <Link
            className="group bg-primary text-primary-foreground hover:bg-foreground hover:shadow-primary/12 mt-10 inline-flex min-h-12.25 items-center justify-center gap-5 rounded-sm border border-transparent px-5.25 py-3 text-sm/[1.55] font-medium transition-[background,box-shadow] duration-180 ease-[ease] hover:shadow-[0_4px_12px]"
            href={page.action?.href ?? contactUrl}>
            {page.action?.label ?? "Let’s talk about your project"}
            <ArrowUpRight
              className="size-4.25 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </article>
      </div>
      {after}
      <ContactSection />
    </>
  );
}
