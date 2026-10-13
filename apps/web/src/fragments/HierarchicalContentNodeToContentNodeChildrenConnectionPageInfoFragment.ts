import { gql } from "graphql-tag";

export const HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment = gql`
  fragment HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment on HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo {
    __typename
    endCursor
    startCursor
    hasNextPage
    hasPreviousPage
  }
`;
