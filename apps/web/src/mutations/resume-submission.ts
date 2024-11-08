import { print } from "graphql";
import type {
  ExecuteResumeFormSubmissionMutationProps,
  SubmissionPayloadProps
} from "@/types/wp";
import { DateCreatedHelper } from "@/utils/date-created";
import { EncodeClientMutationId } from "@/utils/encode-client-mutation-id";
import { fetchWpAPI } from "@/utils/fetch-wordpress";
import { SubmissionWorkup } from "./submission-workup";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export async function ExecuteResumeSubmissionMutation<
  const T extends ExecuteResumeFormSubmissionMutationProps
>({ body, email, firstName, lastName, phone, ip, userAgent, file }: T) {
  return await fetchWpAPI<SubmissionPayloadProps>(print(SubmissionWorkup), {
    input: {
      clientMutationId: EncodeClientMutationId(firstName, lastName),
      id: 3,
      entryMeta: {
        createdById: 3,
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
          value: "Resume Submission"
        },
        {
          id: 7,
          value: body
        },
        { id: 11, value: file }
      ]
    }
  }).then(data => data!);
}
