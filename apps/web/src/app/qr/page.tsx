import type { Metadata } from "next";
import { Suspense } from "react";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { Spinner } from "@/ui/loading/Spinner";
import { MetaHandler } from "@/ui/meta/Swr";
import { EventForm } from "@/ui/sections/EventForm";

export const metadata = {
  title: "Event"
} satisfies Metadata;


export default function QrPage() {
  return (
    <>
      <div className='relative'>
        <ParticleHeaderComponent
          title='Event Form Placeholder'
          content=''
          target='QR'
        />
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <div className='relative'>
        <Suspense fallback={<Spinner />}>
          <EventForm />
        </Suspense>
      </div>
      <div className='relative mx-auto w-screen justify-center'>
        <Suspense>
          <MetaHandler />
        </Suspense>
      </div>
    </>
  );
}
