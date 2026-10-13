import "server-only";
import { Rm } from "@dcs/types";
import { cache } from "react";
import type { SiteContent } from "@/lib/site-content";
import { sitePages } from "@/lib/site-content";
import { companyGroups, consultantLinks } from "@/lib/site-navigation";
import { readWordPressContent, wordpressText } from "@/lib/wordpress-content";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { QueryPageByUri } from "@/queries/page-by-uri";

export type WordPressPagePresentation = Rm<SiteContent, "lead" | "attribution">;
export type WordPressPageLink = { label: string; href: string };

export const getWordPressPage = cache(async (path: string) => {
  const root = path.split("/")[1];
  if (root !== "about-us" && root !== "consultants") return null;
  const target = root === "about-us" ? "About_Us" : "Consultants";
  const [result, parent] = await Promise.all([
    QueryPageByUri(`${path}/`),
    QueryPageByIdWithChildren(target)
  ]);
  const page = result.page;
  if (
    !page ||
    page?.status !== "publish" ||
    page.isPreview ||
    !parent?.page ||
    parent.page?.status !== "publish"
  )
    return null;
  if (page.id !== parent.page.id && page.parentId !== parent.page.id)
    return null;

  const published = [
    parent.page,
    ...parent.page.children.edges.map(({ node }) => node)
  ].filter(node => node?.status === "publish" && !node.isPreview);
  const preferredOrder =
    root === "about-us"
      ? [
          `/${root}`,
          ...companyGroups.flatMap(group => group.links.map(({ href }) => href))
        ]
      : [`/${root}`, ...consultantLinks.map(({ href }) => href)];
  const rank = (href: string) => {
    const index = preferredOrder.indexOf(href);
    return index < 0 ? preferredOrder.length : index;
  };
  const links = published
    .flatMap(node =>
      node.uri && node.title
        ? [
            {
              href: node.uri.replace(/\/$/, ""),
              label: wordpressText(node.title)
            }
          ]
        : []
    )
    .sort((a, b) => rank(a.href) - rank(b.href));

  const design: SiteContent | undefined = sitePages.find(
    entry => entry.path === path
  );
  const content = readWordPressContent(page.content);
  const title = wordpressText(page.title ?? "");
  const image = page.featuredImage?.node;
  const width = image?.mediaDetails?.width;
  const height = image?.mediaDetails?.height;
  const presentation = {
    path,
    title: design?.title ?? title,
    eyebrow: title,
    description: design?.description ?? content.text.slice(0, 160),
    sections: design?.sections ?? [],
    ...(design?.presentation ? { presentation: design.presentation } : {}),
    ...(design?.action ? { action: design.action } : {}),
    ...(content.narration ? { narration: content.narration } : {}),
    ...(image?.sourceUrl && width && height
      ? {
          image: {
            src: image.sourceUrl,
            alt: image.altText ?? "",
            width,
            height
          }
        }
      : {})
  } satisfies WordPressPagePresentation;

  return {
    presentation,
    html: content.html,
    links,
    isParent: page.id === parent.page.id,
    metadata: {
      title,
      description: content.text.slice(0, 160) || presentation.description
    }
  };
});
