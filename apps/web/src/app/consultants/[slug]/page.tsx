import type { Metadata } from "next";
import { QueryChildPaths } from "@/queries/paths";
import { SubmitResume } from "@/ui/forms/resume";
import { generateWordPressMetadata, WordPressPage } from "@/ui/wp/page";

interface ParamsSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;

export const revalidate = 120;

export async function generateStaticParams() {
  return (await QueryChildPaths("Consultants")).pages.edges.map(page => ({
    slug: page.node.slug
  }));
}

export async function generateMetadata({
  params
}: ParamsSlugProps): Promise<Metadata> {
  const { slug } = await params;
  return generateWordPressMetadata(`/consultants/${slug}`);
}

export default async function ConsultantsSubPage({ params }: ParamsSlugProps) {
  const slug = (await params).slug;
  if (slug === "submit-a-resume") return <SubmitResume />;
  return <WordPressPage path={`/consultants/${slug}`} />;
}
