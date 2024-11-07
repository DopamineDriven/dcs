/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}":
    types.MediaDetailsFragmentFragmentDoc,
  "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  description\n  id\n  slug\n}":
    types.MediaItemFragmentFragmentDoc,
  "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}":
    types.NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc,
  "fragment PageFragment on Page {\n  id\n  databaseId\n  slug\n  title\n  content\n  uri\n  date\n  dateGmt\n  status\n  isPreview\n}":
    types.PageFragmentFragmentDoc,
  'query AboutUsPaths {\n  pages(where: {parent: "cG9zdDoxNg=="}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}':
    types.AboutUsPathsDocument,
  'query ConsultantPaths {\n  pages(where: {parent: "cG9zdDo4Nw=="}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}':
    types.ConsultantPathsDocument,
  "query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}":
    types.GetChildPagesDocument,
  "query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}":
    types.GetPageByIdDocument,
  "query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    content\n    uri\n    slug\n    title\n    isPreview\n    databaseId\n    id\n    featuredImage {\n      node {\n        sourceUrl\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n    children {\n      edges {\n        cursor\n        node {\n          ... on Page {\n            uri\n            title\n            featuredImage {\n              node {\n                sourceUrl\n                mediaDetails {\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}":
    types.GetPageByIdWithChildrenDocument,
  "query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}":
    types.GetPagesDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}"
): (typeof documents)["fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  description\n  id\n  slug\n}"
): (typeof documents)["fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  description\n  id\n  slug\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}"
): (typeof documents)["fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment PageFragment on Page {\n  id\n  databaseId\n  slug\n  title\n  content\n  uri\n  date\n  dateGmt\n  status\n  isPreview\n}"
): (typeof documents)["fragment PageFragment on Page {\n  id\n  databaseId\n  slug\n  title\n  content\n  uri\n  date\n  dateGmt\n  status\n  isPreview\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query AboutUsPaths {\n  pages(where: {parent: "cG9zdDoxNg=="}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}'
): (typeof documents)['query AboutUsPaths {\n  pages(where: {parent: "cG9zdDoxNg=="}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ConsultantPaths {\n  pages(where: {parent: "cG9zdDo4Nw=="}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}'
): (typeof documents)['query ConsultantPaths {\n  pages(where: {parent: "cG9zdDo4Nw=="}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"
): (typeof documents)["query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"
): (typeof documents)["query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    content\n    uri\n    slug\n    title\n    isPreview\n    databaseId\n    id\n    featuredImage {\n      node {\n        sourceUrl\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n    children {\n      edges {\n        cursor\n        node {\n          ... on Page {\n            uri\n            title\n            featuredImage {\n              node {\n                sourceUrl\n                mediaDetails {\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"
): (typeof documents)["query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    content\n    uri\n    slug\n    title\n    isPreview\n    databaseId\n    id\n    featuredImage {\n      node {\n        sourceUrl\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n    children {\n      edges {\n        cursor\n        node {\n          ... on Page {\n            uri\n            title\n            featuredImage {\n              node {\n                sourceUrl\n                mediaDetails {\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"
): (typeof documents)["query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
