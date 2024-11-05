import gql from "graphql-tag";

export const GfFormFieldsFragment = gql`
  fragment GfFormFields on GfForm {
    cssClass
    databaseId
    dateCreated
    description
    title
    nextFieldId
    __typename
  }
`;
