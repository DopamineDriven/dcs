import Link from "next/link";
import type { TsxExclude as TsxUnionExclude } from "@/types/helpers";
import { DrisdellIcon } from "@/ui/icons/DrisdellIcon";
import { getYear } from "@/utils/get-year";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/drisdell-consulting-services-inc-",
      icon: ({
        ...props
      }: TsxUnionExclude<"svg", "fill" | "viewBox" | "xmlns">) => (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            fill='currentColor'
            d='M0 0V24H24V0H0ZM7.4649 19.9386H3.90414V9.22581H7.4649V19.9386ZM5.68452 7.76366H5.66099C4.46653 7.76366 3.69231 6.94075 3.69231 5.91218C3.69231 4.86103 4.48916 4.06143 5.70783 4.06143C6.92677 4.06143 7.67583 4.86103 7.69915 5.91218C7.69915 6.94075 6.92677 7.76366 5.68452 7.76366ZM20.3077 19.9386H16.746V14.2072C16.746 12.7677 16.2314 11.7851 14.9423 11.7851C13.9578 11.7851 13.3728 12.4467 13.1151 13.0875C13.0214 13.3165 12.9969 13.6347 12.9969 13.9557V19.9386H9.43453C9.43453 19.9386 9.48227 10.2309 9.43453 9.22586H12.9969V10.7439C13.4702 10.0156 14.3149 8.97437 16.2069 8.97437C18.5508 8.97437 20.3077 10.5051 20.3077 13.7954V19.9386Z'
          />
        </svg>
      )
    }
  ],
  main: [
    { name: "Home", href: "/", target: "_self" },
    { name: "About Us", href: "/about-us", target: "_self" },
    { name: "Consultants", href: "/consultants", target: "_self" },
    { name: "Contact Us", href: "/contact-us", target: "_self" }
  ]
} satisfies {
  social: {
    name: string;
    href: string;
    icon: ({
      ...props
    }: TsxUnionExclude<"svg", "fill" | "viewBox" | "xmlns">) => JSX.Element;
  }[];
  main: {
    name: string;
    href: string;
    target: string;
  }[];
};

export function Footer() {
  return (
    <footer className='border-t-[7px] border-t-dcs-800 bg-white px-6 lg:px-20'>
      <div className='overflow-hidden lg:pb-4 lg:pt-4'>
        <nav
          className='hidden lg:flex lg:flex-row lg:items-center lg:justify-start'
          aria-label='Global'>
          <div className='not-sr-only mr-[3.25rem] flex flex-shrink'>
            <Link href='/' className='lg:-m-1.5 lg:px-1.5 lg:pb-1.5'>
              <span className='sr-only'>Drisdell Consulting Services</span>
              <DrisdellIcon height={115} width={115} />
            </Link>
          </div>
          <div className='lg:flex lg:flex-row lg:justify-start lg:gap-x-[3.25rem] lg:space-y-0'>
            {navigation.main.map(item => (
              <Link
                key={`footer-${item.name}`}
                href={item.href}
                target={item.target}
                className='font-basis-grotesque-pro-medium text-[1.125rem] leading-[1.5rem] tracking-[0.07813rem] text-dcs-800 hover:text-dcs-900 lg:tracking-[-0.00675rem]'>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <nav className='grid grid-cols-1 lg:hidden' aria-label='Global'>
          <div className='not-sr-only col-span-2 mr-[3.25rem] flex flex-shrink'>
            <Link href='/' className='lg:-m-1.5 lg:px-1.5 lg:pb-1.5'>
              <span className='sr-only'>Drisdell Consulting Services</span>
              <DrisdellIcon height={100} width={100} />
            </Link>
          </div>
          <div className='my-auto flex flex-col justify-start gap-y-3.5'>
            {navigation.main.map(item => (
              <Link
                key={`footer-${item.name}`}
                href={item.href}
                className='font-basis-grotesque-pro-medium text-[0.875rem] leading-[1.25rem] tracking-[-0.00675rem] text-dcs-800 hover:text-dcs-900'>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className='mt-4 border-t border-dcs-800 pb-4 pt-2 lg:mt-0 lg:flex lg:justify-between lg:pt-4'>
        <div className='flex space-x-6 pb-2 pt-2 md:order-2'>
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
              className='text-dcs-800 hover:text-dcs-900'>
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='xs:text-[0.75rem] relative mt-5 flex flex-col justify-start space-y-2.5 text-left font-basis-grotesque-pro-regular text-[0.5rem] leading-5 text-gray-500 lg:text-[1rem]'>
          <span className='my-auto w-full flex-shrink'>
            &copy;&nbsp;
            {getYear(Date)}&nbsp;Drisdell Consulting Services Inc. All rights
            reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
