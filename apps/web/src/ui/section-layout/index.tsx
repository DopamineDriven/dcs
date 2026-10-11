import type { ReactNode } from "react";

export function SectionLayout({
  children,
  sidebar
}: {
  children: ReactNode;
  sidebar?: ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      {sidebar}
      <main id="main-content" className="@container/page min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}
