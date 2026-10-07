"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Footer } from "@/ui/sections/Footer";
import { Nav } from "@/ui/sections/Nav";

const ThemeToggle = dynamic(
  () => import("@/ui/theme/index").then(d => d.ThemeToggle),
  { ssr: false }
);

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
