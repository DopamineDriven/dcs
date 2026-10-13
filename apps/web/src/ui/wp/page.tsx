import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getWordPressPage } from "@/lib/wordpress-pages";
import { DetailPage } from "@/ui/detail/index";
import { WordPressChildPages, WordPressContent } from "@/ui/wp/content";

export async function generateWordPressMetadata(path: string) {
  const page = await getWordPressPage(path);
  return (page?.metadata ?? { title: page?.presentation.title }) satisfies Metadata;
}

export async function WordPressPage({
  path,
  children
}: {
  path: string;
  children?: ReactNode;
}) {
  const page = await getWordPressPage(path);
  if (!page) notFound();

  return (
    <DetailPage page={page.presentation}>
      <WordPressContent
        html={page.html}
        presentation={page.presentation.presentation}
        path={path}
      />
      {children}
      {page.isParent && <WordPressChildPages links={page.links} path={path} />}
    </DetailPage>
  );
}
