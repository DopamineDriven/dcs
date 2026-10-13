import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  detailCrumbs,
  detailParent,
  existingFormPaths,
  findSitePage,
  isWidePresentation,
  siblingLinks,
  sitePages
} from "@/lib/site-content";

describe("sitePages", () => {
  it("has unique paths under the two parents", () => {
    const paths = sitePages.map(page => page.path);
    assert.equal(new Set(paths).size, paths.length);
    for (const path of paths) {
      assert.ok(
        path === "/about-us" ||
          path === "/consultants" ||
          path.startsWith("/about-us/") ||
          path.startsWith("/consultants/"),
        path
      );
    }
  });

  it("gives every page a title, eyebrow, and description", () => {
    for (const page of sitePages) {
      assert.ok(page.title.trim().length > 0, page.path);
      assert.ok(page.eyebrow.trim().length > 0, page.path);
      assert.ok(page.description.trim().length > 0, page.path);
    }
  });

  it("keeps every narration as a local track under /audio", () => {
    for (const page of sitePages) {
      if ("narration" in page) {
        assert.match(page.narration, /^\/audio\/[a-z-]+\.mp3$/, page.path);
      }
    }
  });

  it("keeps the two form routes out of the static content", () => {
    assert.deepEqual(
      [...existingFormPaths],
      ["/contact-us", "/consultants/submit-a-resume"]
    );
    for (const path of existingFormPaths) {
      assert.equal(findSitePage(path), undefined);
    }
  });
});

describe("findSitePage", () => {
  it("finds a page by path and ignores trailing slashes", () => {
    assert.equal(findSitePage("/about-us/our-mission")?.eyebrow, "Our mission");
    assert.equal(
      findSitePage("/about-us/our-mission/")?.eyebrow,
      "Our mission"
    );
    assert.equal(findSitePage("/nope"), undefined);
  });
});

describe("detailParent", () => {
  it("maps consultant routes to Consultants and everything else to About us", () => {
    assert.equal(
      detailParent("/consultants/skills-and-positions").id,
      "consultants"
    );
    assert.equal(detailParent("/consultants").label, "Consultants");
    assert.equal(detailParent("/about-us/our-world").id, "about");
    assert.equal(detailParent("/about-us").sidebarLabel, "About DCS");
  });
});

describe("detailCrumbs", () => {
  it("ends on the parent label for a parent page", () => {
    const page = findSitePage("/about-us");
    assert.ok(page);
    assert.deepEqual(detailCrumbs(page), [
      { label: "Home", href: "/" },
      { label: "About us" }
    ]);
  });

  it("links the parent and ends on the eyebrow for a child page", () => {
    const page = findSitePage("/consultants/skills-and-positions");
    assert.ok(page);
    assert.deepEqual(detailCrumbs(page), [
      { label: "Home", href: "/" },
      { label: "Consultants", href: "/consultants" },
      { label: "Skills and positions" }
    ]);
  });
});

describe("siblingLinks", () => {
  it("lists the parent link then every child of that section", () => {
    const about = siblingLinks("/about-us/our-mission");
    assert.deepEqual(about[0], { label: "About DCS", href: "/about-us" });
    assert.equal(about.length, 10);
    const consultants = siblingLinks("/consultants");
    assert.deepEqual(consultants[0], {
      label: "Consulting with DCS",
      href: "/consultants"
    });
    assert.equal(consultants.length, 5);
  });
});

describe("isWidePresentation", () => {
  it("is true only for the delivery and expertise layouts", () => {
    assert.equal(
      isWidePresentation(findSitePage("/about-us/our-expertise")),
      true
    );
    assert.equal(
      isWidePresentation(findSitePage("/about-us/our-project-delivery")),
      true
    );
    assert.equal(
      isWidePresentation(findSitePage("/about-us/our-mission")),
      false
    );
    assert.equal(isWidePresentation(undefined), false);
  });
});
