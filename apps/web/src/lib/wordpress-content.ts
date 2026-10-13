import "server-only";
import type { DOMNode, Element, Text } from "html-react-parser";
import { ElementType } from "domelementtype";
import { htmlToDOM } from "html-react-parser";
import sanitizeHtml from "sanitize-html";
import { liveSite } from "@/lib/site-navigation";

const htmlOptions = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "audio", "source"],
  allowedAttributes: {
    a: ["href", "title", "target"],
    img: ["src", "alt", "width", "height"],
    audio: ["src", "controls", "preload"],
    source: ["src", "type"],
    th: ["colspan", "rowspan", "scope"],
    td: ["colspan", "rowspan"]
  },
  allowedSchemes: ["https", "http", "mailto", "tel"],
  allowProtocolRelative: false
} satisfies sanitizeHtml.IOptions;

const textBlockTags = new Set([
  "p",
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "li",
  "br"
]);

export function nodeText(node: Element | Text, separateBlocks = false) {
  const stack = Array.of<string | Element | Text>(node);
  const parts = Array.of<string>();

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === undefined) continue;

    if (typeof current === "string") {
      parts.push(current);
      continue;
    }
    if (current.type === ElementType.Text) {
      parts.push(current.data);
      continue;
    }

    // LIFO: schedule the separator after the children, which are pushed in reverse document order.
    if (separateBlocks && textBlockTags.has(current.name)) stack.push(" ");
    for (let index = current.children.length - 1; index >= 0; index--) {
      const child = current.children[index];
      if (child?.type === ElementType.Tag || child?.type === ElementType.Text)
        stack.push(child);
    }
  }

  return parts.join("");
}

function descendants(node: Element): Element[] {
  return node.children.flatMap(child =>
    child.type === ElementType.Tag ? [child, ...descendants(child)] : []
  );
}

export function documentElements(nodes: DOMNode[]) {
  return nodes.flatMap(node =>
    node.type === ElementType.Tag ? [node, ...descendants(node)] : []
  );
}

export function wordpressText(html: string) {
  return htmlToDOM(sanitizeHtml(html, { allowedAttributes: {} }))
    .map(node =>
      node.type === ElementType.Tag || node.type === ElementType.Text
        ? nodeText(node, true)
        : ""
    )
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

export function readWordPressContent(content: string | null) {
  const sanitized = sanitizeHtml(content ?? "", htmlOptions);
  const audio = documentElements(htmlToDOM(sanitized)).find(
    node => node.name === "audio"
  );
  const narration =
    audio?.attribs.src ??
    (audio &&
      descendants(audio).find(node => node.name === "source")?.attribs.src);
  const html = sanitizeHtml(sanitized, {
    ...htmlOptions,
    nonTextTags: ["script", "style", "textarea", "option", "audio"],
    allowedTags: htmlOptions.allowedTags.filter(
      tag => tag !== "audio" && tag !== "source"
    ),
    exclusiveFilter: frame =>
      frame.tag === "p" && !frame.text.trim() && !frame.mediaChildren?.length
  });
  return { html, narration, text: wordpressText(html) };
}

export function wordpressHref(href: string) {
  if (href.startsWith("#")) return href;
  const url = new URL(href, liveSite);
  const ownHosts = [
    "www.drisdell.com",
    "drisdell.com",
    "www.dcs-headless.com",
    "dcs-headless.com"
  ];
  if (
    !ownHosts.includes(url.hostname) ||
    !["https:", "http:"].includes(url.protocol) ||
    url.pathname.startsWith("/wp-content/")
  )
    return href;
  return `${url.pathname.replace(/\/$/, "") || "/"}${url.search}${url.hash}`;
}
