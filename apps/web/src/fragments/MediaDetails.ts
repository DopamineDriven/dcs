import gql from "graphql-tag";

export const MediaDetailsFragment = gql`
  fragment MediaDetailsFragment on MediaDetails {
    __typename
    width
    height
  }
`;
