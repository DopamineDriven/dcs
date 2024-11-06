import type { Metadata } from "next";
import { Suspense } from "react";
import { headers } from "next/headers";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { Spinner } from "@/ui/loading/Spinner";
import { ContactForm } from "@/ui/sections/ContactForm";

export const metadata = {
  title: "Contact Us"
} satisfies Metadata;

export default async function ContactUsPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const ip = headersList.get("X-Forwarded-For") ?? "";
  const s = Object.fromEntries(headersList.entries());
  console.log(s);
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
        <Suspense fallback={<Spinner />}>
          <ContactForm ip={ip} userAgent={userAgent} />
        </Suspense>
      </div>
    </>
  );
}
