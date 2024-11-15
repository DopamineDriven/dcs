import type { Metadata } from "next";
import { Suspense } from "react";
import { LoadingDots } from "@/ui/loading/Dots";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";
import { EventForm } from "@/ui/sections/EventForm";
import { SubEventForm } from "@/ui/sections/SubEventForm";

export const metadata = {
  title: "Welcome to Drisdell Consulting Services"
} satisfies Metadata;

export default function QrPage() {
  return (
    <>
      <div className='relative'>
        <Suspense fallback={<LoadingDots />}>
          <ParticleHeaderComponent
            title='Event Form Placeholder'
            content=''
            target='QR'
          />
        </Suspense>
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <EventForm />
      <SubEventForm />
    </>
  );
}
