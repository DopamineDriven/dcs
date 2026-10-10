import type { Root } from "react-dom/client";
import { act, useEffect } from "react";
import { MotionGlobalConfig } from "motion/react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import type { ToastContextValue } from "@/toast/context";
import { ToastProvider, useToast } from "@/toast/context";

MotionGlobalConfig.skipAnimations = true;
(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let api: ToastContextValue;
let container: HTMLDivElement;
let root: Root;

function Capture({ onReady }: { onReady: (value: ToastContextValue) => void }) {
  const value = useToast();
  useEffect(() => {
    onReady(value);
  }, [onReady, value]);
  return null;
}

function mount(maxVisible?: number) {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(
      <ToastProvider maxVisible={maxVisible}>
        <Capture
          onReady={value => {
            api = value;
          }}
        />
      </ToastProvider>
    );
  });
}

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

const items = () => Array.from(container.querySelectorAll("li"));
const titles = () => items().map(li => li.querySelector("p")?.textContent);

async function flush() {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
}

describe("ToastProvider", () => {
  it("renders a toast with its title and description", () => {
    mount();
    act(() => {
      api.toast({ title: "Saved", description: "All changes stored" });
    });
    expect(titles()).toEqual(["Saved"]);
    expect(container.textContent).toContain("All changes stored");
  });

  it("updates a toast in place when its id is reused", () => {
    mount();
    act(() => {
      api.toast({ id: "save", title: "Saving…" });
    });
    act(() => {
      api.toast({ id: "save", title: "Saved" });
    });
    expect(titles()).toEqual(["Saved"]);
  });

  it("shows at most maxVisible toasts and queues the rest", () => {
    mount(2);
    act(() => {
      api.toast({ title: "one" });
      api.toast({ title: "two" });
      api.toast({ title: "three" });
    });
    expect(titles()).toEqual(["one", "two"]);
  });

  it("promotes a queued toast once a visible one is dismissed", async () => {
    mount(2);
    let first = "";
    act(() => {
      first = api.toast({ title: "one" });
      api.toast({ title: "two" });
      api.toast({ title: "three" });
    });
    act(() => {
      api.dismiss(first);
    });
    await flush();
    expect(titles()).toEqual(["two", "three"]);
  });

  it("announces error toasts assertively and everything else politely", () => {
    mount();
    act(() => {
      api.toast.error("Failed");
      api.toast.success("Done");
    });
    const [error, success] = items();
    expect(error?.getAttribute("role")).toBe("alert");
    expect(error?.getAttribute("aria-live")).toBe("assertive");
    expect(success?.getAttribute("role")).toBe("status");
    expect(success?.getAttribute("aria-live")).toBe("polite");
  });

  it("clears every toast with dismissAll", async () => {
    mount();
    act(() => {
      api.toast({ title: "one" });
      api.toast({ title: "two" });
    });
    act(() => {
      api.dismissAll();
    });
    await flush();
    expect(items()).toHaveLength(0);
  });
});
