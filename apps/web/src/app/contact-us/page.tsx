import type { Metadata } from "next";
import { Suspense } from "react";
import { LoadingDots } from "@/ui/loading/Dots";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";
import { ContactForm } from "@/ui/sections/ContactForm";

export const metadata = {
  title: "Contact Us"
} satisfies Metadata;

export default function ContactUsPage() {
  return (
    <>
      <div className='relative'>
        <Suspense fallback={<LoadingDots />}>
          <ParticleHeaderComponent
            title='Contact Us'
            content=''
            target='CONTACT'
          />
        </Suspense>
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <ContactForm />
    </>
  );
}
