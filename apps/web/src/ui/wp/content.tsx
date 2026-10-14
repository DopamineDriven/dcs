import "server-only";
import type { HTMLReactParserOptions } from "html-react-parser";
import { ArrowUpRight } from "@d0paminedriven/icons";
import Link from "next/link";
import { ElementType } from "domelementtype";
import parse, { domToReact } from "html-react-parser";
import type {
  WordPressPageLink,
  WordPressPagePresentation
} from "@/lib/wordpress-pages";
import { nodeText, wordpressHref } from "@/lib/wordpress-content";
import { ProjectDelivery } from "@/ui/delivery";
import { ExpertiseDirectory } from "@/ui/expertise";

export function WordPressContent({
  html,
  presentation,
  path
}: {
  html: string;
  presentation: WordPressPagePresentation["presentation"];
  path: string;
}) {
  const options = {
    replace(node) {
      if (
        path === "/consultants/skills-and-positions" &&
        node.type === ElementType.Text
      ) {
        const label = "Submit A Resume";
        const index = node.data.indexOf(label);
        if (index < 0) return;

        let ancestor = node.parent;
        while (ancestor) {
          if (ancestor.type === ElementType.Tag && ancestor.name === "a")
            return;
          ancestor = ancestor.parent;
        }

        return (
          <>
            {node.data.slice(0, index)}
            <Link href="/consultants/submit-a-resume" className="font-medium">
              {label}
            </Link>
            {node.data.slice(index + label.length)}
          </>
        );
      }
      if (node.type !== ElementType.Tag) return;
      if (node.name === "ul" && presentation === "expertise") {
        const items = Array.of<string>();
        for (const c of node.children) {
          if (c.type === ElementType.Tag && c.name === "li") {
            items.push(nodeText(c));
          }
        }
        return (
          <div className="wp-custom">
            <ExpertiseDirectory items={items} />
          </div>
        );
      }
      if (node.name === "p" && presentation === "delivery") {
        const image = node.children.find(
          child => child.type === ElementType.Tag && child.name === "img"
        );
        if (
          image?.type === ElementType.Tag &&
          image.attribs.src?.endsWith("/our-project-delivery.png")
        ) {
          return (
            <div className="wp-custom">
              <ProjectDelivery />
              <a
                className="text-primary mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4"
                href={image.attribs.src}
                target="_blank"
                rel="noopener noreferrer">
                View original WordPress diagram
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          );
        }
      }
      if (node.name === "a" && node.attribs.href) {
        const href = wordpressHref(node.attribs.href);
        const children = domToReact(
          node.children.filter(
            child =>
              child.type !== ElementType.CDATA &&
              child.type !== ElementType.Root
          ),
          options
        );
        if (href.startsWith("/") && !href.startsWith("//"))
          return <Link href={href}>{children}</Link>;
        return (
          <a
            href={href}
            target={node.attribs.target}
            rel={
              node.attribs.target === "_blank"
                ? "noopener noreferrer"
                : undefined
            }>
            {children}
          </a>
        );
      }
      if (node.name === "img") {
        return (
          <img
            src={node.attribs.src}
            alt={node.attribs.alt ?? ""}
            width={node.attribs.width}
            height={node.attribs.height}
            loading="lazy"
            decoding="async"
          />
        );
      }
    }
  } satisfies HTMLReactParserOptions;

  return <div className="wp-content">{parse(html, options)}</div>;
}

export function WordPressChildPages({
  links,
  path
}: {
  links: WordPressPageLink[];
  path: string;
}) {
  return (
    <nav aria-label="Explore this section">
      <ul className="smaller:grid-cols-2 grid grid-cols-1 gap-4">
        {links
          .filter(link => link.href !== path)
          .map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group text-primary hover:bg-muted flex h-full min-h-22 items-center justify-between gap-4 rounded-md border px-5 py-4 font-medium transition-colors">
                {link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
