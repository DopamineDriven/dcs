import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";
import { cn } from "@/lib/utils";

export const AvatarFour: FC<
  TsxExclude<"svg", "fill" | "xmlns" | "viewBox" | "role">
> = ({ className, height, width, ...rest }) => (
  <svg
    role='img'
    width={width ?? "173"}
    height={height ?? "117"}
    viewBox='0 0 173 117'
    className={cn("flow-root max-w-full", className ?? "")}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <mask
      id='mask0_21_104'
      style={{ maskType: "alpha" }}
      maskUnits='userSpaceOnUse'
      x='6'
      y='6'
      width='180'
      height='180'>
      <circle cx='96' cy='96' r='90' fill='#E8EFFF' />
    </mask>
    <g mask='url(#mask0_21_104)'>
      <circle cx='96' cy='96' r='90' fill='#9DCECA' />
    </g>
    <circle cx='96' cy='96' r='93' stroke='white' strokeWidth='6' />
  </svg>
);
