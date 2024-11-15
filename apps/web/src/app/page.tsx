import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { QueryPageByUri } from "@/queries/page-by-uri";
import { LoadingDots } from "@/ui/loading/Dots";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";

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
      <Suspense fallback={<LoadingDots />}>
        <ParticleHeaderComponent
          title={data.page.title}
          target='HOME'
          content={data.page.content}
        />
      </Suspense>
      <div className='absolute inset-0 overflow-hidden' />
    </div>
  );
}
