import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import type { PageByIdWithChildrenProps } from "@/types/wp";
import { parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */
export const PageByIdWithChildrenQuery = gql`
  fragment MediaDetailsFragment on MediaDetails {
    __typename
    width
    height
  }

  fragment MediaItemFragment on MediaItem {
    __typename
    altText
    uri
    title
    sourceUrl
    databaseId
    description
    id
    slug
  }

  fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {
    __typename
    cursor
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

  query GetPageByIdWithChildren($id: ID!) {
    page(id: $id) {
      ...PageFragment
      featuredImage {
        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
        node {
          ...MediaItemFragment
          mediaDetails {
            ...MediaDetailsFragment
          }
        }
      }
      children {
        edges {
          cursor
          node {
            ... on Page {
              uri
              title
              featuredImage {
                ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
                node {
                  ...MediaItemFragment
                  mediaDetails {
                    ...MediaDetailsFragment
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function QueryPageByIdWithChildren<
  const T extends keyof typeof parentPagesById
>(target: T) {
  return await fetchWpAPI<PageByIdWithChildrenProps>(
    print(PageByIdWithChildrenQuery),
    { id: parentPagesById[target] }
  ).then(data => data!);
}
