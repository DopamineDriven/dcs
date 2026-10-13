import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = {
  variants: {
    variant: {
      primary:
        "bg-dcs-800 text-white hover:bg-dcs-900 hover:shadow-[0_4px_12px_color-mix(in_oklch,var(--color-dcs-800)_12%,transparent)]",
      light: "bg-white text-dcs-800 hover:bg-dcs-50"
    }
  },
  defaultVariants: { variant: "primary" }
} as const;

export const brandButtonVariants = cva(
  "group/btn inline-flex min-h-12 items-center justify-center gap-5 rounded border border-transparent px-5 py-3 text-sm font-medium transition-[background-color,box-shadow] duration-180 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dcs-800 svg:shrink-0 svg:transition-transform svg:duration-180 hover:svg:translate-x-0.5 hover:svg:-translate-y-0.5",
  styles
);

export type BrandButtonLinkProps = ComponentPropsWithRef<typeof Link> &
  VariantProps<typeof brandButtonVariants>;

export function BrandButtonLink({
  variant,
  className,
  ...props
}: BrandButtonLinkProps) {
  return (
    <Link
      className={cn(brandButtonVariants({ variant }), className)}
      {...props}
    />
  );
}
