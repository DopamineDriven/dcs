import type { ReactNode } from "react";
import { SectionLayout } from "@/ui/section-layout/index";

export default function ConsultantsLayout({
  children
}: {
  children: ReactNode;
}) {
  return <SectionLayout section="consultants">{children}</SectionLayout>;
}
