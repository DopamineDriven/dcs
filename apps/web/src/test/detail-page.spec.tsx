import type { ReactNode } from "react";
import type { Root } from "react-dom/client";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import { findSitePage } from "@/lib/site-content";
import { DetailPage } from "@/ui/detail";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLDivElement;
let root: Root;

function must<T>(value: T | null | undefined, what: string): T {
  if (value == null) throw new Error(`missing ${what}`);
  return value;
}

function render(path: string, children?: ReactNode, _after?: ReactNode) {
  const page = must(findSitePage(path), `site page ${path}`);
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() =>
    root.render(
      <DetailPage page={page}>
        {children}
      </DetailPage>
    )
  );
  return container;
}

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

const crumbCurrent = () =>
  container.querySelector('nav[aria-label="Breadcrumb"] [aria-current="page"]');

describe("DetailPage", () => {
  it("renders breadcrumbs ending on the eyebrow and marks the sidebar entry", () => {
    render("/about-us/our-mission");
    expect(crumbCurrent()?.textContent).toBe("Our mission");
    expect(
      container.querySelector(
        'nav[aria-label="Breadcrumb"] a[href="/about-us"]'
      )
    ).not.toBeNull();
    expect(
      container
        .querySelector('aside a[aria-current="page"]')
        ?.getAttribute("href")
    ).toBe("/about-us/our-mission");
  });

  it("renders the hero image, the lead, and the narration panel when the page has them", () => {
    render("/about-us/our-mission");
    expect(container.querySelector("img")?.getAttribute("alt")).toContain(
      "fjord"
    );
    expect(container.textContent).toContain("Solution Builders who excel");
    const audio = container.querySelector("details audio");
    expect(audio?.getAttribute("src")).toBe("/audio/about-mission.mp3");
  });

  it("omits the image on a parent page, keeps its narration, and ends the crumbs on the parent", () => {
    render("/about-us");
    expect(crumbCurrent()?.textContent).toBe("About us");
    expect(container.querySelector("img")).toBeNull();
    expect(container.querySelector("details audio")?.getAttribute("src")).toBe(
      "/audio/about-us.mp3"
    );
    expect(container.querySelector("h1")?.textContent).toBe(
      "Good people. Lasting partnerships."
    );
  });

  it("renders the delivery diagram for the project delivery page", () => {
    render("/about-us/our-project-delivery");
    expect(container.querySelector("#dev-configuration")).not.toBeNull();
  });

  it("renders the expertise directory for the expertise page", () => {
    render("/about-us/our-expertise");
    expect(container.querySelector("#workforce")).not.toBeNull();
    expect(container.querySelector("#custom-solutions")).not.toBeNull();
  });

  it("renders the testimonial as a quoted figure", () => {
    render("/about-us/our-satisfied-clients");
    expect(container.querySelector("figure blockquote p")).not.toBeNull();
    expect(container.querySelector("figcaption")?.textContent).toContain(
      "Client"
    );
  });

  it("uses the page action for the closing call to action when one is set", () => {
    render("/about-us/our-careers");
    const cta = must(
      container.querySelector(
        'article a[href="/consultants/skills-and-positions"]'
      ),
      "action link"
    );
    expect(cta.textContent).toContain("Explore skills and positions");
  });

  it("keeps the lead above children so a WordPress body still gets its opening line", () => {
    render("/about-us/our-mission", <div data-testid="wp-body">body</div>);
    const article = must(container.querySelector("article"), "article");
    const lead = must(article.querySelector("p"), "lead paragraph");
    expect(lead.textContent).toContain("Solution Builders who excel");
    expect(
      lead.compareDocumentPosition(
        must(article.querySelector('[data-testid="wp-body"]'), "wp body")
      ) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it("renders the after slot between the article and the contact band", () => {
    render(
      "/about-us",
      undefined,
      <section data-testid="cards">cards</section>
    );
    const cards = must(
      container.querySelector('[data-testid="cards"]'),
      "cards"
    );
    const article = must(container.querySelector("article"), "article");
    const contact = must(
      container.querySelector('section[aria-labelledby="contact-heading"]'),
      "contact band"
    );
    expect(
      article.compareDocumentPosition(cards) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(
      cards.compareDocumentPosition(contact) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it("lets children replace the static sections so WordPress bodies can slot in", () => {
    render(
      "/about-us/our-world",
      <div data-testid="wp-body">from WordPress</div>
    );
    expect(container.querySelector('[data-testid="wp-body"]')).not.toBeNull();
    expect(container.textContent).not.toContain("We’ve got you covered");
  });
});
