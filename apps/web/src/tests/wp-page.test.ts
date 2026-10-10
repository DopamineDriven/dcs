import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { findSitePage } from "@/lib/site-content";
import { mergeSiteContent, parseWpContent } from "@/lib/wp-page";

// Verbatim from the live API for /about-us/our-organization (October 2026).
const sample =
  "<h3>We provide expert professional services for all areas of Human Capital and Workforce Management IT system implementation and support.</h3>\n" +
  "<p>Since 1995, we have provided quality services and custom application development solutions to our customers. As hard as it is to accomplish in this day and age, we have realized a 100% on time, on budget project completion record on all of our client projects. We successfully manage projects, implement systems, and solve business problems—just ask any of our clients!</p>\n" +
  "<p>&nbsp;</p>\n" +
  "<!--[if lt IE 9]><script>document.createElement('audio');</script><![endif]-->\n" +
  '<audio class="wp-audio-shortcode" id="audio-46-1" preload="none" style="width: 100%;" controls="controls"><source type="audio/mpeg" src="https://www.dcs-headless.com/wp-content/uploads/2024/10/easytts_audio_Our-Organization1-1.mp3?_=1" /><a href="https://www.dcs-headless.com/wp-content/uploads/2024/10/easytts_audio_Our-Organization1-1.mp3">https://www.dcs-headless.com/wp-content/uploads/2024/10/easytts_audio_Our-Organization1-1.mp3</a></audio>\n';

const wpPage = {
  slug: "our-organization",
  title: "Our Organization",
  content: sample,
  uri: "/about-us/our-organization/",
  featuredImage: {
    node: {
      altText: "our organization alt",
      sourceUrl:
        "https://www.dcs-headless.com/wp-content/uploads/2024/10/our-organization.webp",
      mediaDetails: { width: 1280, height: 853 }
    }
  }
};

describe("parseWpContent", () => {
  it("lifts the opening h3 out as the lead", () => {
    const parsed = parseWpContent(sample);
    assert.equal(
      parsed.lead,
      "We provide expert professional services for all areas of Human Capital and Workforce Management IT system implementation and support."
    );
    assert.ok(!parsed.html.includes("<h3>"));
  });

  it("extracts the narration track from the audio shortcode without the cache-buster", () => {
    const parsed = parseWpContent(sample);
    assert.equal(
      parsed.narration,
      "https://www.dcs-headless.com/wp-content/uploads/2024/10/easytts_audio_Our-Organization1-1.mp3"
    );
  });

  it("keeps the body paragraphs and drops the audio, IE comment, and empty paragraphs", () => {
    const { html } = parseWpContent(sample);
    assert.ok(html.includes("<p>Since 1995, we have provided"));
    assert.ok(!html.includes("<audio"));
    assert.ok(!html.includes("<!--[if"));
    assert.ok(!html.includes("&nbsp;"));
    assert.equal(html.trim(), html);
  });

  it("passes plain content through untouched", () => {
    const parsed = parseWpContent("<p>Hello</p>\n<p>World</p>");
    assert.equal(parsed.lead, undefined);
    assert.equal(parsed.narration, undefined);
    assert.equal(parsed.html, "<p>Hello</p>\n<p>World</p>");
  });
});

describe("mergeSiteContent", () => {
  it("keeps the designed headline and description but takes live fields from WordPress", () => {
    const curated = findSitePage("/about-us/our-organization");
    assert.ok(curated);
    const merged = mergeSiteContent(curated, wpPage);
    assert.equal(merged.path, "/about-us/our-organization");
    assert.equal(merged.title, "Independent by design. Personal by nature.");
    assert.equal(merged.description, curated.description);
    assert.equal(merged.eyebrow, "Our Organization");
    assert.equal(
      merged.lead,
      "We provide expert professional services for all areas of Human Capital and Workforce Management IT system implementation and support."
    );
    assert.equal(
      merged.narration,
      "https://www.dcs-headless.com/wp-content/uploads/2024/10/easytts_audio_Our-Organization1-1.mp3"
    );
    assert.deepEqual(merged.image, {
      src: "https://www.dcs-headless.com/wp-content/uploads/2024/10/our-organization.webp",
      alt: "our organization alt",
      width: 1280,
      height: 853
    });
    assert.ok(merged.html.includes("<p>Since 1995"));
  });

  it("builds a complete frame from WordPress alone when there is no curated entry", () => {
    const merged = mergeSiteContent(undefined, {
      ...wpPage,
      slug: "brand-new",
      title: "Brand New Page",
      uri: "/about-us/brand-new/"
    });
    assert.equal(merged.path, "/about-us/brand-new");
    assert.equal(merged.title, "Brand New Page");
    assert.equal(merged.eyebrow, "Brand New Page");
    assert.equal(merged.description, "");
    assert.deepEqual(merged.sections, []);
    assert.equal(merged.presentation, undefined);
  });

  it("keeps a curated presentation so the special layouts still render", () => {
    const curated = findSitePage("/about-us/our-expertise");
    const merged = mergeSiteContent(curated, {
      ...wpPage,
      title: "Our Expertise",
      uri: "/about-us/our-expertise/",
      featuredImage: null
    });
    assert.equal(merged.presentation, "expertise");
    assert.equal(merged.image, curated?.image);
  });

  it("falls back to curated image and narration when WordPress has none", () => {
    const curated = findSitePage("/about-us/our-mission");
    const merged = mergeSiteContent(curated, {
      slug: "our-mission",
      title: "Our Mission",
      content: "<p>Just a paragraph.</p>",
      uri: "/about-us/our-mission/",
      featuredImage: null
    });
    assert.equal(merged.image?.src, "/images/about-mission.webp");
    assert.equal(merged.narration, "/audio/about-mission.mp3");
    assert.equal(merged.lead, curated?.lead);
  });
});
