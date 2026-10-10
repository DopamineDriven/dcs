import type { SiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { ProjectDelivery } from "@/ui/delivery";
import { ExpertiseDirectory } from "@/ui/expertise";

const paragraphs = (body: string) => body.split("\n\n");

export function DetailContent({ page }: { page: SiteContent }) {
  if (page.presentation === "expertise") return <ExpertiseDirectory />;
  if (page.presentation === "delivery") return <ProjectDelivery />;
  if (page.presentation === "testimonial") {
    return (
      <figure>
        <p className="eyebrow">In our client&apos;s words</p>
        <blockquote className="mt-6 flex flex-col gap-6">
          {page.sections.flatMap(section =>
            paragraphs(section.body).map(paragraph => (
              <p
                className="text-primary text-[1.125rem] leading-[1.6] tracking-[-0.015em] text-pretty md:text-[1.25rem]"
                key={paragraph}>
                {paragraph}
              </p>
            ))
          )}
        </blockquote>
        <figcaption className="text-muted-foreground mt-7 text-[0.9375rem] font-medium">
          — {page.attribution}
        </figcaption>
      </figure>
    );
  }

  return (
    <>
      {page.sections.map((section, index) => (
        <section
          className={cn("pp:mt-5.5", index > 0 && "mt-10.5 border-t pt-8")}
          id={section.id}
          key={section.title ?? section.body}>
          {section.title && (
            <h2 className="smaller:text-[1.75rem] mb-4 text-[1.5625rem] font-medium tracking-[-0.035em]">
              {section.title}
            </h2>
          )}
          {paragraphs(section.body).map(paragraph => (
            <p
              className="text-muted-foreground smaller:text-[1.0625rem] text-[0.9375rem] leading-[1.8] whitespace-pre-line"
              key={paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}
