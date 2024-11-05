import gql from "graphql-tag";

export const MediaItemFragment = gql`
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
`;
