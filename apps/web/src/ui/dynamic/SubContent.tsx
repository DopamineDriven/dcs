"use client";

import { usePathname } from "next/navigation";
import type { PageByUriProps } from "@/types/wp";
import { SubContentSwitch } from "./Switch";

export function SubContent({ page }: PageByUriProps) {
  const pathname = usePathname();
  return (
    <div className='bg-white py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <SubContentSwitch pathname={pathname} page={page} />
      </div>
    </div>
  );
}
