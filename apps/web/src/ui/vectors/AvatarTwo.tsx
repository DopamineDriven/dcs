import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";
import { cn } from "@/lib/utils";

export const AvatarTwo: FC<
  TsxExclude<"svg", "viewBox" | "fill" | "xmlns" | "role">
> = ({ width, height, className, ...rest }) => (
  <svg
    role='img'
    width={width ?? "152"}
    height={height ?? "152"}
    viewBox='0 0 152 152'
    className={cn("flow-root max-w-full", className ?? "")}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <mask
      id='mask0_21_92'
      style={{ maskType: "alpha" }}
      maskUnits='userSpaceOnUse'
      x='6'
      y='6'
      width='140'
      height='140'>
      <circle cx='76' cy='76' r='70' fill='#E8EFFF' />
    </mask>
    <g mask='url(#mask0_21_92)'>
      <circle cx='76' cy='76' r='70' fill='#AC0079' />
    </g>
    <circle cx='76' cy='76' r='73' stroke='white' strokeWidth='6' />
  </svg>
);
