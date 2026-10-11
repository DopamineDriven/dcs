import type { Metadata } from "next";
import { ContactSection } from "@/ui/cta";
import { DiscoverySection } from "@/ui/discovery";
import { HomeHero } from "@/ui/hero";
import { CompanyPromise } from "@/ui/promise";

export const metadata = {
  title: "Drisdell Consulting Services"
} satisfies Metadata;

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto w-full">
      <HomeHero />
      <DiscoverySection />
      <CompanyPromise />
      <ContactSection />
    </main>
  );
}
