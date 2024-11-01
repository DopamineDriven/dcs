import { notFound } from "next/navigation";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import {Cards} from "@/ui/about/Cards";

export default async function ConsultantsPage() {
  const [data] = await Promise.all([QueryPageByIdWithChildren("Consultants")]);
  if (!data.page) return notFound();
  return (
    <>
      <Cards target="Consultants" edges={data.page.children.edges} />
    </>
  );
}
