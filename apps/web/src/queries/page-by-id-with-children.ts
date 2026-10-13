import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import type { PageByIdWithChildrenProps } from "@/types/wp";
import { HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment } from "@/fragments/HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment";
import { HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment } from "@/fragments/HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment";
import { MediaDetailsFragment } from "@/fragments/MediaDetails";
import { MediaItemFragment } from "@/fragments/MediaItems";
import { MediaSizeFragment } from "@/fragments/MediaSize";
import { NodeWithFeaturedImageToMediaItemConnectionEdgeFragment } from "@/fragments/NodeWithFeaturedImageToMediaItemConnectionEdgeFragment";
import { PageFragment } from "@/fragments/Page";
import { parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

export const PageByIdWithChildrenQuery = gql`
  ${MediaSizeFragment}
  ${MediaItemFragment}
  ${MediaDetailsFragment}
  ${PageFragment}
  ${NodeWithFeaturedImageToMediaItemConnectionEdgeFragment}
  ${HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment}
  ${HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment}
  query GetPageByIdWithChildren($id: ID!) {
    page(id: $id) {
      ...PageFragment
      featuredImage {
        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
        node {
          ...MediaItemFragment
          mediaDetails {
            ...MediaDetailsFragment
            sizes {
              ...MediaSizeFragment
            }
          }
        }
      }
      children {
        pageInfo {
          ...HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment
        }
        edges {
          ...HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment
          node {
            ... on Page {
              ...PageFragment
              featuredImage {
                ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
                node {
                  ...MediaItemFragment
                  mediaDetails {
                    ...MediaDetailsFragment
                    sizes {
                      ...MediaSizeFragment
                    }
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
  ).then(data => {
    if (!data) throw new Error(`no data returned for ${target}`);
    else return data satisfies PageByIdWithChildrenProps;
  });
}
