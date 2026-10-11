import { ArrowRight, ArrowUpRight } from "@dcs/ui";
import Image from "next/image";
import Link from "next/link";
import { contactUrl } from "@/lib/site-navigation";

export function CompanyPromise() {
  return (
    <section
      className="smaller:py-20.75 pt-11 pb-11.5"
      aria-labelledby="promise-heading">
      <div className="smaller:w-[calc(100%-3.5rem)] smaller:gap-6.25 almost-lg:w-[calc(100%-4.5rem)] almost-lg:gap-15 lgxl:w-[calc(100%-7rem)] lgxl:gap-25 mx-auto flex w-[calc(100%-2.5rem)] max-w-7xl flex-col justify-between gap-6 md:flex-row md:gap-9">
        <div className="flex-1">
          <p className="text-primary text-sm/normal font-semibold tracking-[0.115em] uppercase">
            Independent by design. Personal by nature.
          </p>
          <h2
            id="promise-heading"
            className="smaller:mt-5 smaller:text-[29px] lgxl:text-[34px] mt-4.25 text-[28px] leading-[1.35] font-medium tracking-[-0.04em]">
            A lot has changed since 1995.
            <br />
            <span className="text-primary">Our commitment hasn&apos;t.</span>
          </h2>
        </div>
        <div className="text-muted-foreground smaller:gap-4.25 smaller:pt-1.25 smaller:text-[15px] flex max-w-113.75 flex-1 flex-col gap-4 text-sm/[1.75]">
          <p>
            Technology evolves. Businesses grow. But the way we work stays the
            same: understand your challenges, put the right people beside you,
            and see the job through.
          </p>
          <p>
            We&apos;re not here to sell you a platform. We&apos;re here to make
            yours work better.
          </p>
          <Link
            href="/about-us"
            className="group text-primary mt-1.25 inline-flex items-center gap-3 text-sm/[1.75] font-medium">
            A little more about us{" "}
            <ArrowRight
              className="size-4.25 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      className="bg-primary text-primary-foreground smaller:py-11.5 py-8.75"
      aria-labelledby="contact-heading">
      <div className="smaller:w-[calc(100%-3.5rem)] smaller:gap-7 almost-lg:w-[calc(100%-4.5rem)] almost-lg:gap-8 lgxl:w-[calc(100%-7rem)] mx-auto flex w-[calc(100%-2.5rem)] max-w-7xl flex-col items-start justify-between gap-6.25 md:flex-row md:items-center">
        <div>
          <p className="text-primary-foreground text-sm/normal font-semibold tracking-[0.115em] uppercase opacity-70">
            Your next chapter starts with a conversation
          </p>
          <h2
            id="contact-heading"
            className="smaller:max-w-none almost-lg:text-[36px] mt-3.25 max-w-[16ch] text-[29px] leading-tight font-normal tracking-[-0.035em]">
            Let&apos;s get to work. Together.
          </h2>
        </div>
        <Link
          href={contactUrl}
          target="_blank"
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

export function SiteFooter() {
  return (
    <footer className="smaller:pt-9.75 pt-7.25">
      <div className="smaller:w-[calc(100%-3.5rem)] almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto w-[calc(100%-2.5rem)] max-w-7xl">
        <div className="smaller:flex-row smaller:gap-8 smaller:pb-8.25 almost-lg:items-center flex flex-col items-start justify-between gap-6.25 pb-6.5">
          <Link
            href="/"
            className="text-primary flex items-center gap-3.25"
            aria-label="Drisdell Consulting Services home">
            <Image
              className="size-13.75"
              src="/images/dcs-logo.svg"
              alt=""
              width={58}
              height={55}
            />
            <div className="flex flex-col gap-1">
              <strong className="text-[15px] font-semibold">
                Drisdell Consulting Services
              </strong>
              <span className="text-muted-foreground text-sm/[1.55]">
                In the company of experts.
              </span>
            </div>
          </Link>
          <nav
            aria-label="Footer navigation"
            className="text-primary smaller:max-w-70 smaller:justify-end smaller:gap-4.5 almost-lg:max-w-none lgxl:gap-6.5 flex flex-wrap items-center justify-start gap-x-5.5 gap-y-4.5 text-sm/[1.55]">
            <Link
              className="inline-flex items-center gap-1.25 underline-offset-4 hover:underline"
              href="/about-us">
              About us
            </Link>
            <Link
              className="inline-flex items-center gap-1.25 underline-offset-4 hover:underline"
              href="/about-us/our-expertise">
              Expertise
            </Link>
            <Link
              className="inline-flex items-center gap-1.25 underline-offset-4 hover:underline"
              href="/about-us/our-consultants">
              Consultants
            </Link>
            <Link
              className="inline-flex items-center gap-1.25 underline-offset-4 hover:underline"
              href={contactUrl}>
              Contact Us
            </Link>
            <a
              className="inline-flex items-center gap-1.25 underline-offset-4 hover:underline"
              href="https://www.linkedin.com/company/drisdell-consulting-services-inc-"
              target="_blank"
              rel="noreferrer">
              LinkedIn <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
        <div className="text-muted-foreground smaller:pt-5 smaller:pb-6.5 flex items-center justify-between gap-6 border-t pt-4.75 pb-5.5 text-sm/[1.55]">
          <p>
            © {new Date().getFullYear()} Drisdell Consulting Services, Inc. All
            rights reserved.
          </p>
          <Link
            href="/about-us/our-careers"
            className="almost-lg:flex hidden flex-wrap items-center gap-2.5">
            Good people make all the difference.{" "}
            <span className="text-primary inline-flex items-center gap-1.25">
              Join us <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
