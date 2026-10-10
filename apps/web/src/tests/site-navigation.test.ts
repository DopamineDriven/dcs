import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { activeParent, menuLinks, menus } from "@/lib/site-navigation";

const wordpressChildren = [
  "/about-us/our-careers",
  "/about-us/our-consultants",
  "/about-us/our-customers",
  "/about-us/our-expertise",
  "/about-us/our-mission",
  "/about-us/our-organization",
  "/about-us/our-project-delivery",
  "/about-us/our-satisfied-clients",
  "/about-us/our-world",
  "/consultants/consultant-testimonials",
  "/consultants/skills-and-positions",
  "/consultants/submit-a-resume",
  "/consultants/why-drisdell-consulting-services"
];

describe("menus", () => {
  it("covers every WordPress child route exactly once", () => {
    const hrefs = menus
      .flatMap(menuLinks)
      .map(link => link.href)
      .sort();
    assert.deepEqual(hrefs, [...wordpressChildren].sort());
  });

  it("gives every link a label and a description", () => {
    for (const link of menus.flatMap(menuLinks)) {
      assert.ok(link.label.trim().length > 0, link.href);
      assert.ok(link.description.trim().length > 0, link.href);
    }
  });

  it("orders the parents About Us then Consultants", () => {
    assert.deepEqual(
      menus.map(menu => menu.id),
      ["about", "consultants"]
    );
  });
});

describe("activeParent", () => {
  it("maps the home path", () => {
    assert.equal(activeParent("/"), "home");
  });

  it("maps a parent and its children to the same menu", () => {
    assert.equal(activeParent("/about-us"), "about");
    assert.equal(activeParent("/about-us/our-mission"), "about");
    assert.equal(activeParent("/consultants/submit-a-resume"), "consultants");
  });

  it("maps contact and ignores query strings and trailing slashes", () => {
    assert.equal(activeParent("/contact-us/"), "contact");
    assert.equal(activeParent("/contact-us?x=1"), "contact");
  });

  it("returns undefined for routes outside the nav", () => {
    assert.equal(activeParent("/qr"), undefined);
    assert.equal(activeParent("/about-usual"), undefined);
  });
});
