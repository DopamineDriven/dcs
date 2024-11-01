import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { PageByUriProps, parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */
export const GetPageByUri = gql`
  fragment MediaItemFragment on MediaItem {
    __typename
    altText
    uri
    title
    sourceUrl
    databaseId
    id
  }

  fragment MediaDetailsFragment on MediaDetails {
    width
    height
  }

  fragment PageFragment on Page {
    id
    databaseId
    slug
    title
    content
    uri
    date
    dateGmt
    status
    isPreview
  }

  query GetPageById($uri: ID!) {
    page(id: $uri, idType: URI) {
      ...PageFragment
      featuredImage {
        node {
          ...MediaItemFragment
          mediaDetails {
            ...MediaDetailsFragment
          }
        }
      }
    }
  }
`;

export async function QueryChildPageBySlug<
  const T extends keyof typeof parentPagesById,
  const V extends string
>(target: T, slug: V) {
  if (target === "About_Us") {
    return await fetchWpAPI<PageByUriProps>(print(GetPageByUri), {
      uri: `/about-us/${slug}/` as const
    }).then(data => data!);
  } else {
    return await fetchWpAPI<PageByUriProps>(print(GetPageByUri), {
      uri: `/consultants/${slug}/` as const
    }).then(data => data!);
  }
}

export async function QueryPageByUri<const V extends string>(uri: V) {
  return await fetchWpAPI<PageByUriProps>(print(GetPageByUri), {
    uri: uri
  }).then(data => data!);
}
