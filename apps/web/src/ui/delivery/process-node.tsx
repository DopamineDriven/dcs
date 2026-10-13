import type { DeliveryNode } from "@/lib/project-delivery";
import { cn } from "@/lib/utils";
import { EffortLabel } from "@/ui/delivery/effort-label";

export function ProcessNode({
  node,
  input = false,
  review = false,
  configuration = false
}: {
  node: DeliveryNode;
  input?: boolean;
  review?: boolean;
  configuration?: boolean;
}) {
  return (
    <div
      className={cn(
        `border-primary border`,
        review ? "rounded-t-[0.3125rem]" : "rounded-[0.3125rem]",
        configuration ? "@mdlg/detail:min-h-34 min-h-0" : "min-h-27.75",
        node.effort === "drisdell"
          ? "bg-primary text-primary-foreground"
          : "bg-background text-primary",
        input
          ? "@xssm/detail:min-h-40.5 @xssm/detail:p-3.75 @mdlg/detail:min-h-46.5 @larger/detail:min-h-40.5 @larger/detail:p-4.5 min-h-48 p-3.25"
          : "@xssm/detail:p-5 p-4.5"
      )}>
      <EffortLabel effort={node.effort} />
      <p
        className={cn(
          `mt-2 leading-[1.45] font-medium text-pretty`,
          input ? "text-base" : "text-[1.0625rem]"
        )}>
        {node.label}
      </p>
    </div>
  );
}
