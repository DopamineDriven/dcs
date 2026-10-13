import type { Root } from "react-dom/client";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import { SiteFooter } from "@/ui/footer";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

describe("SiteFooter", () => {
  it("renders the brand, the five footer links, and the current year", () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => root.render(<SiteFooter />));
    const links = Array.from(
      container.querySelectorAll('nav[aria-label="Footer navigation"] a')
    );
    expect(links.map(a => a.getAttribute("href"))).toEqual([
      "/about-us",
      "/about-us/our-expertise",
      "/about-us/our-consultants",
      "/contact-us",
      "https://www.linkedin.com/company/drisdell-consulting-services-inc-"
    ]);
    const linkedin = links[4];
    expect(linkedin?.getAttribute("target")).toBe("_blank");
    expect(linkedin?.getAttribute("rel")).toContain("noreferrer");
    expect(container.textContent).toContain(String(new Date().getFullYear()));
    expect(
      container.querySelector(
        'a[aria-label="Drisdell Consulting Services home"] svg'
      )
    ).not.toBeNull();
  });
});
