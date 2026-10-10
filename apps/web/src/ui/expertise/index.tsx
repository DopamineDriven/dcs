import { Check } from "@dcs/ui";
import { expertiseGroups } from "@/lib/expertise";

export function ExpertiseDirectory() {
  return (
    <div className="mdlg:grid-cols-3 grid grid-cols-1 gap-5">
      {expertiseGroups.map(group => (
        <section
          className="overflow-hidden rounded-md border"
          id={group.id}
          key={group.id}
          aria-labelledby={`${group.id}-title`}>
          <div className="bg-muted text-primary mdlg:min-h-52.5 larger:min-h-48.5 larger:p-7 p-5.5">
            <h2
              className="text-[1.5625rem] leading-[1.2] font-medium tracking-[-0.03em]"
              id={`${group.id}-title`}>
              {group.title}
            </h2>
            <p className="text-muted-foreground mt-3.75 text-sm/[1.6]">
              {group.description}
            </p>
          </div>
          <ul className="xssm:grid xssm:grid-cols-2 xssm:gap-x-7 mdlg:block larger:px-7 px-5.5">
            {group.items.map(item => (
              <li
                className="xssm:max-mdlg:nth-2:border-t-0 flex items-start gap-3 border-t py-4.75 text-[0.9375rem] leading-normal first:border-t-0"
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
