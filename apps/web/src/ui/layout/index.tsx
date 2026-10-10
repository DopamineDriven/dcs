"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/ui/footer";
import { SiteHeader } from "@/ui/nav/test";

export function LayoutScaffold({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
