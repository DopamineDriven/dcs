import type { Metadata } from "next";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { EventForm } from "@/ui/sections/EventForm";
import { SubEventForm } from "@/ui/sections/SubEventForm";

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
        <EventForm />
      </div>
      <SubEventForm />
    </>
  );
}
