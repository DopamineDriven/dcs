import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";

export const EllipseFour: FC<
  TsxExclude<"svg", "fill" | "viewBox" | "xmlns">
> = ({ ...svg }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...svg}>
    <circle cx='10' cy='10' r='10' fill='#C0DA69' />
  </svg>
);
