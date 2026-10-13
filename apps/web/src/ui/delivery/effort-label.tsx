import type { DeliveryNode } from "@/lib/project-delivery";
import { cn } from "@/lib/utils";

export function EffortLabel({
  effort,
  muted = false
}: {
  effort: DeliveryNode["effort"];
  muted?: boolean;
}) {
  return (
    <span
      className={cn(
        `inline-flex items-center gap-1.75 text-sm/[1.4] font-normal before:size-1.5 before:rounded-full before:border before:border-current`,
        effort === "drisdell" ? "before:bg-current" : "",
        muted ? "text-muted-foreground shrink-0" : ""
      )}>
      {effort === "drisdell" ? "Drisdell" : "Joint effort"}
    </span>
  );
}
