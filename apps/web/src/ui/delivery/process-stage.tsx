import { ArrowLeftRight } from "@dcs/ui";
import type { DeliveryStage } from "@/lib/project-delivery";
import { EffortLabel } from "@/ui/delivery/effort-label";
import { ProcessNode } from "@/ui/delivery/process-node";

export function ProcessStage({
  stage,
  configuration
}: {
  stage: DeliveryStage;
  configuration: boolean;
}) {
  if (stage.kind === "parallel") {
    return (
      <div>
        <div className="@xssm/detail:gap-4 grid grid-cols-2 gap-2.5">
          {stage.nodes.map(node => (
            <ProcessNode key={node.label} node={node} input />
          ))}
        </div>
        <div
          className="border-primary mx-auto h-6.5 w-1/2 rounded-b-[0.3125rem] border border-t-0"
          aria-hidden="true"
        />
        <span className="sr-only">
          Both surveys feed into the Business Processes Workflow.
        </span>
      </div>
    );
  }

  return (
    <div>
      <ProcessNode
        node={stage.node}
        review={Boolean(stage.review)}
        configuration={configuration}
      />
      {stage.review && (
        <div className="bg-background text-primary flex items-center gap-3.5 rounded-b-[0.3125rem] border border-t-0 px-4.5 py-4">
          <ArrowLeftRight className="size-5 shrink-0" aria-hidden="true" />
          <span className="sr-only">Two-way collaboration with: </span>
          <span className="@xssm/detail:flex-row @xssm/detail:items-center @xssm/detail:gap-4 @mdlg/detail:flex-col @mdlg/detail:items-start @mdlg/detail:gap-1.25 @larger/detail:flex-row @larger/detail:items-center @larger/detail:gap-3 flex flex-1 flex-col items-start justify-between gap-1.25 text-sm/[1.55]">
            <span>{stage.review.label}</span>
            <EffortLabel effort={stage.review.effort} muted />
          </span>
        </div>
      )}
    </div>
  );
}
