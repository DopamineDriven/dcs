import { notFound } from "next/navigation";
import { GetAboutUsWithChildrenQuery } from "@/queries/about-us";
import Cards from "@/ui/about/Cards";

export default async function AboutUsPage() {
  const [data] = await Promise.all([GetAboutUsWithChildrenQuery()]);
  if (!data.page) return notFound();
  // const _pageAudio = data.page.content ?? "";
  // const _subPage = data.page.children?.edges.map(
  //   c => c.node.featuredImage.node.sourceUrl
  // );
  return (
    <>
      <Cards edges={data.page.children.edges} />
    </>
  );
}
