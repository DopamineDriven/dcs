import Link from "next/link";
import { cn } from "@/lib/utils";
import { DrisdellIcon } from "@dcs/ui";

export function Brand({
  onNavigate,
  compact = false
}: {
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Drisdell Consulting Services home"
      onClick={onNavigate}
      className="text-dcs-800 inline-flex shrink-0 items-center gap-3.25 max-sm:gap-2.5 [&_svg]:text-xl">
      <DrisdellIcon
        aria-hidden
        className={cn(
          "object-contain",
          compact ? "h-12.5 w-11.75" : "h-15 w-14.5"
        )}
      />
      <span className="flex flex-col gap-0">
        <span
          className={cn(
            "font-basis-grotesque-pro-medium font-semibold tracking-[-0.045em] max-sm:text-xl/[1.2]",
            compact ? "text-xl/[1.2]" : "text-2xl/[1.2]"
          )}>
          Drisdell
        </span>
        <span className="font-basis-grotesque-pro-regular text-sm/[1.8] font-normal tracking-[0.015em]">
          Consulting Services
        </span>
      </span>
    </Link>
  );
}
