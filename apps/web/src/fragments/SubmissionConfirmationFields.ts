import gql from "graphql-tag";

export const SubmissionConfirmationFieldsFragment = gql`
  fragment SubmissionConfirmationFields on SubmissionConfirmation {
    message
    pageId
    queryString
    type
    url
    __typename
  }
`;
