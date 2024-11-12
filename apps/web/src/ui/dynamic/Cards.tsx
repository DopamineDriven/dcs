import Image from "next/image";
import Link from "next/link";
import type { CardsProps } from "@/types/wp";
import { shimmer } from "@/lib/shimmer";
import { cn } from "@/lib/utils";
import { parentPagesById } from "@/types/wp";
import { CarouselCards } from "@/ui/dynamic/CarouselCards";

export function Cards<const T extends keyof typeof parentPagesById>({
  target,
  edges
}: CardsProps<T>) {
  return (
    <div className='bg-white py-12 sm:py-32'>
      <div className='mx-auto max-w-7xl px-0 lg:px-8'>
        <div className='mx-auto max-w-3xl pb-10 text-center'>
          <h2 className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
            {target === "About_Us"
              ? "About Drisdell Consulting Services"
              : "Consultants"}
          </h2>
        </div>
        {/* viewports lg or bigger render Classic Cards (below) */}
        <div
          className={cn(
            "hidden lg:mx-0 lg:mt-20 lg:grid lg:max-w-none lg:auto-rows-fr lg:gap-6",
            target === "About_Us" ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}>
          {edges.map(post => (
            <article
              key={post.cursor}
              className='group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
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
                className='absolute inset-0 -z-10 h-full w-full object-cover group-hover:opacity-75'
                style={{ objectFit: "cover" }}
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
              <h3 className='mt-3 font-basis-grotesque-pro-regular text-lg/6 font-semibold text-white'>
                <Link href={post.node.uri}>
                  <span className='absolute inset-0' />
                  {post.node.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
        {/* viewports md or smaller render Carousel Cards */}
        <CarouselCards target={target} edges={edges} />
      </div>
    </div>
  );
}
