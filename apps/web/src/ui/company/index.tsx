import { ArrowRight } from "@d0paminedriven/icons";
import Link from "next/link";

export function CompanyPromise() {
  return (
    <section
      className="smaller:py-20.75 pt-11 pb-11.5"
      aria-labelledby="promise-heading">
      <div className="smaller:w-[calc(100%-3.5rem)] almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto w-[calc(100%-2.5rem)] max-w-7xl">
        <div className="smaller:gap-6.25 almost-lg:gap-15 lgxl:gap-25 flex flex-col justify-between gap-6 md:flex-row md:gap-9">
          <div className="flex-1">
            <p className="text-primary text-sm/normal font-semibold tracking-[0.115em] uppercase">
              Independent by design. Personal by nature.
            </p>
            <h2
              id="promise-heading"
              className="smaller:mt-5 smaller:text-[1.8125rem] lgxl:text-[2.125rem] mt-4.25 text-[1.75rem] leading-[1.35] font-medium tracking-[-0.04em]">
              A lot has changed since 1995.
              <br />
              <span className="text-primary">Our commitment hasn&apos;t.</span>
            </h2>
          </div>
          <div className="text-muted-foreground smaller:gap-4.25 smaller:pt-1.25 smaller:text-[0.9375rem] flex max-w-113.75 flex-1 flex-col gap-4 text-sm/[1.75]">
            <p>
              Technology evolves. Businesses grow. But the way we work stays the
              same: understand your challenges, put the right people beside you,
              and see the job through.
            </p>
            <p>
              We&apos;re not here to sell you a platform. We&apos;re here to
              make yours work better.
            </p>
            <Link
              href="/about-us"
              className="group text-primary mt-1.25 inline-flex items-center gap-3 text-sm/[1.75] font-medium">
              A little more about us
              <ArrowRight
                className="size-4.25 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
        <figure className="bg-muted text-foreground smaller:mt-10 smaller:p-8 almost-lg:p-10 mt-8 rounded-sm p-6 font-sans">
          <blockquote className="smaller:text-lg smaller:leading-relaxed almost-lg:text-xl almost-lg:leading-relaxed mx-auto max-w-4xl text-base leading-relaxed">
            <p>
              “Since 1995, we have provided quality services and custom
              application development solutions to our customers. And as hard as
              it is to accomplish in this day and age, we have realized a{" "}
              <strong className="text-primary font-medium">
                100% on time, on budget
              </strong>{" "}
              project completion record on all of our client projects. We
              successfully manage projects, implement systems, and solve
              business problems—just ask any of our clients!”
            </p>
          </blockquote>
          <figcaption className="text-primary mx-auto mt-6 max-w-4xl text-sm/normal font-medium">
            – Drisdell Consulting Services
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
