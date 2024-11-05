import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";

export const EllipseFive: FC<
  TsxExclude<"svg", "fill" | "viewBox" | "xmlns">
> = ({ ...svg }) => (
  <svg
    width='39'
    height='39'
    viewBox='0 0 39 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...svg}>
    <circle cx='19.5' cy='19.5' r='19.5' fill='#2181BC' />
  </svg>
);
