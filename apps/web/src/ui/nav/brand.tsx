import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  onNavigateAction,
  compact = false
}: {
  onNavigateAction?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className="text-primary smaller:gap-3.25 inline-flex shrink-0 items-center gap-2.5"
      aria-label="Drisdell Consulting Services home"
      onClick={() => onNavigateAction?.()}>
      <Image
        className={cn("object-contain",
          compact
            ? "size-12"
            : "smaller:h-13.5 smaller:w-13 almost-lg:h-15 almost-lg:w-14.5 h-12.5 w-11.75"
        )}
        src="/images/dcs-logo.svg"
        width={62}
        height={58}
        alt=""
        priority
      />
      <span className="flex flex-col gap-0">
        <span
          className={cn(
            `leading-[1.2] font-[650] tracking-[-0.045em]`,
            compact
              ? "text-[1.3125rem]"
              : "smaller:text-[1.4375rem] text-[1.375rem]"
          )}>
          Drisdell
        </span>
        <span className="text-sm/[1.8] tracking-[0.015em]">
          Consulting Services
        </span>
      </span>
    </Link>
  );
}
