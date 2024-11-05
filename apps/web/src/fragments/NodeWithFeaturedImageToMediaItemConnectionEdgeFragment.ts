import gql from "graphql-tag";

export const NodeWithFeaturedImageToMediaItemConnectionEdgeFragment = gql`
  fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {
    __typename
    cursor
  }
`;
