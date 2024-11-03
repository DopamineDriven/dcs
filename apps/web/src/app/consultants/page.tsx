import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { Cards } from "@/ui/about/Cards";

export const metadata = {
  title: "Consultants"
} satisfies Metadata;

export default async function ConsultantsPage() {
  const [data] = await Promise.all([QueryPageByIdWithChildren("Consultants")]);
  if (!data.page) return notFound();
  return (
    <>
      <div className='relative'>
        <ParticleHeaderComponent
          title={data.page.title}
          target='CONSULTANTS'
          content={data.page.content}
        />
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <Cards target='Consultants' edges={data.page.children.edges} />
    </>
  );
}
