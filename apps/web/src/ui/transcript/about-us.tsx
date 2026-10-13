import { ChevronDown } from "@dcs/ui";

export function AboutUsTranscript() {
  return (
    <details className="group/transcript bg-card text-card-foreground mb-9 rounded-md border font-sans">
      <summary className="text-primary cursor-pointer list-none px-5 py-4 text-sm/normal font-medium [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-4">
          Read the introduction transcript
          <ChevronDown
            className="size-4 shrink-0 group-open/transcript:rotate-180"
            aria-hidden="true"
          />
        </span>
      </summary>
      <div className="px-5 pb-6">
        <p className="text-muted-foreground text-base leading-relaxed">
          When we first opened our doors in 1995, our mission was simple:
          provide expert consulting services to our clients while exceeding
          their expectations. We have accomplished this goal by hiring
          consultants with proven technical talent and a strong work ethic,
          precisely matching our consultants to client projects, managing these
          projects to completion, and listening to our clients and consultants
          along the way. Our objective is to have a personal ongoing
          relationship with our clients and our consultants.
        </p>
      </div>
    </details>
  );
}
