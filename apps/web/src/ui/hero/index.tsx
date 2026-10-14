import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "@d0paminedriven/icons";
import Image from "next/image";
import Link from "next/link";
import { contactUrl } from "@/lib/site-navigation";

export function HomeHero() {
  return (
    <section className="overflow-clip" aria-labelledby="hero-heading">
      <div className="smaller:w-[calc(100%-3.5rem)] smaller:gap-8 smaller:pt-10 smaller:pb-11 almost-lg:w-[calc(100%-4.5rem)] almost-lg:gap-8.5 almost-lg:pt-14 lgxl:w-[calc(100%-7rem)] lgxl:gap-12 2xlplus:gap-16 2xlplus:pt-16.5 2xlplus:pb-12.5 mx-auto flex w-[calc(100%-2.5rem)] max-w-7xl flex-col items-stretch gap-8.5 pt-9 pb-7.25 md:flex-row md:items-center md:gap-7">
        <div className="almost-lg:basis-[55%] flex-[1_1_54%] md:pt-2.5 md:pb-5.5">
          <div className="text-primary smaller:mb-7.25 smaller:tracking-[0.04em] almost-lg:tracking-[0.115em] mb-5.25 flex items-center gap-2.5 text-sm/normal font-semibold tracking-wide uppercase">
            <span className="bg-primary almost-lg:block hidden h-px w-5.75 shrink-0" />
            Independent expertise. Since 1995.
          </div>
          <h1
            id="hero-heading"
            className="smaller:text-[3.25rem] smaller:leading-[1.09] smaller:tracking-[-0.062em] almost-lg:text-[clamp(42px,4.65vw,69px)] text-[clamp(34px,9.55vw,55px)] leading-[1.1] font-medium tracking-[-0.057em] whitespace-nowrap md:text-[clamp(34px,4.75vw,47px)]">
            Complex systems.
            <br />
            <span className="text-primary">Human solutions.</span>
          </h1>
          <p className="text-foreground smaller:mt-6.25 smaller:text-[1.25rem] almost-lg:text-[clamp(18px,1.5vw,21px)] mt-5.25 text-[1.1875rem] leading-[1.55] tracking-[-0.018em] text-pretty md:text-[1.125rem]">
            Exceptional Human Capital and Workforce Management IT System Support
          </p>
          <p className="text-muted-foreground smaller:mt-3.75 smaller:max-w-[60ch] almost-lg:text-[0.9375rem] mt-3 max-w-[44ch] text-sm/[1.75] md:max-w-[45ch]">
            We bring clarity to workforce management, payroll, and the systems
            that connect them. Experienced people. Practical solutions. A
            partner you can count on.
          </p>
          <div className="smaller:mt-7.25 smaller:gap-6 almost-lg:flex-row almost-lg:items-center almost-lg:gap-4 lgxl:flex-nowrap lgxl:gap-6 mt-6 flex flex-wrap items-center gap-x-5.5 gap-y-4.5 md:flex-col md:items-start md:gap-4.5">
            <Link
              className="group bg-primary text-primary-foreground hover:bg-foreground hover:shadow-primary/12 smaller:min-h-12.25 smaller:gap-5.5 smaller:px-5.25 smaller:py-3 inline-flex min-h-11.75 items-center justify-center gap-3.75 rounded-sm border border-transparent px-3.75 py-2.75 text-sm/[1.55] font-medium transition-[background,box-shadow] duration-180 ease-[ease] hover:shadow-[0_4px_12px]"
              href={contactUrl}>
              Let&apos;s solve it together
              <ArrowUpRight
                className="size-4.5 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              className="group text-primary smaller:gap-3 inline-flex items-center gap-2 text-sm/[1.55] font-medium"
              href="/about-us/our-expertise">
              Explore our expertise
              <ArrowRight
                className="size-4.25 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="text-muted-foreground smaller:mt-7.5 mt-5.5 flex items-center gap-2.25 text-sm/[1.55]">
            <span className="bg-muted text-primary flex size-4.5 items-center justify-center rounded-full">
              <Check
                className="size-3.5"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </span>
            <span>The right people. From day one to done.</span>
          </div>
        </div>
        <div className="smaller:pb-6 almost-lg:basis-[45%] relative w-full min-w-0 flex-[1_1_46%] self-stretch pb-5 md:w-auto">
          <div className="bg-muted text-foreground smaller:h-85 almost-lg:min-h-122.5 lgxl:min-h-125.5 2xlplus:min-h-138.75 relative h-75 min-h-0 overflow-hidden rounded-sm md:h-full md:min-h-120">
            <Image
              src="/images/dcs-architecture.webp"
              alt="A sweeping glass and steel facade against a clear blue sky"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1499px) 48vw, 608px"
              preload
              className="animate-image-arrive smaller:object-[50%_45%] object-cover object-[50%_44%]"
            />
            <div className="text-primary-foreground text-shadow-foreground smaller:top-5 smaller:right-4.5 almost-lg:top-auto almost-lg:right-6.25 almost-lg:bottom-7.25 absolute top-4.75 right-5 flex flex-col gap-0.5 text-right text-sm/[1.55] font-medium text-shadow-[0_1px_6px]">
              <span>Built on experience.</span>
              <span>Focused on what&apos;s next.</span>
            </div>
          </div>
          <div className="bg-background text-primary shadow-primary/4 smaller:left-5 smaller:py-4.25 almost-lg:-left-7.5 almost-lg:gap-5.5 almost-lg:px-7 almost-lg:py-5.5 absolute bottom-0 left-3.75 flex items-center gap-3.5 rounded-sm border px-5 py-4 shadow-[0_5px_16px] md:-left-4">
            <span className="smaller:text-[3.0625rem] almost-lg:text-[3.75rem] text-[2.8125rem] leading-none font-normal tracking-[-0.055em]">
              30
              <span className="smaller:text-[2.1875rem] align-top text-[1.75rem] leading-[1.3] font-light">
                +
              </span>
            </span>
            <div className="smaller:max-w-none almost-lg:pl-5 max-w-39 border-l pl-3.25">
              <strong className="block text-sm/normal font-medium">
                Years of moving
                <br className="smaller:block hidden" />
                business forward.
              </strong>
              <Link
                href="/about-us"
                className="text-muted-foreground hover:text-primary mt-2 inline-flex items-center gap-1.75 text-sm/[1.55]">
                Our story{" "}
                <ArrowUpRight className="size-3.75" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground smaller:w-[calc(100%-3.5rem)] smaller:gap-4 smaller:pt-5 smaller:pb-6.25 almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto flex w-[calc(100%-2.5rem)] max-w-7xl items-center justify-between gap-2 border-t pt-3.75 pb-5 text-sm/[1.55]">
        <span>
          Workforce management{" "}
          <span className="smaller:px-4.5 px-1.25 opacity-55">/</span> HCM{" "}
          <span className="smaller:px-4.5 px-1.25 opacity-55">/</span> Payroll{" "}
          <span className="smaller:px-4.5 px-1.25 opacity-55">/</span>{" "}
          Integrations
        </span>
        <a
          href="#discover"
          className="text-primary hover:bg-muted smaller:size-7.5 smaller:shrink flex size-6.5 shrink-0 items-center justify-center rounded-full border transition-[background] duration-180 ease-[ease]"
          aria-label="Discover how DCS can help">
          <ArrowDown
            className="smaller:w-4.5 size-4.5 w-3.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
