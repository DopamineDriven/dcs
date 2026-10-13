import type { Rm } from "@dcs/types";

export type ToastVariant = "error" | "default" | "success" | "info";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastOptions {
  /** Reuse an id to update a toast in place, e.g. "Saving…" then "Saved". */
  id?: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  /** Milliseconds before auto-dismiss. Pass `Infinity` to keep it until dismissed. */
  duration?: number;
  action?: ToastAction;
}

export interface ToastRecord {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  duration: number;
  action?: ToastAction;
  /** Incremented on in-place updates so the auto-dismiss timer restarts. */
  revision: number;
}

export type ToastShorthand = (
  title: string,
  options?: Rm<ToastOptions, "title" | "variant">
) => string;

export interface ToastApi {
  (options: ToastOptions): string;
  success: ToastShorthand;
  error: ToastShorthand;
  info: ToastShorthand;
}
