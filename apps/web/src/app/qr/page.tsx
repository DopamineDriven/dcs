import type { Metadata } from "next";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";
import { EventForm } from "@/ui/sections/EventForm";
import { SubEventForm } from "@/ui/sections/SubEventForm";

export const metadata = {
  title: "Welcome to Drisdell Consulting Services"
} satisfies Metadata;

export default function QrPage() {
  return (
    <>
      <div className='isolate relative flow-root'>
        <ParticleHeaderComponent
          title='Event Form Placeholder'
          content=''
          target='QR'
        />
      </div>
      <EventForm />
      <SubEventForm />
    </>
  );
}
