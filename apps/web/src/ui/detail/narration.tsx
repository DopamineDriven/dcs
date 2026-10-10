import { ArrowUpRight, ChevronDown, Headphones } from "@dcs/ui";

export function Narration({ src, eyebrow }: { src: string; eyebrow: string }) {
  return (
    <details className="group/narration mt-9 border-y">
      <summary className="text-primary flex cursor-pointer list-none items-center justify-between gap-4 py-4.5 text-sm/[1.55] font-medium [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2.5">
          <Headphones className="size-4.5" aria-hidden="true" />
          Listen to this page
        </span>
        <ChevronDown
          className="size-4 group-open/narration:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="pb-5.5">
        <audio
          className="block h-12 w-full"
          controls
          preload="none"
          aria-label={`${eyebrow} — original narration`}
          src={src}>
          Your browser does not support audio playback.
        </audio>
        <p className="text-muted-foreground mt-3.5 mb-2.5 text-sm/[1.55]">
          Original page narration. The text above is the transcript.
        </p>
        <a
          className="group text-primary inline-flex items-center gap-3 text-sm/[1.55] font-medium"
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
