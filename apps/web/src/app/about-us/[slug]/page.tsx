import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GetAboutUsChildPage, GetAboutUsPaths } from "@/queries/about-us";
import { InferGSPRT } from "@/types/next";
import SubContent from "@/ui/about/SubContent";
import { formatHelper } from "@/utils/format-helper";

export async function generateStaticParams() {
  return (await GetAboutUsPaths()).pages.edges.map(page => {
    return {
      slug: page.node.slug
    };
  });
}

// export async function generateMetadata({
//   params
// }: InferGSPRT<typeof generateStaticParams>) {
//   return {
//     title: formatHelper(params.slug)
//   } satisfies Metadata;
// }

export default async function AboutUsSubPages({ params }: InferGSPRT<typeof generateStaticParams>) {
  const slug = params.slug;
  const reconstructUri = `/about-us/${slug}/` as const;
  const [data] = await Promise.all([GetAboutUsChildPage(reconstructUri)]);

  if (!data.page) {
    notFound();
  }

  return <SubContent page={data.page} />;
}
