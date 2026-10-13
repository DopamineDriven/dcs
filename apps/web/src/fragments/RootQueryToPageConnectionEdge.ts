import { gql } from "graphql-tag";

export const RootQueryToPageConnectionEdgeFragment = gql`
  fragment RootQueryToPageConnectionEdgeFragment on RootQueryToPageConnectionEdge {
    __typename
    cursor
  }
`;
