import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getWordPressPage } from "@/lib/wordpress-pages";
import { SectionSidebar } from "@/ui/sidebar/index";

export async function SectionLayout({
  children,
  section
}: {
  children: ReactNode;
  section: "about-us" | "consultants";
}) {
  const parent = await getWordPressPage(`/${section}`);
  if (!parent) notFound();

  return (
    <div className="flex flex-col md:flex-row">
      <SectionSidebar section={section} links={parent.links} />
      <main id="main-content" className="@container/page min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}
