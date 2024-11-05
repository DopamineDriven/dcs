import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";
import { cn } from "@/lib/utils";

export const AvatarOne: FC<
  TsxExclude<"svg", "viewBox" | "fill" | "xmlns" | "role">
> = ({ width, height, className, ...rest }) => (
  <svg
    role='img'
    width={width ?? "192"}
    height={height ?? "139"}
    viewBox='0 0 192 139'
    className={cn("flow-root max-w-full", className ?? "")}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <mask
      id='mask0_21_86'
      style={{ maskType: "alpha" }}
      maskUnits='userSpaceOnUse'
      x='6'
      y='-47'
      width='180'
      height='180'>
      <circle cx='96' cy='43' r='90' fill='#FFF6E7' />
    </mask>

    <g mask='url(#mask0_21_86)'>
      <circle cx='96' cy='43' r='90' fill='#E6C153' />
    </g>
    <circle cx='96' cy='43' r='93' stroke='white' strokeWidth='6' />
  </svg>
);
