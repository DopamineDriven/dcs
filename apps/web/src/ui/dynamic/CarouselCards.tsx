"use client";

import { CoverflowCarousel, CoverflowItem, shimmer } from "@dcs/ui";
import Image from "next/image";
import Link from "next/link";
import type { CardsProps, parentPagesById } from "@/types/wp";

export function CarouselCards<const T extends keyof typeof parentPagesById>({
  edges,
  target: _target
}: CardsProps<T>) {
  return (
    <div className="py-6 lg:hidden">
      <CoverflowCarousel
        items={edges.map(post => {
          const image = post.node.featuredImage.node;
          return (
            <CoverflowItem key={post.cursor}>
              <article className="group relative isolate flex size-full flex-col justify-end bg-gray-900 p-6">
                <Image
                  alt={image.altText}
                  src={image.sourceUrl}
                  fill
                  sizes="(max-width: 640px) 250px, 350px"
                  placeholder="blur"
                  blurDataURL={shimmer([
                    image.mediaDetails.width,
                    image.mediaDetails.height
                  ])}
                  draggable={false}
                  className="-z-10 object-cover group-hover:opacity-75"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                <h3 className="font-basis-grotesque-pro-regular text-lg/6 font-semibold text-white">
                  <Link href={post.node.uri} draggable={false}>
                    <span className="absolute inset-0" />
                    {post.node.title === "Why Drisdell Consulting Services?"
                      ? "Why DCS?"
                      : post.node.title}
                  </Link>
                </h3>
              </article>
            </CoverflowItem>
          );
        })}
      />
    </div>
  );
}
