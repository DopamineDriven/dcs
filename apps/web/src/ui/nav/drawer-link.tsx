"use client";

import type { ComponentPropsWithRef } from "react";
import Link from "next/link";

export function DrawerLink({
  onNavigateAction,
  ...props
}: ComponentPropsWithRef<typeof Link> & { onNavigateAction: () => void }) {
  return (
    <Link
      onClick={onNavigateAction}
      className="hover:text-dcs-800 flex items-center justify-between gap-3 py-2.5 text-[0.9375rem] text-gray-500"
      {...props}
    />
  );
}
