import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { Cards } from "@/ui/dynamic/Cards";
import { Spinner } from "@/ui/loading/Spinner";

export const metadata = {
  title: "Consultants"
} satisfies Metadata;

export const revalidate = 60;

export default async function ConsultantsPage() {
  const [data] = await Promise.all([QueryPageByIdWithChildren("Consultants")]);
  if (!data.page) return notFound();
  return (
    <>
      <div className='relative'>
        <Suspense fallback={<Spinner />}>
          <ParticleHeaderComponent
            title={data.page.title}
            target='CONSULTANTS'
            content={data.page.content}
          />
        </Suspense>
        {/* <div className='absolute inset-0 overflow-hidden' /> */}
      </div>
      <Suspense fallback={<Spinner />}>
        <Cards target='Consultants' edges={data.page.children.edges} />
      </Suspense>
    </>
  );
}
