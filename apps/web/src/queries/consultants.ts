import { fetchWpAPI } from "@/utils/fetch-wordpress";
import { ConsultantPathsQuery, GetPageByIdWithChildrenQuery } from "@/gql/graphql";

export const ConsultantsPaths = /* GraphQL */ `
  query ConsultantsPaths {
    pages(where:{parent:"cG9zdDo4Nw=="}) {
      edges {
        node {
          uri
          databaseId
          id
        }
      }
    }
  }
`;

export async function GetConsultantsPathsQuery() {
  return await fetchWpAPI<ConsultantPathsQuery>(
    ConsultantsPaths,
    {}
  ).then(
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    data => data!
  );
}


export const ConsultantsWithChildrenQuery =  /* GraphQL */ `
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
  ).then(
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    data => data!
  );
}
