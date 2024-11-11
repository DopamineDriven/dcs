"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CardsProps, parentPagesById } from "@/types/wp";
import { CarouselButton } from "@/components/ui/carousel-button";
import { shimmer } from "@/lib/shimmer";
import { cn } from "@/lib/utils";
import css from "./carousel-cards.module.css";

export function CarouselCards<const T extends keyof typeof parentPagesById>({
  edges,
  target: _target
}: CardsProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start"
    },
    [ClassNames()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

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
    <div className={cn("relative lg:hidden", css.embla)}>
      <div className={css.embla__viewport} ref={emblaRef}>
        <div className={css.embla__container}>
          {edges.map((post, i) => (
            <div
              key={i}
              className={cn(
                css.embla__slide,
                "embla__class-names relative isolate flex flex-col"
              )}>
              <Link className='appearance-none' href={post.node.uri}>
                <Image
                  alt={post.node.featuredImage.node.altText}
                  src={post.node.featuredImage.node.sourceUrl}
                  height={post.node.featuredImage.node.mediaDetails.height}
                  width={post.node.featuredImage.node.mediaDetails.width}
                  placeholder='blur'
                  blurDataURL={shimmer({
                    w: post.node.featuredImage.node.mediaDetails.width,
                    h: post.node.featuredImage.node.mediaDetails.height
                  })}
                  className={cn(css.embla__slide__img)}
                  style={{ objectFit: "cover" }}
                />

                <h3 className={cn('mt-3 font-basis-grotesque-pro-medium font-semibold text-[1.25rem] leading-[1.75rem] tracking-tight')}>
                  <span className='absolute -translate-y-20 translate-x-3 appearance-none'>
                    <span className='z-[100] mx-1 my-2 bg-black/50 bg-clip-text text-white'>
                      {post.node.title === "Why Drisdell Consulting Services?" ? "Why DCS?" : post.node.title}
                    </span>
                    <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />{" "}
                  </span>
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <CarouselButton
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
      </CarouselButton> */}
      <div className='mt-4 flex justify-center'>
        {edges.map((_, index) => (
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
