import gql from "graphql-tag";

export const FormFieldFieldsFragment = gql`
  fragment FormFieldFields on FormField {
    databaseId
    displayOnly
    inputType
    layoutGridColumnSpan
    layoutSpacerGridColumnSpan
    pageNumber
    type
    visibility
    __typename
  }
`;
