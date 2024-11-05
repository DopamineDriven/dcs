import type { Metadata } from "next";
import { ParticleHeaderComponent } from "@/components/particle-header";

export const metadata = {
  title: "Contact Us"
} satisfies Metadata;

export default function ContactUsPage() {
  return (
    <div className='relative'>
      <ParticleHeaderComponent title='Contact Us' content='' target='CONTACT' />
      <div className='absolute inset-0 overflow-hidden' />
    </div>
  );
}
