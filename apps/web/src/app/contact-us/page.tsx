import type { Metadata } from "next";
import { ParticleHeaderComponent } from "@/ui/particles/ParticleHeader";
import { ContactForm } from "@/ui/sections/ContactForm";

export const metadata = {
  title: "Contact Us"
} satisfies Metadata;

export default function ContactUsPage() {
  return (
    <>
      <div className='isolate relative flow-root'>
        <ParticleHeaderComponent
          title='Contact Us'
          content=''
          target='CONTACT'
        />
      </div>
      <ContactForm />
    </>
  );
}
