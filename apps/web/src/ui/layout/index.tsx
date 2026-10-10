"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/ui/footer";
import { SiteHeader } from "@/ui/nav";

export function LayoutScaffold({ children }: { children: ReactNode }) {
  return (
    <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
