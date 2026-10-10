import { ArrowDown } from "@dcs/ui";
import type { DeliveryPath } from "@/lib/project-delivery";
import { cn } from "@/lib/utils";
import { ProcessStage } from "@/ui/delivery/process-stage";

export function ProcessLane({ path }: { path: DeliveryPath }) {
  return (
    <section
      className="bg-muted text-foreground xssm:p-7 mdlg:p-5.5 larger:p-7 min-w-0 rounded-lg border px-4 py-5"
      aria-labelledby={`${path.id}-heading`}>
      <header className="mdlg:mb-0 mdlg:min-h-26 mb-6.5">
        <h3
          className="xssm:text-[1.4375rem] text-[1.375rem] leading-[1.3] font-medium tracking-[-0.03em]"
          id={`${path.id}-heading`}>
          {path.title}
        </h3>
        <p className="text-muted-foreground mt-2.5 text-sm/normal">
          {path.description}
        </p>
      </header>
      <ol className="list-none">
        {path.stages.map((stage, index) => (
          <li
            className={cn(
              index === 0 ? "mdlg:min-h-53 larger:min-h-47" : undefined
            )}
            key={stage.kind === "parallel" ? "surveys" : stage.node.label}>
            {index > 0 && (
              <div
                className="text-primary flex h-9 items-center justify-center"
                aria-hidden="true">
                <ArrowDown className="size-5" />
              </div>
            )}
            <ProcessStage stage={stage} configuration={index === 3} />
          </li>
        ))}
      </ol>
      <a
        className="text-primary xssm:items-center mt-6 flex items-start justify-center gap-3 text-sm/[1.55] underline-offset-4 hover:underline"
        href="#dev-configuration">
        Continues to system configuration in DEV
        <ArrowDown
          className="xssm:mt-0 xssm:shrink mt-1 size-4 shrink-0"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
