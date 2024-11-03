import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";
export const EllipseThree: FC<
  TsxExclude<"svg", "fill" | "viewBox" | "xmlns">
> = ({ height, width, ...svg }) => (
  <svg
    width={width ?? "30"}
    height={height ?? "30"}
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...svg}>
    <circle cx='15' cy='15' r='15' fill='#F9A13A' />
  </svg>
);
