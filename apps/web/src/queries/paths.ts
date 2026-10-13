import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import type { ChildPathsProps } from "@/types/wp";
import { RootQueryToPageConnectionEdgeFragment } from "@/fragments/RootQueryToPageConnectionEdge";
import { parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

export const ChildPaths = gql`
  ${RootQueryToPageConnectionEdgeFragment}
  query ChildPaths($parent: ID!) {
    pages(where: { parent: $parent }) {
      edges {
        ...RootQueryToPageConnectionEdgeFragment
        node {
          __typename
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
  const T extends keyof typeof parentPagesById = keyof typeof parentPagesById
>(target: T) {
  return await fetchWpAPI<ChildPathsProps>(print(ChildPaths), {
    parent: parentPagesById[target]
  }).then(data => {
    if (!data) throw new Error(`parent ${target} does not exist`);
    else return data;
  });
}
