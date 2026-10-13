"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import type {
  ToastApi,
  ToastOptions,
  ToastRecord,
  ToastShorthand,
  ToastVariant
} from "@/toast/types";
import { ToastViewport } from "@/toast/viewport";

export interface ToastContextValue {
  toast: ToastApi;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

const DEFAULT_DURATION = 5000;

let sequence = 0;

const ToastContext = createContext<ToastContextValue | null>(null);

export interface ToastProviderProps {
  children: ReactNode;
  maxVisible?: number;
}

function createToastContextValue(
  setToasts: Dispatch<SetStateAction<ToastRecord[]>>
) {
  const toast = (options: ToastOptions) => {
    const id = options.id ?? `toast-${++sequence}`;

    setToasts(current => {
      const existing = current.find(toast => toast.id === id);
      const next = {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant ?? "default",
        duration: options.duration ?? DEFAULT_DURATION,
        action: options.action,
        revision: existing ? existing.revision + 1 : 0
      } satisfies ToastRecord;

      return existing
        ? current.map(toast => (toast.id === id ? next : toast))
        : [...current, next];
    });

    return id;
  };

  const shorthand = (variant => (title, options) =>
    toast({ ...options, title, variant } satisfies ToastOptions)) satisfies (
    variant: ToastVariant
  ) => ToastShorthand;

  toast.success = shorthand("success");
  toast.error = shorthand("error");
  toast.info = shorthand("info");

  return {
    toast,
    dismiss: id =>
      setToasts(current => current.filter(toast => toast.id !== id)),
    dismissAll: () => setToasts([])
  } satisfies ToastContextValue;
}

export function ToastProvider({
  children,
  maxVisible = 3
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const value = useMemo(() => createToastContextValue(setToasts), []);

  return (
    <ToastContext value={value}>
      {children}
      <ToastViewport
        toasts={toasts}
        maxVisible={maxVisible}
        onDismiss={value.dismiss}
      />
    </ToastContext>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within <ToastProvider>");
  }
  return context;
}
