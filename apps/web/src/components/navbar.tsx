"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/nav-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { DrisdellIcon } from "@/ui/icons/DrisdellIcon";

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

export function NavbarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <nav className='bg-white shadow font-basis-grotesque-pro-medium'>
      <div className='mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='flex'>
            <div className='flex flex-shrink-0 items-center'>
              <Link href='/' className='text-xl font-bold text-gray-800 z-[100]'>
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
                          <Button
                            variant='ghost'
                            className='h-auto rounded-full px-1 py-1 text-sm font-medium text-dcs-800 hover:text-dcs-900'>
                            <ChevronDown className='h-4 w-4' />
                          </Button>
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
            <Button
              variant='ghost'
              className='inline-flex items-center justify-center rounded-md p-2 text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dcs-800'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className='space-y-1 pb-3 pt-2'>
          {navigation.map(item => (
            <div key={item.name} className='px-2 py-1'>
              {item.children ? (
                <div>
                  <Button
                    variant='ghost'
                    className='flex w-full items-center justify-between px-3 py-2 text-base font-medium text-dcs-800 hover:bg-dcs-200 hover:text-dcs-900'
                    onClick={() => toggleExpanded(item.name)}>
                    {item.name}
                    {expandedItems.includes(item.name) ? (
                      <ChevronUp className='ml-1 h-4 w-4' />
                    ) : (
                      <ChevronDown className='ml-1 h-4 w-4' />
                    )}
                  </Button>
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
  );
}
