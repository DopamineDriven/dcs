"use client";

import { Carousel, useTickerItem } from "motion-plus/react";
import { motion, useTransform } from "motion/react";

export interface WpChildrenProps {
  edges: {
    cursor: string;
    node: {
      uri: string;
      title: string;
      featuredImage: {
        __typename: string;
        cursor: string;
        node: {
          __typename: string;
          altText: string;
          uri: string;
          title: string;
          sourceUrl: string;
          databaseId: number;
          description: string;
          id: string;
          slug: string;
          mediaDetails: {
            __typename: string;
            width: number;
            height: number;
          };
        };
      };
    };
  }[];
}

export interface WpFeaturedImage {
  __typename: string;
  cursor: string;
  node: {
    __typename: string;
    altText: string;
    uri: string;
    title: string;
    sourceUrl: string;
    databaseId: number;
    description: string;
    id: string;
    slug: string;
    mediaDetails: {
      __typename: string;
      width: number;
      height: number;
    };
  };
}

export function CarouselImage({
  sourceUrl: src,
  altText: alt,
  id: index,
  mediaDetails
}: WpFeaturedImage["node"]) {
  const { offset } = useTickerItem();
  const rotate = useTransform(offset, [0, 20000], [0, 360], { clamp: false });
  const x = useTransform(offset, [-1000, 0, 1000], ["40%", "0%", "-40%"]);
  const y = useTransform(offset, [0, 1000], [0, 400], { clamp: false });
  const scale = useTransform(offset, [-1000, 0, 1000], [0.5, 1, 0.5]);
  const filter = useTransform(
    offset,
    [-1000, 0, 1000],
    ["blur(5px)", "blur(0px)", "blur(5px)"]
  );

  const opacity = useTransform(offset, [-1000, 0, 1000], [0, 1, 0]);
  const { width: w, height: h } = mediaDetails;
  return (
    <motion.img
      key={index}
      draggable={false}
      className="h-75 justify-self-center rounded-xl object-cover [@media(max-width<=600px)]:h-37.5"
      src={src}
      alt={alt}
      style={{
        aspectRatio: w / h,
        rotate,
        scale,
        x,
        y,
        filter,
        opacity
      }}
    />
  );
}

export function CarouselItemOffset({ edges }: WpChildrenProps) {
  return (
    <>
      <Carousel
        className="li:flex li:items-center li:justify-center w-full max-w-100 [@media(width<=600px)]:max-w-62.5"
        items={edges.map(image => (
          <CarouselImage
            key={image.node.featuredImage.node.id}
            {...image.node.featuredImage.node}
          />
        ))}
        itemSize="fill"
        overflow
        gap={20}
        safeMargin={200}
      />
    </>
  );
}
