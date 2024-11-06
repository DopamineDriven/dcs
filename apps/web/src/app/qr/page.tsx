import type { Metadata } from "next";
import { Suspense } from "react";
import { headers } from "next/headers";
import { ParticleHeaderComponent } from "@/components/particle-header";
import { Spinner } from "@/ui/loading/Spinner";
import { EventForm } from "@/ui/sections/EventForm";

export const metadata = {
  title: "Event"
} satisfies Metadata;

export const dynamic = "auto";
export default async function QrPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const ip = headersList.get("X-Forwarded-For") ?? "";
  return (
    <>
      <div className='relative'>
        <ParticleHeaderComponent title='Event Form Placeholder' content='' target='QR' />
        <div className='absolute inset-0 overflow-hidden' />
      </div>
      <div className='relative'>
        <Suspense fallback={<Spinner />}>
          <EventForm ip={ip} userAgent={userAgent} />
        </Suspense>
      </div>
    </>
  );
}
