import Image from "next/image";
import type { SiteContent } from "@/lib/site-content";
import { detailCrumbs } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/ui/detail/breadcrumbs";

export function DetailHero({ page }: { page: SiteContent }) {
  return (
    <section className="bg-muted text-foreground smaller:pt-8 smaller:pb-17.5 pt-6.25 pb-10.5">
      <div className="page-container">
        <Breadcrumbs crumbs={detailCrumbs(page)} />
        <div
          className={cn(
            page.image &&
              "flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-12"
          )}>
          <div className="min-w-0 flex-1">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1
              className={cn(
                "smaller:mt-5 mt-4 max-w-[19ch] leading-[1.1] font-medium tracking-tighter",
                page.image
                  ? "text-[clamp(38px,4.1vw,58px)]"
                  : "text-[clamp(38px,4.5vw,64px)]"
              )}>
              {page.title}
            </h1>
            <p className="text-muted-foreground smaller:mt-6.25 smaller:text-[1.1875rem] mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.65]">
              {page.description}
            </p>
          </div>
          {page.image && (
            <Image
              className="h-auto w-full shrink-0 rounded-md md:w-2/5 md:max-w-115"
              src={page.image.src}
              alt={page.image.alt}
              width={page.image.width}
              height={page.image.height}
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 40vw, 460px"
              preload
            />
          )}
        </div>
      </div>
    </section>
  );
}
