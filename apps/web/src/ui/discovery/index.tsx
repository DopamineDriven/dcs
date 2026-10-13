import { ArrowUpRight, Blocks, Compass, Handshake, UsersRound } from "@dcs/ui";
import Link from "next/link";

const destinations = [
  {
    title: "Our expertise",
    description: "The know-how to make complex systems work for your business.",
    detail: "Discover what we do",
    href: "/about-us/our-expertise",
    icon: Blocks
  },
  {
    title: "Consultants",
    description:
      "Seasoned problem-solvers who care as much about the outcome as you do.",
    detail: "Meet your partners",
    href: "/consultants",
    icon: UsersRound
  },
  {
    title: "Our approach",
    description:
      "Listen first. Understand your business. Build the right solution, together.",
    detail: "See how we work",
    href: "/about-us/our-mission",
    icon: Compass
  },
  {
    title: "Our story",
    description:
      "An independent consulting firm. Three decades of keeping our word.",
    detail: "Get to know DCS",
    href: "/about-us",
    icon: Handshake
  }
];

export function DiscoverySection() {
  return (
    <section
      className="bg-muted text-foreground smaller:pt-14.75 smaller:pb-16.5 pt-9.5 pb-10"
      id="discover"
      aria-labelledby="discover-heading">
      <div className="smaller:w-[calc(100%-3.5rem)] almost-lg:w-[calc(100%-4.5rem)] lgxl:w-[calc(100%-7rem)] mx-auto w-[calc(100%-2.5rem)] max-w-7xl">
        <div className="smaller:mb-8.25 smaller:gap-5 mb-6.5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-8">
          <div>
            <p className="text-primary text-sm/normal font-semibold tracking-[0.115em] uppercase">
              A little clarity goes a long way
            </p>
            <h2
              id="discover-heading"
              className="almost-lg:text-[2.3125rem] mt-3.25 text-[2.0625rem] leading-[1.17] font-medium tracking-[-0.045em]">
              The right expertise.
              <br />
              The right people.
            </h2>
          </div>
          <p className="text-muted-foreground smaller:max-w-[50ch] almost-lg:max-w-none max-w-[38ch] pb-1 text-sm/[1.7] md:max-w-[30ch]">
            No one-size-fits-all answers. Just the experience
            <br className="almost-lg:block hidden" /> and commitment to get it
            right for you.
          </p>
        </div>
        <div className="smaller:grid smaller:grid-cols-2 smaller:gap-4.25 almost-lg:grid-cols-4 flex flex-col gap-2.5">
          {destinations.map(({ icon: Icon, ...item }) => (
            <Link
              href={item.href}
              className="group bg-card text-foreground hover:border-primary/45 hover:shadow-primary/5 smaller:flex smaller:flex-col smaller:gap-5 smaller:p-6.5 smaller:hover:-translate-y-0.75 almost-lg:gap-6.25 almost-lg:p-5.5 lgxl:p-6.25 grid grid-cols-[26px_1fr_16px] items-start gap-4 rounded-sm border px-4.25 py-5.5 transition-[border-color,box-shadow,translate] duration-180 ease-[ease] hover:shadow-[0_8px_24px]"
              key={item.title}>
              <span className="text-primary smaller:pt-0 pt-1">
                <Icon
                  className="smaller:size-6 size-5.75"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </span>
              <div className="flex-1">
                <h3 className="smaller:text-[1.25rem] text-[1.1875rem] font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground smaller:mt-2.25 smaller:leading-[1.75] almost-lg:max-w-none mt-1.25 max-w-[30ch] text-sm/[1.6]">
                  {item.description}
                </p>
              </div>
              <span className="text-primary smaller:pt-0 flex items-center gap-2.5 pt-1.75 text-sm/[1.55] font-medium">
                <span className="smaller:inline hidden">{item.detail}</span>
                <ArrowUpRight
                  className="size-4 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
