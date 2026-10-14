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
type Documents = {
    "fragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}": typeof types.FieldErrorFieldsFragmentDoc,
    "fragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}": typeof types.FormFieldFieldsFragmentDoc,
    "fragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}": typeof types.GfEntryFieldsFragmentDoc,
    "fragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}": typeof types.GfEntryToFormFieldConnectionEdgeFieldsFragmentDoc,
    "fragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}": typeof types.GfFormFieldsFragmentDoc,
    "fragment HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment on HierarchicalContentNodeToContentNodeChildrenConnectionEdge {\n  __typename\n  cursor\n}": typeof types.HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragmentDoc,
    "fragment HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment on HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}": typeof types.HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragmentDoc,
    "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n  filePath\n}": typeof types.MediaDetailsFragmentFragmentDoc,
    "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  fileSize\n  filePath\n  description\n  id\n  slug\n}": typeof types.MediaItemFragmentFragmentDoc,
    "fragment MediaSizeFragment on MediaSize {\n  __typename\n  sourceUrl\n  name\n  file\n  fileSize\n  filePath\n  mimeType\n  width\n  height\n}": typeof types.MediaSizeFragmentFragmentDoc,
    "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}": typeof types.NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc,
    "fragment PageFragment on Page {\n  __typename\n  id\n  databaseId\n  parentId\n  slug\n  title\n  content\n  uri\n  date\n  modified\n  modifiedGmt\n  dateGmt\n  status\n  isPreview\n}": typeof types.PageFragmentFragmentDoc,
    "fragment RootQueryToPageConnectionEdgeFragment on RootQueryToPageConnectionEdge {\n  __typename\n  cursor\n}": typeof types.RootQueryToPageConnectionEdgeFragmentFragmentDoc,
    "fragment RootQueryToPageConnectionPageInfoFragment on RootQueryToPageConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}": typeof types.RootQueryToPageConnectionPageInfoFragmentFragmentDoc,
    "fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}": typeof types.SubmissionConfirmationFieldsFragmentDoc,
    "query AboutUsPaths {\n  pages(where: {parent: \"cG9zdDoxNg==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}": typeof types.AboutUsPathsDocument,
    "query ConsultantPaths {\n  pages(where: {parent: \"cG9zdDo4Nw==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}": typeof types.ConsultantPathsDocument,
    "query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetChildPagesDocument,
    "query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}": typeof types.GetPageByIdDocument,
    "query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n    children {\n      pageInfo {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment\n      }\n      edges {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment\n        node {\n          ... on Page {\n            ...PageFragment\n            featuredImage {\n              ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n              node {\n                ...MediaItemFragment\n                mediaDetails {\n                  ...MediaDetailsFragment\n                  sizes {\n                    ...MediaSizeFragment\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetPageByIdWithChildrenDocument,
    "query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetPagesDocument,
    "query PageByUri($uri: ID!) {\n  page(id: $uri, idType: URI) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n  }\n}": typeof types.PageByUriDocument,
};
const documents: Documents = {
    "fragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}": types.FieldErrorFieldsFragmentDoc,
    "fragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}": types.FormFieldFieldsFragmentDoc,
    "fragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}": types.GfEntryFieldsFragmentDoc,
    "fragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}": types.GfEntryToFormFieldConnectionEdgeFieldsFragmentDoc,
    "fragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}": types.GfFormFieldsFragmentDoc,
    "fragment HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment on HierarchicalContentNodeToContentNodeChildrenConnectionEdge {\n  __typename\n  cursor\n}": types.HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragmentFragmentDoc,
    "fragment HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment on HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}": types.HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragmentFragmentDoc,
    "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n  filePath\n}": types.MediaDetailsFragmentFragmentDoc,
    "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  fileSize\n  filePath\n  description\n  id\n  slug\n}": types.MediaItemFragmentFragmentDoc,
    "fragment MediaSizeFragment on MediaSize {\n  __typename\n  sourceUrl\n  name\n  file\n  fileSize\n  filePath\n  mimeType\n  width\n  height\n}": types.MediaSizeFragmentFragmentDoc,
    "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}": types.NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc,
    "fragment PageFragment on Page {\n  __typename\n  id\n  databaseId\n  parentId\n  slug\n  title\n  content\n  uri\n  date\n  modified\n  modifiedGmt\n  dateGmt\n  status\n  isPreview\n}": types.PageFragmentFragmentDoc,
    "fragment RootQueryToPageConnectionEdgeFragment on RootQueryToPageConnectionEdge {\n  __typename\n  cursor\n}": types.RootQueryToPageConnectionEdgeFragmentFragmentDoc,
    "fragment RootQueryToPageConnectionPageInfoFragment on RootQueryToPageConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}": types.RootQueryToPageConnectionPageInfoFragmentFragmentDoc,
    "fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}": types.SubmissionConfirmationFieldsFragmentDoc,
    "query AboutUsPaths {\n  pages(where: {parent: \"cG9zdDoxNg==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}": types.AboutUsPathsDocument,
    "query ConsultantPaths {\n  pages(where: {parent: \"cG9zdDo4Nw==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}": types.ConsultantPathsDocument,
    "query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetChildPagesDocument,
    "query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}": types.GetPageByIdDocument,
    "query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n    children {\n      pageInfo {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment\n      }\n      edges {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment\n        node {\n          ... on Page {\n            ...PageFragment\n            featuredImage {\n              ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n              node {\n                ...MediaItemFragment\n                mediaDetails {\n                  ...MediaDetailsFragment\n                  sizes {\n                    ...MediaSizeFragment\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetPageByIdWithChildrenDocument,
    "query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetPagesDocument,
    "query PageByUri($uri: ID!) {\n  page(id: $uri, idType: URI) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n  }\n}": types.PageByUriDocument,
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
export function graphql(source: "fragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}"): (typeof documents)["fragment FieldErrorFields on FieldError {\n  id\n  message\n  __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}"): (typeof documents)["fragment FormFieldFields on FormField {\n  databaseId\n  displayOnly\n  inputType\n  layoutGridColumnSpan\n  layoutSpacerGridColumnSpan\n  pageNumber\n  type\n  visibility\n  __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}"): (typeof documents)["fragment GfEntryFields on GfEntry {\n  dateCreated\n  userAgent\n  __typename\n  ip\n  formId\n  isSubmitted\n  sourceUrl\n  id\n  createdById\n  createdByDatabaseId\n  dateCreatedGmt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}"): (typeof documents)["fragment GfEntryToFormFieldConnectionEdgeFields on GfEntryToFormFieldConnectionEdge {\n  cursor\n  __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}"): (typeof documents)["fragment GfFormFields on GfForm {\n  cssClass\n  databaseId\n  dateCreated\n  description\n  title\n  nextFieldId\n  __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment on HierarchicalContentNodeToContentNodeChildrenConnectionEdge {\n  __typename\n  cursor\n}"): (typeof documents)["fragment HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment on HierarchicalContentNodeToContentNodeChildrenConnectionEdge {\n  __typename\n  cursor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment on HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}"): (typeof documents)["fragment HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment on HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n  filePath\n}"): (typeof documents)["fragment MediaDetailsFragment on MediaDetails {\n  __typename\n  width\n  height\n  filePath\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  fileSize\n  filePath\n  description\n  id\n  slug\n}"): (typeof documents)["fragment MediaItemFragment on MediaItem {\n  __typename\n  altText\n  uri\n  title\n  sourceUrl\n  databaseId\n  fileSize\n  filePath\n  description\n  id\n  slug\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MediaSizeFragment on MediaSize {\n  __typename\n  sourceUrl\n  name\n  file\n  fileSize\n  filePath\n  mimeType\n  width\n  height\n}"): (typeof documents)["fragment MediaSizeFragment on MediaSize {\n  __typename\n  sourceUrl\n  name\n  file\n  fileSize\n  filePath\n  mimeType\n  width\n  height\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}"): (typeof documents)["fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n  __typename\n  cursor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PageFragment on Page {\n  __typename\n  id\n  databaseId\n  parentId\n  slug\n  title\n  content\n  uri\n  date\n  modified\n  modifiedGmt\n  dateGmt\n  status\n  isPreview\n}"): (typeof documents)["fragment PageFragment on Page {\n  __typename\n  id\n  databaseId\n  parentId\n  slug\n  title\n  content\n  uri\n  date\n  modified\n  modifiedGmt\n  dateGmt\n  status\n  isPreview\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RootQueryToPageConnectionEdgeFragment on RootQueryToPageConnectionEdge {\n  __typename\n  cursor\n}"): (typeof documents)["fragment RootQueryToPageConnectionEdgeFragment on RootQueryToPageConnectionEdge {\n  __typename\n  cursor\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RootQueryToPageConnectionPageInfoFragment on RootQueryToPageConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}"): (typeof documents)["fragment RootQueryToPageConnectionPageInfoFragment on RootQueryToPageConnectionPageInfo {\n  __typename\n  endCursor\n  startCursor\n  hasNextPage\n  hasPreviousPage\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}"): (typeof documents)["fragment SubmissionConfirmationFields on SubmissionConfirmation {\n  message\n  pageId\n  queryString\n  type\n  url\n  __typename\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AboutUsPaths {\n  pages(where: {parent: \"cG9zdDoxNg==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}"): (typeof documents)["query AboutUsPaths {\n  pages(where: {parent: \"cG9zdDoxNg==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ConsultantPaths {\n  pages(where: {parent: \"cG9zdDo4Nw==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}"): (typeof documents)["query ConsultantPaths {\n  pages(where: {parent: \"cG9zdDo4Nw==\"}) {\n    edges {\n      node {\n        uri\n        id\n        databaseId\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetChildPages($parent: ID) {\n  pages: pages(where: {parent: $parent}) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetPageById($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n    children {\n      pageInfo {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment\n      }\n      edges {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment\n        node {\n          ... on Page {\n            ...PageFragment\n            featuredImage {\n              ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n              node {\n                ...MediaItemFragment\n                mediaDetails {\n                  ...MediaDetailsFragment\n                  sizes {\n                    ...MediaSizeFragment\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetPageByIdWithChildren($id: ID!) {\n  page(id: $id) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n    children {\n      pageInfo {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFragment\n      }\n      edges {\n        ...HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFragment\n        node {\n          ... on Page {\n            ...PageFragment\n            featuredImage {\n              ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n              node {\n                ...MediaItemFragment\n                mediaDetails {\n                  ...MediaDetailsFragment\n                  sizes {\n                    ...MediaSizeFragment\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetPages($first: Int!, $field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!, $parentIn: [ID]) {\n  pages: pages(\n    first: $first\n    where: {parentIn: $parentIn, orderby: {field: $field, order: $order}}\n  ) {\n    edges {\n      cursor\n      node {\n        ...PageFragment\n        featuredImage {\n          ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          node {\n            ...MediaItemFragment\n            mediaDetails {\n              ...MediaDetailsFragment\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PageByUri($uri: ID!) {\n  page(id: $uri, idType: URI) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query PageByUri($uri: ID!) {\n  page(id: $uri, idType: URI) {\n    ...PageFragment\n    featuredImage {\n      ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      node {\n        ...MediaItemFragment\n        mediaDetails {\n          ...MediaDetailsFragment\n          sizes {\n            ...MediaSizeFragment\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;