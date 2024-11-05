import gql from "graphql-tag";

export const PageFragment = gql`
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
`;
