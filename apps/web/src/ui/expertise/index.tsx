import { Check } from "@d0paminedriven/icons";

const expertiseGroups = [
  {
    id: "workforce",
    title: "Workforce & HCM systems",
    description:
      "The applications your people rely on, and the expertise to support them."
  },
  {
    id: "integrations",
    title: "Integration & process design",
    description:
      "Connect your systems, understand your requirements, and refine how you work."
  },
  {
    id: "project-management",
    title: "Business & project delivery",
    description:
      "Keep your people, priorities, and resources moving toward the same goal."
  }
];

function expertiseGroup(item: string) {
  if (/crm|saas|cloud|process|requirements|data/i.test(item))
    return "integrations";
  if (/hcm|implementation|configuration|system|training/i.test(item))
    return "workforce";
  return "project-management";
}

export function ExpertiseDirectory({ items }: { items: string[] }) {
  const groups = expertiseGroups
    .map(group => ({
      ...group,
      items: items.filter(item => expertiseGroup(item) === group.id)
    }))
    .filter(group => group.items.length > 0);
  return (
    <div className="@mdlg/detail:grid-cols-3 grid grid-cols-1 gap-5">
      {groups.map(group => (
        <section
          className="overflow-hidden rounded-md border"
          id={group.id}
          key={group.id}
          aria-labelledby={`${group.id}-title`}>
          <div className="bg-muted text-primary @mdlg/detail:min-h-52.5 @larger/detail:min-h-48.5 @larger/detail:p-7 p-5.5">
            <h2
              className="text-[1.5625rem] leading-[1.2] font-medium tracking-[-0.03em]"
              id={`${group.id}-title`}>
              {group.title}
            </h2>
            <p className="text-muted-foreground mt-3.75 text-sm/[1.6]">
              {group.description}
            </p>
          </div>
          <ul className="@xssm/detail:grid @xssm/detail:grid-cols-2 @xssm/detail:gap-x-7 @mdlg/detail:block @larger/detail:px-7 px-5.5">
            {group.items.map(item => (
              <li
                className="@xssm/detail:@max-mdlg/detail:nth-2:border-t-0 flex items-start gap-3 border-t py-4.75 text-[0.9375rem] leading-normal first:border-t-0"
                key={item}
                id={
                  item === "Business Process Modeling"
                    ? "custom-solutions"
                    : undefined
                }>
                <Check
                  className="text-primary mt-0.75 size-4 shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
