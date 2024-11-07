import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { InferGSPRT } from "@/types/next";
import { QueryChildPageBySlug } from "@/queries/page-by-uri";
import { QueryChildPaths } from "@/queries/paths";
import SubContent from "@/ui/about/SubContent";
import { formatHelper } from "@/utils/format-helper";

export async function generateStaticParams() {
  return (await QueryChildPaths("Consultants")).pages.edges.map(page => {
    return {
      slug: page.node.slug
    };
  });
}

export const dynamicParams = true

export const revalidate = 60;

export async function generateMetadata({
  params
}: InferGSPRT<typeof generateStaticParams>) {
  const slug = (await params).slug;
  return {
    title: formatHelper(slug)
  } satisfies Metadata;
}

export default async function ConsultantsSubPages({
  params
}: InferGSPRT<typeof generateStaticParams>) {
  const slug = (await params).slug;
  const [data] = await Promise.all([QueryChildPageBySlug("Consultants", slug)]);

  if (!data.page) {
    notFound();
  }

  return <SubContent page={data.page} />;
}
