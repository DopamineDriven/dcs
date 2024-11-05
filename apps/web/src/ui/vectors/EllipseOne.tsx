import type { FC } from "react";
import type { TsxExclude } from "@/types/helpers";

export const EllipseOne: FC<
  TsxExclude<"svg", "fill" | "viewBox" | "xmlns">
> = ({ height, width, ...svg }) => (
  <svg
    width={width ?? "36"}
    height={height ?? "36"}
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...svg}>
    <circle cx='18' cy='18' r='18' fill='#F9A13A' />
  </svg>
);
