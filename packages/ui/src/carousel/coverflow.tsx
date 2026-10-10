"use client";

import type { ReactNode } from "react";
import { Carousel, useTickerItem } from "motion-plus/react";
import { motion, transform, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/** Offset (px from center) at which an item is fully turned away and shrunk. */
const EDGE = 200;
/** Offset (px from center) at which an item has been pulled a full width toward center. */
const FAR = 800;

export const coverflowRotateY = transform([-EDGE, 0, EDGE], [20, 0, -20]);
export const coverflowScale = transform([-EDGE, 0, EDGE], [0.7, 1, 0.7]);
export const coverflowX = transform(
  [-FAR, -EDGE, EDGE, FAR],
  ["100%", "0%", "0%", "-100%"]
);
export const coverflowZIndex = (offset: number) =>
  Math.max(0, Math.round(1000 - Math.abs(offset)));

/** Square stage: 250px, 350px from `sm` up. Shared by the carousel and each item. */
const STAGE = "size-62.5 sm:size-87.5";

export interface CoverflowItemProps {
  children: ReactNode;
  className?: string;
}

/** One coverflow slide. Must be rendered inside `CoverflowCarousel`'s `items`. */
export function CoverflowItem({ children, className }: CoverflowItemProps) {
  const { offset, props } = useTickerItem();
  const rotateY = useTransform(offset, coverflowRotateY);
  const scale = useTransform(offset, coverflowScale);
  const x = useTransform(offset, coverflowX);
  const zIndex = useTransform(offset, coverflowZIndex);

  return (
    <motion.li {...props} style={{ ...props.style, zIndex }}>
      <motion.div
        className={cn(
          STAGE,
          "overflow-hidden rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] will-change-[transform,opacity]",
          className
        )}
        style={{ transformPerspective: 500, x, rotateY, scale }}>
        {children}
      </motion.div>
    </motion.li>
  );
}

export interface CoverflowCarouselProps {
  /** `CoverflowItem` elements, each with a stable `key`. */
  items: ReactNode[];
  className?: string;
}

export function CoverflowCarousel({
  items,
  className
}: CoverflowCarouselProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center overflow-hidden mask-[linear-gradient(to_right,transparent_10%,black_25%,black_75%,transparent_90%)]",
        className
      )}>
      <Carousel
        className={cn(STAGE, "flex items-center justify-center")}
        items={items}
        overflow
        gap={0}
        itemSize="manual"
        safeMargin={200}
      />
    </div>
  );
}
