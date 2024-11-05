import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";
import { cn } from "@/lib/utils";

export const AvatarThree: FC<
  TsxExclude<"svg", "viewBox" | "fill" | "xmlns" | "role">
> = ({ width, height, className, ...rest }) => (
  <svg
    role='img'
    width={width ?? "192"}
    height={height ?? "161"}
    viewBox='0 0 192 161'
    fill='none'
    className={cn("flow-root max-w-full", className ?? "")}
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <g id='Group 427320230'>
      <g id='6'>
        <mask
          id='mask0_21_98'
          style={{ maskType: "alpha" }}
          maskUnits='userSpaceOnUse'
          x='6'
          y='6'
          width='180'
          height='180'>
          <circle id='Ellipse 31' cx='96' cy='96' r='90' fill='#CFEBD9' />
        </mask>
        <g mask='url(#mask0_21_98)'>
          <circle id='Ellipse 30' cx='96' cy='96' r='90' fill='#C0DA69' />
        </g>
      </g>
      <circle
        id='Ellipse 323'
        cx='96'
        cy='96'
        r='93'
        stroke='white'
        strokeWidth='6'
      />
    </g>
  </svg>
);
