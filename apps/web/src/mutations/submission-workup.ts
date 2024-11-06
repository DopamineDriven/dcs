import gql from "graphql-tag";
import { FieldErrorFieldsFragment } from "@/fragments/FieldErrorFields";
import { FormFieldFieldsFragment } from "@/fragments/FormFieldFields";
import { GfEntryFieldsFragment } from "@/fragments/GfEntryFieldsFragment";
import { GfEntryToFormFieldConnectionEdgeFieldsFragment } from "@/fragments/GfEntryToFormFieldConnectionEdgeFields";
import { GfFormFieldsFragment } from "@/fragments/GfFormFields";
import { SubmissionConfirmationFieldsFragment } from "@/fragments/SubmissionConfirmationFields";

export const SubmissionWorkup = gql`
  ${FieldErrorFieldsFragment}
  ${FormFieldFieldsFragment}
  ${GfEntryFieldsFragment}
  ${GfEntryToFormFieldConnectionEdgeFieldsFragment}
  ${GfFormFieldsFragment}
  ${SubmissionConfirmationFieldsFragment}
  mutation Submission($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      clientMutationId
      confirmation {
        ...SubmissionConfirmationFields
      }
      errors {
        ...FieldErrorFields
      }
      __typename
      entry {
        ...GfEntryFields
        form {
          ...GfFormFields
        }
        formFields {
          __typename
          edges {
            ...GfEntryToFormFieldConnectionEdgeFields
            node {
              ...FormFieldFields
            }
          }
        }
      }
    }
  }
`;
