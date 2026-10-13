import type { ReactNode } from "react";
import { ArrowUpRight, ChevronRight, shimmer } from "@dcs/ui";
import Image from "next/image";
import Link from "next/link";
import type { WordPressPagePresentation } from "@/lib/wordpress-pages";
import { contactUrl } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";
import { ContactSection } from "@/ui/contact/section";
import { PageNarration } from "@/ui/narration";

export function DetailPage({
  page,
  children
}: {
  page: WordPressPagePresentation;
  children: ReactNode;
}) {
  const isConsultantPage = page.path.startsWith("/consultants");
  const parent = isConsultantPage
    ? { href: "/consultants", label: "Consultants" }
    : { href: "/about-us", label: "About us" };
  const isWide =
    page.presentation === "delivery" || page.presentation === "expertise";

  return (
    <div>
      <section className="bg-muted text-foreground smaller:pt-8 smaller:pb-17.5 pt-6.25 pb-10.5">
        <div className="smaller:w-[calc(100%-3.5rem)] almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto w-[calc(100%-2.5rem)] max-w-7xl">
          <nav
            className="text-muted-foreground smaller:mb-13 mb-8.5 flex flex-wrap items-center gap-2.5 text-sm/[1.55]"
            aria-label="Breadcrumb">
            <Link className="hover:text-primary" href="/">
              Home
            </Link>
            <ChevronRight className="size-3.25" aria-hidden="true" />
            {page.path !== parent.href && (
              <>
                <Link className="hover:text-primary" href={parent.href}>
                  {parent.label}
                </Link>
                <ChevronRight className="size-3.25" aria-hidden="true" />
              </>
            )}
            <span aria-current="page">
              {page.path === parent.href ? parent.label : page.eyebrow}
            </span>
          </nav>
          <div
            className={cn(
              page.image &&
                "flex flex-col items-stretch gap-8 @3xl/page:flex-row @3xl/page:items-center @3xl/page:gap-12"
            )}>
            <div className="min-w-0 flex-1">
              <p className="text-primary text-sm/normal font-semibold tracking-[0.115em] uppercase">
                {page.eyebrow}
              </p>
              <h1
                className={cn(
                  "smaller:mt-5 mt-4 max-w-[19ch] font-medium tracking-tighter",
                  page.image
                    ? "text-[clamp(38px,4.1vw,58px)]"
                    : "text-[clamp(38px,4.5vw,64px)]",
                  "leading-[1.1]"
                )}>
                {page.title}
              </h1>
              <p className="text-muted-foreground smaller:mt-6.25 smaller:text-[1.1875rem] mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.65]">
                {page.description}
              </p>
            </div>
            {page.image && (
              <Image
                className="h-auto w-full shrink-0 rounded-md @3xl/page:w-2/5 @3xl/page:max-w-115"
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width}
                height={page.image.height}
                placeholder="blur"
                blurDataURL={shimmer([page.image.width, page.image.height])}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 460px"
                preload
              />
            )}
          </div>
        </div>
      </section>
      <div className="smaller:w-[calc(100%-3.5rem)] smaller:pt-16 smaller:pb-21 almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto w-[calc(100%-2.5rem)] max-w-7xl pt-10 pb-12">
        <article
          className={cn(
            "@container/detail min-w-0",
            isWide ? "w-full max-w-none" : "max-w-190"
          )}>
          {page.narration && page.path === parent.href && (
            <PageNarration
              key={page.narration}
              src={page.narration}
              title={page.eyebrow}
              introduction
            />
          )}
          {children}
          {page.narration && page.path !== parent.href && (
            <PageNarration
              key={page.narration}
              src={page.narration}
              title={page.eyebrow}
            />
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
      <ContactSection />
    </div>
  );
}
