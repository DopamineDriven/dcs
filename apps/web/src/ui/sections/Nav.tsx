"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import throttle from "lodash.throttle";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { NavButton } from "@/ui/buttons/NavButton";
import { DrisdellIcon } from "@/ui/icons/DrisdellIcon";
import css from "./navbar.module.css";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    children: [
      { name: "Our Careers", href: "/about-us/our-careers" },
      { name: "Our Consultants", href: "/about-us/our-consultants" },
      { name: "Our Customers", href: "/about-us/our-customers" },
      { name: "Our Expertise", href: "/about-us/our-expertise" },
      { name: "Our Mission", href: "/about-us/our-mission" },
      { name: "Our Organization", href: "/about-us/our-organization" },
      { name: "Our Project Delivery", href: "/about-us/our-project-delivery" },
      {
        name: "Our Satisfied Clients",
        href: "/about-us/our-satisfied-clients"
      },
      { name: "Our World", href: "/about-us/our-world" }
    ]
  },
  {
    name: "Consultants",
    href: "/consultants",
    children: [
      {
        name: "Consultant Testimonials",
        href: "/consultants/consultant-testimonials"
      },
      {
        name: "Skills and Positions",
        href: "/consultants/skills-and-positions"
      },
      { name: "Submit a Résumé", href: "/consultants/submit-a-resume" },
      {
        name: "Why Drisdell Consulting Services?",
        href: "/consultants/why-drisdell-consulting-services"
      }
    ]
  },
  { name: "Contact Us", href: "/contact-us" }
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    // effect only fires on pathname change which closes the menu in mobile view
    console.info(`route changed to ${pathname}`);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 200);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <header className='static appearance-none'>
      <nav
        className={cn(
          "bg-white font-basis-grotesque-pro-medium shadow will-change-scroll",
          css.stickyNav,
          hasScrolled === false ? "bg-opacity-100" : "bg-opacity-95"
        )}>
        <div className={"mx-auto max-w-8xl px-4 sm:px-6 lg:px-8"}>
          <div className='flex h-16 justify-between'>
            <div className='flex'>
              <div className='flex flex-shrink-0 items-center'>
                <Link
                  href='/'
                  className='z-[100] text-xl font-bold text-gray-800'>
                  <DrisdellIcon width={50} />
                </Link>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                {navigation.map(item => (
                  <div key={item.name} className='relative flex items-center'>
                    {item.children ? (
                      <>
                        <Link
                          className='inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-dcs-800 hover:border-dcs-800 hover:text-dcs-900'
                          href={item.href}>
                          {item.name}
                        </Link>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <NavButton
                              variant='ghost'
                              className='h-auto rounded-full px-1 py-1 text-sm font-medium text-dcs-800 hover:text-dcs-900'>
                              <ChevronDown className='h-4 w-4' />
                            </NavButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='start'>
                            {item.children.map(child => (
                              <DropdownMenuItem key={child.name} asChild>
                                <Link href={child.href}>{child.name}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className='inline-flex items-center border-b-2 border-transparent px-1 py-2 text-sm font-medium text-dcs-800 hover:border-dcs-800 hover:text-dcs-900'>
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className='-mr-2 flex items-center sm:hidden'>
              <NavButton
                variant='ghost'
                className='inline-flex items-center justify-center rounded-md p-2 text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dcs-800'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span className='sr-only'>Open main menu</span>
                {mobileMenuOpen ? (
                  <X className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Menu className='block h-6 w-6' aria-hidden='true' />
                )}
              </NavButton>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className='space-y-1 pb-3 pt-2'>
            {navigation.map(item => (
              <div key={item.name} className=''>
                {item.children ? (
                  <>
                    <div className='flex w-full min-w-full flex-row justify-between px-3 py-2'>
                      <Link
                        className='z-50 inline-flex justify-between text-base font-medium text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900'
                        href={item.href}>
                        {item.name}
                      </Link>
                      <NavButton
                        variant='ghost'
                        className='-mt-2 inline-flex items-end justify-between align-top text-base font-medium text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900'
                        onClick={() => toggleExpanded(item.name)}>
                        {expandedItems.includes(item.name) ? (
                          <ChevronUp className='ml-1 h-4 w-4' />
                        ) : (
                          <ChevronDown className='ml-1 h-4 w-4' />
                        )}
                      </NavButton>
                    </div>
                    <div className=''>
                      {expandedItems.includes(item.name) && (
                        <div className='ml-4 mt-2 space-y-2'>
                          {item.children.map(child => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className='block px-3 py-2 text-base font-medium text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900'>
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className='block px-3 py-2 text-base font-medium text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900'>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
