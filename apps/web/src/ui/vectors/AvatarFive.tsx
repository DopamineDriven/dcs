import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";
import { cn } from "@/lib/utils";

export const AvatarFive: FC<
  TsxExclude<"svg", "fill" | "xmlns" | "viewBox" | "role">
> = ({ className, height, width, ...rest }) => (
  <svg
    width={width ?? "192"}
    height={height ?? "192"}
    className={cn("flow-root max-w-full", className ?? "")}
    viewBox='0 0 192 192'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <mask
      id='mask0_67_3115'
      style={{ maskType: "alpha" }}
      maskUnits='userSpaceOnUse'
      x='6'
      y='6'
      width='180'
      height='180'>
      <circle cx='96' cy='96' r='90' fill='#E8EFFF' />
    </mask>
    <g mask='url(#mask0_67_3115)'>
      <circle cx='96' cy='96' r='90' fill='#9DCECA' />
    </g>
    <circle cx='96' cy='96' r='93' stroke='white' strokeWidth='6' />
  </svg>
);
