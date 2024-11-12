import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { QueryPageByUri } from "@/queries/page-by-uri";

export const metadata = {
  title: "Drisdell Consulting Services"
} satisfies Metadata;

export default async function HomePage() {
  const [data] = await Promise.all([QueryPageByUri("/")]);
  if (!data) {
    notFound();
  }
  return (
    <div className='relative'>
      <ParticleHeaderComponent
        title={data.page.title}
        target='HOME'
        content={data.page.content}
      />
      <div className='absolute inset-0 overflow-hidden' />
    </div>
  );
}
