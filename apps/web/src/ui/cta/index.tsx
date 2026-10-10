import { ArrowUpRight } from "@dcs/ui";
import Link from "next/link";
import { contactUrl } from "@/lib/site-navigation";

export function ContactSection() {
  return (
    <section
      className="bg-primary text-primary-foreground smaller:py-11.5 py-8.75"
      aria-labelledby="contact-heading">
      <div className="page-container smaller:gap-7 almost-lg:gap-8 flex flex-col items-start justify-between gap-6.25 md:flex-row md:items-center">
        <div>
          <p className="text-primary-foreground text-sm/normal font-semibold tracking-[0.115em] uppercase opacity-70">
            Your next chapter starts with a conversation
          </p>
          <h2
            id="contact-heading"
            className="smaller:max-w-none almost-lg:text-[2.25rem] mt-3.25 max-w-[16ch] text-[1.8125rem] leading-tight font-normal tracking-[-0.035em]">
            Let&apos;s get to work. Together.
          </h2>
        </div>
        <Link
          href={contactUrl}
          className="group bg-background text-primary hover:bg-muted almost-lg:gap-5 inline-flex min-h-12.25 items-center justify-center gap-3 rounded-sm border border-transparent px-5.25 py-3 text-sm/[1.55] font-medium transition-[background,box-shadow] duration-180 ease-[ease]">
          Tell us what you have in mind{" "}
          <ArrowUpRight
            className="size-4.75 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
