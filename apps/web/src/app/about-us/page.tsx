import { notFound } from "next/navigation";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { Cards } from "@/ui/about/Cards";

export default async function AboutUsPage() {
  const [data] = await Promise.all([QueryPageByIdWithChildren("About_Us")]);
  if (!data.page) return notFound();
  return (
    <>
      <Cards target='About Us' edges={data.page.children.edges} />
    </>
  );
}
