import type { Metadata } from "next";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";
import { ContactForm } from "@/ui/sections/ContactForm";

export const metadata = {
  title: "Contact Us"
} satisfies Metadata;

export default function ContactUsPage() {
  return (
    <>
      <div className='relative'>
        <ParticleHeaderComponent
          title='Contact Us'
          content=''
          target='CONTACT'
        />
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <div className='relative'>
        <ContactForm />
      </div>
    </>
  );
}
