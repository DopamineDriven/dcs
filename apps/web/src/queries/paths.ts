import gql from "graphql-tag";

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
