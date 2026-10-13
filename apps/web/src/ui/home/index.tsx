import { HomeHero } from '@/ui/hero'
import { DiscoverySection } from '@/ui/discovery'
import { CompanyPromise } from '@/ui/company'
import {ContactSection} from "@/ui/contact/section";
export function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <DiscoverySection />
      <CompanyPromise />
      <ContactSection />
    </main>
  )
}
