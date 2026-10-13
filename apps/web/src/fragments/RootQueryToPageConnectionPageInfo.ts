import { gql } from "graphql-tag";

export const RootQueryToPageConnectionPageInfoFragment = gql`
  fragment RootQueryToPageConnectionPageInfoFragment on RootQueryToPageConnectionPageInfo {
    __typename
    endCursor
    startCursor
    hasNextPage
    hasPreviousPage
  }
`;
