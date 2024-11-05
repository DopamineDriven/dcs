import { print } from "graphql";
import gql from "graphql-tag";
import type {
  ContactFormSubmissionPayloadProps,
  ExecuteContactFormSubmissionMutationProps
} from "@/types/wp";
import { FieldErrorFieldsFragment } from "@/fragments/FieldErrorFields";
import { FormFieldFieldsFragment } from "@/fragments/FormFieldFields";
import { GfEntryFieldsFragment } from "@/fragments/GfEntryFieldsFragment";
import { GfEntryToFormFieldConnectionEdgeFieldsFragment } from "@/fragments/GfEntryToFormFieldConnectionEdgeFields";
import { GfFormFieldsFragment } from "@/fragments/GfFormFields";
import { SubmissionConfirmationFieldsFragment } from "@/fragments/SubmissionConfirmationFields";
import { DateCreatedHelper } from "@/utils/date-created";
import { EncodeClientMutationId } from "@/utils/encode-client-mutation-id";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export const ContactSubmissionMutation = gql`
  ${FieldErrorFieldsFragment}
  ${FormFieldFieldsFragment}
  ${GfEntryFieldsFragment}
  ${GfEntryToFormFieldConnectionEdgeFieldsFragment}
  ${GfFormFieldsFragment}
  ${SubmissionConfirmationFieldsFragment}
  mutation ContactSubmission($input: SubmitGfFormInput!) {
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

export async function ExecuteContactFormSubmissionMutation<
  const T extends ExecuteContactFormSubmissionMutationProps
>({ body, email, firstName, lastName, subject, ip, userAgent }: T) {
  return await fetchWpAPI<ContactFormSubmissionPayloadProps>(
    print(ContactSubmissionMutation),
    {
      input: {
        clientMutationId: EncodeClientMutationId(firstName, lastName),
        id: 1,
        entryMeta: {
          createdById: 1,
          dateCreatedGmt: DateCreatedHelper(Date),
          ip: ip ?? "",
          userAgent: userAgent ?? ""
        },
        fieldValues: [
          {
            id: 1,
            nameValues: {
              first: firstName,
              last: lastName
            }
          },
          {
            id: 3,
            emailValues: {
              value: email
            }
          },
          {
            id: 6,
            value: subject ?? "no subject"
          },
          {
            id: 7,
            value: body
          }
        ]
      }
    }
  ).then(data => data!);
}
