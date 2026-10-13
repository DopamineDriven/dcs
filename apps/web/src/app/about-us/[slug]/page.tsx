import type { Metadata } from "next";
import { QueryChildPaths } from "@/queries/paths";
import { generateWordPressMetadata, WordPressPage } from "@/ui/wp/page";

interface ParamsSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;

export const revalidate = 120;

export async function generateStaticParams() {
  return (await QueryChildPaths("About_Us")).pages.edges.map(page => ({
    slug: page.node.slug
  }));
}

export async function generateMetadata({
  params
}: ParamsSlugProps): Promise<Metadata> {
  const { slug } = await params;
  return generateWordPressMetadata(`/about-us/${slug}`);
}

export default async function AboutUsSubPage({ params }: ParamsSlugProps) {
  const slug = (await params).slug;
  return <WordPressPage path={`/about-us/${slug}`} />;
}
