"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselButton } from "@/components/ui/carousel-button";

type SubPage = {
  title: string;
  description: string;
  link: string;
};

const subPages = [
  { title: "Home", description: "Welcome to our main page", link: "/" },
  {
    title: "About",
    description: "Learn more about our company",
    link: "/about"
  },
  {
    title: "Services",
    description: "Explore our range of services",
    link: "/services"
  },
  {
    title: "Products",
    description: "Check out our product catalog",
    link: "/products"
  },
  { title: "Blog", description: "Read our latest articles", link: "/blog" },
  { title: "Contact", description: "Get in touch with us", link: "/contact" },
  { title: "FAQ", description: "Frequently asked questions", link: "/faq" },
  {
    title: "Testimonials",
    description: "What our clients say",
    link: "/testimonials"
  },
  { title: "Careers", description: "Join our team", link: "/careers" },
  {
    title: "Portfolio",
    description: "View our past projects",
    link: "/portfolio"
  },
  {
    title: "Events",
    description: "Upcoming events and webinars",
    link: "/events"
  },
  {
    title: "Resources",
    description: "Helpful guides and tools",
    link: "/resources"
  }
] satisfies SubPage[];

export function SubpageCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start"
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className='relative bg-dcs-50'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex mx-10'>
          {subPages.map((page, index) => (
            <div
              key={index}
              className='min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]'>
              <Card className='h-full'>
                <CardContent className='p-4'>
                  <h3 className='mb-2 text-lg font-semibold'>{page.title}</h3>
                  <p className='mb-4 text-sm text-gray-600'>
                    {page.description}
                  </p>
                  <CarouselButton asChild variant='outline' size='sm'>
                    <Link href={page.link}>Learn More</Link>
                  </CarouselButton>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <CarouselButton
        variant='outline'
        size='icon'
        className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full'
        onClick={scrollPrev}>
        <ChevronLeft className='h-4 w-4' />
        <span className='sr-only'>Previous slide</span>
      </CarouselButton>
      <CarouselButton
        variant='outline'
        size='icon'
        className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full'
        onClick={scrollNext}>
        <ChevronRight className='h-4 w-4' />
        <span className='sr-only'>Next slide</span>
      </CarouselButton>
      <div className='mt-4 flex justify-center'>
        {subPages.map((_, index) => (
          <CarouselButton
            key={index}
            variant='ghost'
            size='sm'
            className={`mx-1 h-2 w-2 rounded-full p-0 ${
              index === selectedIndex ? "bg-[#18181b]" : "bg-gray-300"
            }`}
            onClick={() => scrollTo(index)}>
            <span className='sr-only'>Go to slide {index + 1}</span>
          </CarouselButton>
        ))}
      </div>
    </div>
  );
}
