import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findSitePage } from "@/lib/site-content";
import { mergeSiteContent } from "@/lib/wp-page";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { DetailPage } from "@/ui/detail";
import { WpBody } from "@/ui/detail/wp-body";
import { Cards } from "@/ui/dynamic/Cards";

const path = "/consultants";

export const metadata = {
  title: "Consultants",
  description: findSitePage(path)?.description
} satisfies Metadata;

// Headless WordPress: edits in the CMS reach production without a redeploy.
export const revalidate = 120;

export default async function ConsultantsPage() {
  const data = await QueryPageByIdWithChildren("Consultants");
  if (!data.page) notFound();
  const page = mergeSiteContent(findSitePage(path), data.page);

  return (
    <DetailPage
      page={page}
      after={<Cards target="Consultants" edges={data.page.children.edges} />}>
      <WpBody html={page.html} />
    </DetailPage>
  );
}
