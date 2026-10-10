import type { SiteContent, SiteImage } from "@/lib/site-content";
import { normalizeSitePath } from "@/lib/site-content";

export type WpFeaturedImage = {
  node: {
    altText: string;
    sourceUrl: string;
    mediaDetails: { width: number; height: number };
  };
} | null;

/** The slice of a WordPress page the detail frame reads. */
export type WpPageLike = {
  slug: string;
  title: string;
  content: string;
  uri: string;
  featuredImage: WpFeaturedImage;
};

export type ParsedWpContent = {
  /** Text of an opening `<h3>`, which the live site uses as the page's lead line. */
  lead?: string;
  /** The narration mp3 from the WordPress audio shortcode, without its cache-buster. */
  narration?: string;
  /** Body HTML with the audio shortcode, IE comments, and empty paragraphs removed. */
  html: string;
};

export type MergedSiteContent = SiteContent & { html: string };

const AUDIO_BLOCK = /<audio\b[\s\S]*?<\/audio>/gi;
const IE_COMMENT = /<!--\[if[\s\S]*?<!\[endif\]-->/gi;
const EMPTY_PARAGRAPH = /<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi;
const LEADING_H3 = /^\s*<h3\b[^>]*>([\s\S]*?)<\/h3>/i;
const SRC_ATTR = /\bsrc="([^"]+)"/i;

const entities = {
  "&amp;": "&",
  "&nbsp;": " ",
  "&quot;": '"',
  "&#39;": "'",
  "&lt;": "<",
  "&gt;": ">"
} as const satisfies Record<string, string>;

function textOf(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code))
    )
    .replace(
      /&(amp|nbsp|quot|#39|lt|gt);/g,
      match => entities[match as keyof typeof entities]
    )
    .replace(/\s+/g, " ")
    .trim();
}

export function parseWpContent(content: string): ParsedWpContent {
  let html = content;

  const audio = html.match(AUDIO_BLOCK)?.[0];
  const narration = audio
    ? SRC_ATTR.exec(audio)?.[1]?.split("?")[0]
    : undefined;
  html = html
    .replace(AUDIO_BLOCK, "")
    .replace(IE_COMMENT, "")
    .replace(EMPTY_PARAGRAPH, "");

  const heading = LEADING_H3.exec(html);
  const lead = heading?.[1] ? textOf(heading[1]) : undefined;
  if (heading) html = html.replace(LEADING_H3, "");

  return { lead, narration, html: html.trim() };
}

function wpImage(featured: WpFeaturedImage): SiteImage | undefined {
  if (!featured?.node.sourceUrl) return undefined;
  const { sourceUrl, altText, mediaDetails } = featured.node;
  return {
    src: sourceUrl,
    alt: altText,
    width: mediaDetails.width,
    height: mediaDetails.height
  };
}

/**
 * The designed frame (headline, description, presentation, action) comes from
 * the curated model; everything WordPress owns (eyebrow, lead, body, narration,
 * hero image) comes from the live page so CMS edits ship without a redeploy.
 */
export function mergeSiteContent(
  curated: SiteContent | undefined,
  page: WpPageLike
): MergedSiteContent {
  const parsed = parseWpContent(page.content);
  return {
    path: normalizeSitePath(page.uri),
    title: curated?.title ?? page.title,
    eyebrow: page.title,
    description: curated?.description ?? "",
    sections: curated?.sections ?? [],
    lead: parsed.lead ?? curated?.lead,
    presentation: curated?.presentation,
    image: wpImage(page.featuredImage) ?? curated?.image,
    narration: parsed.narration ?? curated?.narration,
    attribution: curated?.attribution,
    action: curated?.action,
    html: parsed.html
  };
}
