"use client";

import { usePathname } from "next/navigation";
import css from "./notice.module.css";

export function PreviewNotice() {
  const pathname = usePathname();
  return (
    <aside className={css.preview}>
      {"Preview mode enabled"}
      <a href={`/api/exit-preview?path=${encodeURIComponent(pathname)}`}>
        {"Exit"}
      </a>
    </aside>
  );
}
