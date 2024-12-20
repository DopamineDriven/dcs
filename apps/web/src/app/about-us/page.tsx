import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { Cards } from "@/ui/dynamic/Cards";
import { Spinner } from "@/ui/loading/Spinner";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";

export const metadata = {
  title: "About Us"
} satisfies Metadata;

export const revalidate = 60;

export default async function AboutUsPage() {
  const [data] = await Promise.all([QueryPageByIdWithChildren("About_Us")]);
  if (!data.page) return notFound();
  return (
    <>
      <div className='relative'>
        <Suspense fallback={<Spinner />}>
          <ParticleHeaderComponent
            title={data.page.title}
            target='ABOUT'
            content={data.page.content}
          />
        </Suspense>
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <Suspense fallback={<Spinner />}>
        <Cards target='About_Us' edges={data.page.children.edges} />
      </Suspense>
    </>
  );
}
