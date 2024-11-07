import { print } from "graphql";
import type {
  ExecuteContactFormSubmissionMutationProps,
  SubmissionPayloadProps
} from "@/types/wp";
import { DateCreatedHelper } from "@/utils/date-created";
import { EncodeClientMutationId } from "@/utils/encode-client-mutation-id";
import { fetchWpAPI } from "@/utils/fetch-wordpress";
import { SubmissionWorkup } from "./submission-workup";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export async function ExecuteContactFormSubmissionMutation<
  const T extends ExecuteContactFormSubmissionMutationProps
>({ body, email, firstName, lastName, subject, ip, userAgent }: T) {
  return await fetchWpAPI<SubmissionPayloadProps>(print(SubmissionWorkup), {
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
  }).then(data => data!);
}
