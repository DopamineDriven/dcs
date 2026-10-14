import { ArrowDown, ArrowLeftRight, Check } from "@d0paminedriven/icons";
import { deliveryPaths } from "@/lib/project-delivery";
import { ProcessLane } from "@/ui/delivery/process-lane";

export function ProjectDelivery() {
  return (
    <figure aria-labelledby="delivery-caption">
      <figcaption
        className="@mdlg/detail:flex-row @mdlg/detail:gap-8 mb-9 flex flex-col items-start justify-between gap-6"
        id="delivery-caption">
        <div>
          <h2 className="text-[1.75rem] leading-[1.3] font-medium tracking-[-0.03em]">
            From requirements to configuration.
          </h2>
          <p className="text-muted-foreground mt-2.5 text-[0.9375rem]">
            Two approaches, with collaboration built into each.
          </p>
        </div>
        <ul
          className="text-primary flex shrink-0 flex-col gap-2.25 text-sm/[1.55]"
          aria-label="Activity ownership">
          <li className="flex items-center gap-2.5">
            <span
              className="border-primary bg-primary inline-block size-3.5 shrink-0 rounded-[0.1875rem] border"
              aria-hidden="true"
            />
            Drisdell effort
          </li>
          <li className="flex items-center gap-2.5">
            <span
              className="border-primary bg-muted inline-block size-3.5 shrink-0 rounded-[0.1875rem] border"
              aria-hidden="true"
            />
            Joint Business &amp; Drisdell effort
          </li>
        </ul>
      </figcaption>
      <div className="@mdlg/detail:grid-cols-2 grid grid-cols-1 gap-7">
        {deliveryPaths.map(path => (
          <ProcessLane path={path} key={path.id} />
        ))}
      </div>
      <div
        className="text-primary @mdlg/detail:py-0 flex flex-col items-center py-4"
        aria-hidden="true">
        <div className="border-primary @mdlg/detail:block hidden h-8 w-[52%] rounded-b-md border border-t-0" />
        <ArrowDown className="size-6" />
      </div>
      <section
        className="bg-primary text-primary-foreground @xssm/detail:gap-4.5 @xssm/detail:px-8 @xssm/detail:py-6 mx-auto flex w-fit max-w-full items-center justify-center gap-3.5 rounded-md px-5 py-5.5"
        id="dev-configuration"
        aria-labelledby="dev-configuration-heading"
        tabIndex={-1}>
        <span className="border-primary-foreground/45 flex size-11 shrink-0 items-center justify-center rounded-full border">
          <Check aria-hidden="true" className="size-6" />
        </span>
        <div>
          <p className="text-sm/[1.55]">
            Both paths converge · Drisdell effort
          </p>
          <h3
            className="@xssm/detail:text-[1.375rem] mt-1.5 text-[1.1875rem] leading-[1.4] font-medium tracking-[-0.02em]"
            id="dev-configuration-heading">
            System Configuration in DEV
          </h3>
        </div>
      </section>
      <p className="text-muted-foreground mt-7 flex items-start justify-center gap-2.25 text-sm/[1.55]">
        <ArrowLeftRight
          className="mt-0.75 size-4 shrink-0"
          aria-hidden="true"
        />
        <span>
          Two-way arrows mark collaboration and review alongside the main
          delivery path.
        </span>
      </p>
    </figure>
  );
}
