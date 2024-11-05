import gql from "graphql-tag";

export const FieldErrorFieldsFragment = gql`
  fragment FieldErrorFields on FieldError {
    id
    message
    __typename
  }
`;
