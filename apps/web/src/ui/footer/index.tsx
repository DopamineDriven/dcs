import { ArrowUpRight } from "@dcs/ui";
import Image from "next/image";
import Link from "next/link";
import { contactUrl } from "@/lib/site-navigation";

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
              <strong className="text-[0.9375rem] font-semibold">
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
              href="/consultants">
              Consultants
            </Link>
            <Link
              className="inline-flex items-center gap-1.25 underline-offset-4 hover:underline"
              href={contactUrl}>
              Contact
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
            Good people make all the difference.
            <span className="text-primary inline-flex items-center gap-1.25">
              Join us <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
