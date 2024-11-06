import { print } from "graphql";
import type {
  ExecuteEventFormSubmissionMutationProps,
  SubmissionPayloadProps
} from "@/types/wp";
import { DateCreatedHelper } from "@/utils/date-created";
import { EncodeClientMutationId } from "@/utils/encode-client-mutation-id";
import { fetchWpAPI } from "@/utils/fetch-wordpress";
import { SubmissionWorkup } from "./submission-workup";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export async function ExecuteEventFormSubmissionMutation<
  const T extends ExecuteEventFormSubmissionMutationProps
>({ body, email, firstName, lastName, phone, ip, userAgent }: T) {
  return await fetchWpAPI<SubmissionPayloadProps>(
    print(SubmissionWorkup),
    {
      input: {
        clientMutationId: EncodeClientMutationId(firstName, lastName),
        id: 2,
        entryMeta: {
          createdById: 2,
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
            id: 8,
            value: phone
          },
          {
            id: 6,
            value: "QR Event Submission"
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
