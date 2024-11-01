import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import type { ChildPathsProps } from "@/types/wp";
import { parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

/* eslint-disable @typescript-eslint/no-non-null-assertion  */

export const ChildPaths = gql`
  query ChildPaths($parent: ID!) {
    pages(where: { parent: $parent }) {
      edges {
        node {
          uri
          id
          databaseId
          slug
        }
      }
    }
  }
`;

export async function QueryChildPaths<
  const T extends keyof typeof parentPagesById
>(target: T) {
  return await fetchWpAPI<ChildPathsProps>(print(ChildPaths), {
    parent: parentPagesById[target]
  }).then(data => data!);
}
