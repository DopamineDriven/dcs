"use client";

import { usePathname } from "next/navigation";

export function PreviewNotice() {
  const pathname = usePathname();
  return (
    <aside
      className={`font-basis-grotesque-pro-medium a:ml-[0.625rem] a:appearance-none fixed top-0 right-0 left-0 mx-auto my-0 flex w-[17.5rem] max-w-full justify-between rounded-br-[0.3125rem] rounded-bl-[0.3125rem] bg-black px-[0.9375rem] py-[0.3125rem] text-center whitespace-nowrap text-white`}>
      {"Preview mode enabled"}
      <a href={`/api/exit-preview?path=${encodeURIComponent(pathname)}`}>
        {"Exit"}
      </a>
    </aside>
  );
}
