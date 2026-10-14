"use client";

import { useSyncExternalStore } from "react";

function subscribeToVisibility(onChange: (this: Document, ev: Event) => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

export function useDocumentHidden() {
  return useSyncExternalStore(
    subscribeToVisibility,
    () => document.hidden,
    () => false
  );
}
