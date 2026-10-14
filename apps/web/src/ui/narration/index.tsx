import { ArrowUpRight, ChevronDown, Headphones } from "@d0paminedriven/icons";
import { cn } from "@/lib/utils";

export function PageNarration({
  src,
  title,
  introduction = false
}: {
  src: string;
  title: string;
  introduction?: boolean;
}) {
  return (
    <details
      className={cn(
        "group/narration border-y font-sans",
        introduction ? "mb-9" : "mt-9"
      )}
      open={introduction}>
      <summary className="text-primary flex cursor-pointer list-none items-center justify-between gap-4 py-4.5 text-sm/normal font-medium [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2.5">
          <Headphones className="size-4.5" aria-hidden="true" />
          {introduction ? "Listen to our introduction" : "Listen to this page"}
        </span>
        <ChevronDown
          className="size-4 shrink-0 group-open/narration:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="pb-5.5">
        <audio
          className="block h-12 w-full"
          controls
          preload="none"
          aria-label={`${title} — original narration`}
          src={src}>
          Your browser does not support audio playback.
        </audio>
        <p className="text-muted-foreground mt-3.5 mb-2.5 text-sm/normal">
          Original narration published with this page.
        </p>
        <a
          className="group text-primary inline-flex items-center gap-3 text-sm/normal font-medium"
          href={src}
          download>
          Download audio
          <ArrowUpRight
            className="size-4 shrink-0 transition-transform duration-180 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </details>
  );
}
