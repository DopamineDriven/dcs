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
        "text-dcs-800 inline-flex items-center gap-3 text-sm font-medium [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-180 hover:[&_svg]:translate-x-0.5 hover:[&_svg]:-translate-y-0.5",
        className
      )}
      {...props}
    />
  );
}
