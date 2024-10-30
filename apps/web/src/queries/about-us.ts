import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import type {
  AboutUsChildPageByUriProps,
  AboutUsChildPagesProps,
  AboutUsPathsProps,
  GetAboutUsWithChildrenProps
} from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export const AboutUsPaths = /* GraphQL */ `
  query AboutUsPaths {
    pages(where: { parent: "cG9zdDoxNg==" }) {
      edges {
        node {
          uri
          id
          databaseId
          slug
        }
      }
    }
  }
`;

export async function GetAboutUsPaths() {
  return await fetchWpAPI<AboutUsPathsProps>(AboutUsPaths, {}).then(
    data => data!
  );
}

export const AboutUsWithChildrenQuery = /* GraphQL */ `
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
    page(id: "cG9zdDoxNg==") {
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

export async function GetAboutUsWithChildrenQuery() {
  return await fetchWpAPI<GetAboutUsWithChildrenProps>(
    AboutUsWithChildrenQuery,
    {}
  ).then(data => data!);
}

export const AboutUsChildPages = /* GraphQL */ `
  query AboutUsChildPages {
    pages(where: { parent: "cG9zdDoxNg==" }) {
      edges {
        cursor
        node {
          content
          id
          uri
          title
          isPreview
          databaseId
          featuredImage {
            node {
              altText
              id
              uri
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

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

export async function GetAboutUsChildPages() {
  return await fetchWpAPI<AboutUsChildPagesProps>(AboutUsChildPages, {}).then(
    data => data!
  );
}

export async function GetAboutUsChildPage(uri: string) {
  return await fetchWpAPI<AboutUsChildPageByUriProps>(print(GetPageByUri), {
    uri: uri
  }).then(data => data!);
}
