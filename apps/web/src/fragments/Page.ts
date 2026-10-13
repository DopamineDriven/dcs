import gql from "graphql-tag";

export const PageFragment = gql`
  fragment PageFragment on Page {
    __typename
    id
    databaseId
    parentId
    slug
    title
    content
    uri
    date
    modified
    modifiedGmt
    dateGmt
    status
    isPreview
  }
`;
