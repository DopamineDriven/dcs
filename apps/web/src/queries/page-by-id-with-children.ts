import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import type { PageByIdWithChildrenProps } from "@/types/wp";
import { MediaDetailsFragment } from "@/fragments/MediaDetails";
import { MediaItemFragment } from "@/fragments/MediaItems";
import { NodeWithFeaturedImageToMediaItemConnectionEdgeFragment } from "@/fragments/NodeWithFeaturedImageToMediaItemConnectionEdgeFragment";
import { PageFragment } from "@/fragments/Page";
import { parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */
export const PageByIdWithChildrenQuery = gql`
  ${MediaItemFragment}
  ${MediaDetailsFragment}
  ${PageFragment}
  ${NodeWithFeaturedImageToMediaItemConnectionEdgeFragment}
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
