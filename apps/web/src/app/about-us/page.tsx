import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { QueryPageByIdWithChildren } from "@/queries/page-by-id-with-children";
import { Cards } from "@/ui/about/Cards";

export const metadata = {
  title: "About Us"
} satisfies Metadata;

export default async function AboutUsPage() {
  const [data] = await Promise.all([QueryPageByIdWithChildren("About_Us")]);
  if (!data.page) return notFound();
  return (
    <>
      <div className='relative'>
        <ParticleHeaderComponent
          title={data.page.title}
          target='ABOUT'
          content={data.page.content}
        />
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <Cards target='About Us' edges={data.page.children.edges} />
    </>
  );
}
