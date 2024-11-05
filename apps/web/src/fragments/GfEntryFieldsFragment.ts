import gql from "graphql-tag";

export const GfEntryFieldsFragment = gql`
  fragment GfEntryFields on GfEntry {
    dateCreated
    userAgent
    __typename
    ip
    formId
    isSubmitted
    sourceUrl
    id
    createdById
    createdByDatabaseId
    dateCreatedGmt
  }
`;
