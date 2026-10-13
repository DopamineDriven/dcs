"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useMemo, useState } from "react";

type SectionSidebarState = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
};

const SectionSidebarContext = createContext<SectionSidebarState | undefined>(
  undefined
);

export function SectionSidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const value = useMemo(
    () => ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }),
    [collapsed, mobileOpen]
  );

  return (
    <SectionSidebarContext value={value}>{children}</SectionSidebarContext>
  );
}

export function useSectionSidebar() {
  const context = useContext(SectionSidebarContext);
  if (context === undefined)
    throw new Error(
      "useSectionSidebar must be used within SectionSidebarProvider"
    );
  return context;
}
