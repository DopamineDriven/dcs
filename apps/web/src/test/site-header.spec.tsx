import type { Root } from "react-dom/client";
import { act } from "react";
import { MotionGlobalConfig } from "motion/react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  publishRouterTransitionStart,
  resetRouterTransitions
} from "@/navigation/transition-store";
import { SiteHeader } from "@/ui/sections/SiteHeader";

MotionGlobalConfig.skipAnimations = true;
(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let pathname = "/";
vi.mock("next/navigation", () => ({ usePathname: () => pathname }));

// jsdom has no <dialog> methods; mirror the open attribute like a browser would.
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

type MediaListener = (e: { matches: boolean }) => void;
const mediaListeners = new Set<MediaListener>();
let desktop = true;
window.matchMedia = ((query: string) => ({
  media: query,
  get matches() {
    return desktop;
  },
  addEventListener: (_: "change", l: MediaListener) => mediaListeners.add(l),
  removeEventListener: (_: "change", l: MediaListener) =>
    mediaListeners.delete(l),
  onchange: null,
  addListener() {},
  removeListener() {},
  dispatchEvent: () => true
})) as unknown as typeof window.matchMedia;

let container: HTMLDivElement;
let root: Root;

function must<T>(value: T | null | undefined, what: string): T {
  if (value == null) throw new Error(`missing ${what}`);
  return value;
}

function mount(path = "/") {
  pathname = path;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<SiteHeader />));
}

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  resetRouterTransitions();
  desktop = true;
  document.body.style.overflow = "";
});

const trigger = (id: string) =>
  must(
    container.querySelector<HTMLButtonElement>(`#nav-trigger-${id}`),
    `trigger ${id}`
  );
const panel = () => container.querySelector<HTMLElement>("[data-mega-panel]");
const drawer = () =>
  must(container.querySelector<HTMLDialogElement>("dialog"), "dialog");
const click = (el: Element) =>
  act(() => el.dispatchEvent(new MouseEvent("click", { bubbles: true })));
// AnimatePresence unmounts exited children on a later tick, even with animations skipped.
async function flush() {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
}

const key = (el: Element, k: string) =>
  act(() =>
    el.dispatchEvent(new KeyboardEvent("keydown", { key: k, bubbles: true }))
  );

describe("SiteHeader", () => {
  it("marks the active parent from the committed pathname", () => {
    mount("/about-us/our-mission");
    expect(trigger("about").dataset.current).toBe("true");
    expect(trigger("consultants").dataset.current).toBeUndefined();
    expect(
      container.querySelector('nav a[href="/"]')?.getAttribute("aria-current")
    ).toBeNull();
  });

  it("marks Home as the current page on the root path", () => {
    mount("/");
    expect(
      container.querySelector('nav a[href="/"]')?.getAttribute("aria-current")
    ).toBe("page");
  });

  it("opens and closes the About Us panel from its trigger", async () => {
    mount();
    expect(panel()).toBeNull();
    click(trigger("about"));
    expect(trigger("about").getAttribute("aria-expanded")).toBe("true");
    expect(panel()?.textContent).toContain("Our mission");
    click(trigger("about"));
    expect(trigger("about").getAttribute("aria-expanded")).toBe("false");
    await flush();
    expect(panel()).toBeNull();
  });

  it("switches panels when another trigger is clicked", () => {
    mount();
    click(trigger("about"));
    click(trigger("consultants"));
    expect(panel()?.textContent).toContain("Skills and positions");
    expect(panel()?.textContent).not.toContain("Our mission");
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    mount();
    click(trigger("about"));
    key(must(panel(), "panel"), "Escape");
    await flush();
    expect(panel()).toBeNull();
    expect(document.activeElement).toBe(trigger("about"));
  });

  it("closes on a pointerdown outside the header", async () => {
    mount();
    click(trigger("about"));
    act(() =>
      document.body.dispatchEvent(new Event("pointerdown", { bubbles: true }))
    );
    await flush();
    expect(panel()).toBeNull();
  });

  it("closes when focus leaves the header", async () => {
    mount();
    const outside = document.createElement("button");
    document.body.appendChild(outside);
    click(trigger("about"));
    act(() => {
      must(container.querySelector("header"), "header").dispatchEvent(
        new FocusEvent("focusout", { bubbles: true, relatedTarget: outside })
      );
    });
    await flush();
    expect(panel()).toBeNull();
    outside.remove();
  });

  it("closes when a panel link is clicked, even without navigation", async () => {
    mount();
    click(trigger("about"));
    click(
      must(
        must(panel(), "panel").querySelector('a[href="/about-us/our-mission"]'),
        "mission link"
      )
    );
    await flush();
    expect(panel()).toBeNull();
  });

  it("closes on a router transition such as back/forward", async () => {
    mount();
    click(trigger("about"));
    act(() =>
      publishRouterTransitionStart(
        "https://www.drisdell.com/consultants",
        "traverse",
        null
      )
    );
    await flush();
    expect(panel()).toBeNull();
  });

  it("opens the drawer from the menu trigger, locks scroll, and closes from its close button", () => {
    mount();
    const open = must(
      container.querySelector<HTMLButtonElement>(
        'button[aria-label="Open navigation"]'
      ),
      "open button"
    );
    click(open);
    expect(drawer().hasAttribute("open")).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    click(
      must(
        drawer().querySelector('button[aria-label="Close navigation"]'),
        "close button"
      )
    );
    expect(drawer().hasAttribute("open")).toBe(false);
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(open);
  });

  it("closes the drawer when the viewport reaches desktop", () => {
    mount();
    click(
      must(
        container.querySelector('button[aria-label="Open navigation"]'),
        "open button"
      )
    );
    desktop = true;
    act(() => {
      for (const l of mediaListeners) l({ matches: true });
    });
    expect(drawer().hasAttribute("open")).toBe(false);
  });

  it("transitions the drawer's translate, which is what translate-x-* sets in v4", () => {
    mount();
    expect(drawer().className).toMatch(/transition-\[translate,/);
    expect(drawer().className).not.toMatch(/transition-\[transform,/);
  });

  it("keeps a visible focus ring on panel links", () => {
    mount();
    click(trigger("about"));
    const link = must(
      must(panel(), "panel").querySelector('a[href="/about-us/our-mission"]'),
      "mission link"
    );
    expect(link.className).not.toContain("outline-none");
    expect(link.className).toContain("focus-visible:outline-2");
  });

  it("renders the open panel inside the main navigation landmark", () => {
    mount();
    click(trigger("about"));
    const nav = must(
      container.querySelector('nav[aria-label="Main navigation"]'),
      "nav"
    );
    expect(nav.contains(must(panel(), "panel"))).toBe(true);
  });

  it("styles site-authored elements with the dcs palette, never the semantic tokens", () => {
    mount();
    click(trigger("about"));
    // Shared @dcs/ui primitives mark their root with data-slot and may use the
    // semantic tokens; everything the site authors itself must not.
    const semantic =
      /\b(?:[a-z-]+:)*(?:bg|text|border|outline|from|to)-(?:primary|primary-foreground|background|foreground|muted|muted-foreground|border)(?:\/\d+)?\b/;
    const offenders = Array.from(container.querySelectorAll<HTMLElement>("*"))
      .filter(el => !el.closest("[data-slot]"))
      .filter(el => semantic.test(el.className))
      .map(el => `<${el.tagName.toLowerCase()} class="${el.className}">`);
    expect(offenders).toEqual([]);
    expect(container.innerHTML).toContain("bg-dcs-800");
  });
});
