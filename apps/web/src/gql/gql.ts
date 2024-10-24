/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "fragment AboutFragment on About {\n  content\n  id\n  title\n  modified\n  uri\n  slug\n  databaseId\n  date\n  dateGmt\n  toPing\n  status\n}": types.AboutFragmentFragmentDoc,
    "fragment AboutPollyFragment on About_Polly {\n  audio\n  fieldGroupName\n}": types.AboutPollyFragmentFragmentDoc,
    "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}": types.MediaDetailsFragmentFragmentDoc,
    "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  id\n  srcSet\n  slug\n}": types.MediaItemFragmentFragmentDoc,
    "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n}": types.NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc,
    "fragment AboutFields on About {\n  id\n  uri\n  slug\n}\n\nquery OurCareers($id: ID!, $idType: AboutIdType!) {\n  consultantPost: about(id: $id, idType: $idType) {\n    ...AboutFragment\n    polly {\n      ...AboutPollyFragment\n    }\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}": types.AboutFieldsFragmentDoc,
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
export function graphql(source: "fragment AboutFragment on About {\n  content\n  id\n  title\n  modified\n  uri\n  slug\n  databaseId\n  date\n  dateGmt\n  toPing\n  status\n}"): (typeof documents)["fragment AboutFragment on About {\n  content\n  id\n  title\n  modified\n  uri\n  slug\n  databaseId\n  date\n  dateGmt\n  toPing\n  status\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AboutPollyFragment on About_Polly {\n  audio\n  fieldGroupName\n}"): (typeof documents)["fragment AboutPollyFragment on About_Polly {\n  audio\n  fieldGroupName\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}"): (typeof documents)["fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  id\n  srcSet\n  slug\n}"): (typeof documents)["fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  id\n  srcSet\n  slug\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n}"): (typeof documents)["fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AboutFields on About {\n  id\n  uri\n  slug\n}\n\nquery OurCareers($id: ID!, $idType: AboutIdType!) {\n  consultantPost: about(id: $id, idType: $idType) {\n    ...AboutFragment\n    polly {\n      ...AboutPollyFragment\n    }\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"): (typeof documents)["fragment AboutFields on About {\n  id\n  uri\n  slug\n}\n\nquery OurCareers($id: ID!, $idType: AboutIdType!) {\n  consultantPost: about(id: $id, idType: $idType) {\n    ...AboutFragment\n    polly {\n      ...AboutPollyFragment\n    }\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;