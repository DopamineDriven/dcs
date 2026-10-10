import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { InferGSPRT } from "@/types/next";
import { findSitePage } from "@/lib/site-content";
import { mergeSiteContent } from "@/lib/wp-page";
import { QueryChildPageBySlug } from "@/queries/page-by-uri";
import { QueryChildPaths } from "@/queries/paths";
import { DetailPage } from "@/ui/detail";
import { WpBody } from "@/ui/detail/wp-body";
import { ContactForm } from "@/ui/sections/ContactForm";
import { formatHelper } from "@/utils/format-helper";

export async function generateStaticParams() {
  return (await QueryChildPaths("About_Us")).pages.edges.map(page => ({
    slug: page.node.slug
  }));
}

export const dynamicParams = true;

// Headless WordPress: edits in the CMS reach production without a redeploy.
export const revalidate = 120;

export async function generateMetadata({
  params
}: InferGSPRT<typeof generateStaticParams>) {
  const slug = (await params).slug;
  const curated = findSitePage(`/about-us/${slug}`);
  return {
    title: curated?.eyebrow ?? formatHelper(slug),
    description: curated?.description
  } satisfies Metadata;
}

export default async function AboutUsSubPage({
  params
}: InferGSPRT<typeof generateStaticParams>) {
  const slug = (await params).slug;
  const data = await QueryChildPageBySlug("About_Us", slug);
  if (!data.page) notFound();
  const page = mergeSiteContent(findSitePage(`/about-us/${slug}`), data.page);

  return (
    <DetailPage
      page={page}
      after={slug === "our-careers" ? <ContactForm /> : undefined}>
      {page.presentation ? undefined : <WpBody html={page.html} />}
    </DetailPage>
  );
}
