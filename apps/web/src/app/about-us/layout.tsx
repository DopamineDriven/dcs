import type { ReactNode } from "react";
import { SectionLayout } from "@/ui/section-layout/index";

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return <SectionLayout section="about-us">{children}</SectionLayout>;
}
