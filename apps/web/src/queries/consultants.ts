import { print } from "graphql/language/printer";
import type { ChildPathsProps } from "@/types/wp";
import { GetPageByIdWithChildrenQuery } from "@/gql/graphql";
import { parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";
import { ChildPaths } from "./paths";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export async function GetConsultantsPaths() {
  return await fetchWpAPI<ChildPathsProps>(print(ChildPaths), {
    parent: parentPagesById.Consultants
  }).then(data => data);
}

export const ConsultantsWithChildrenQuery = /* GraphQL */ `
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

  query GetPageByIdWithChildren {
    page(id: "cG9zdDo4Nw==") {
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

export async function GetConsultantsWithChildrenQuery() {
  return await fetchWpAPI<GetPageByIdWithChildrenQuery>(
    ConsultantsWithChildrenQuery,
    {}
  ).then(data => data!);
}
