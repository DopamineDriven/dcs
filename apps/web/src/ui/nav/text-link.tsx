import type { ComponentPropsWithRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TextLink({
  className,
  ...props
}: ComponentPropsWithRef<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-dcs-800 svg:shrink-0 svg:transition-transform svg:duration-180 hover:svg:translate-x-0.5 hover:svg:-translate-y-0.5 inline-flex items-center gap-3 text-sm font-medium",
        className
      )}
      {...props}
    />
  );
}
