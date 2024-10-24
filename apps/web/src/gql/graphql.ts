/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AboutCategoriesInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<AboutCategoriesNodeInput>>>;
};

export type AboutCategoriesNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum AboutIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type AboutPostFormatsInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<AboutPostFormatsNodeInput>>>;
};

export type AboutPostFormatsNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type AboutToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AboutToPostFormatConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutToRevisionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

export enum CategoryIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type CategoryToAboutConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryToConsultantConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToContactFormConnectionWhereArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToContentNodeConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToPositionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToPostConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryToTestimonialConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CommentToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentToParentCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

export type ConsultantCategoriesInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<ConsultantCategoriesNodeInput>>>;
};

export type ConsultantCategoriesNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum ConsultantIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ConsultantPostFormatsInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<ConsultantPostFormatsNodeInput>>>;
};

export type ConsultantPostFormatsNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ConsultantToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConsultantToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ConsultantToPostFormatConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConsultantToRevisionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormCategoriesInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<ContactFormCategoriesNodeInput>>>;
};

export type ContactFormCategoriesNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum ContactFormIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ContactFormToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ContentNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

export enum ContentTypeEnum {
  About = 'ABOUT',
  Attachment = 'ATTACHMENT',
  Consultant = 'CONSULTANT',
  ContactForm = 'CONTACT_FORM',
  Page = 'PAGE',
  Position = 'POSITION',
  Post = 'POST',
  Testimonial = 'TESTIMONIAL'
}

export enum ContentTypeIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export type ContentTypeToContentNodeConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAboutInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<AboutCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<AboutPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateCategoryInput = {
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCommentInput = {
  approved?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentOn?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsultantInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<ConsultantCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<ConsultantPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateContactFormInput = {
  categories?: InputMaybe<ContactFormCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMediaItemInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['ID']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  dateGmt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<MimeTypeEnum>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaItemStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePageInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePositionInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<PositionCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<PositionPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreatePostFormatInput = {
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<PostCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<PostPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  tags?: InputMaybe<PostTagsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateTagInput = {
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTestimonialInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<TestimonialCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<TestimonialPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateUserInput = {
  aim?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  jabber?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  nicename?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshJwtUserSecret?: InputMaybe<Scalars['Boolean']['input']>;
  registered?: InputMaybe<Scalars['String']['input']>;
  revokeJwtUserSecret?: InputMaybe<Scalars['Boolean']['input']>;
  richEditing?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username: Scalars['String']['input'];
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  yim?: InputMaybe<Scalars['String']['input']>;
};

export type DateInput = {
  day?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type DateQueryInput = {
  after?: InputMaybe<DateInput>;
  before?: InputMaybe<DateInput>;
  column?: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  compare?: InputMaybe<Scalars['String']['input']>;
  day?: InputMaybe<Scalars['Int']['input']>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  inclusive?: InputMaybe<Scalars['Boolean']['input']>;
  minute?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationEnum>;
  second?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteAboutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteConsultantInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteContactFormInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteMediaItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeletePageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeletePositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeletePostFormatInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeletePostInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteTestimonialInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  reassignId?: InputMaybe<Scalars['ID']['input']>;
};

export enum FormIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type InputField = {
  id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum MediaItemIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  SourceUrl = 'SOURCE_URL',
  Uri = 'URI'
}

export enum MediaItemSizeEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  MediumLarge = 'MEDIUM_LARGE',
  PostThumbnail = 'POST_THUMBNAIL',
  Thumbnail = 'THUMBNAIL',
  TwentytwentyFullscreen = 'TWENTYTWENTY_FULLSCREEN',
  '1536X1536' = '_1536X1536',
  '2048X2048' = '_2048X2048'
}

export enum MediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH'
}

export type MediaItemToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export enum MenuItemNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type MenuItemToMenuItemConnectionWhereArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<MenuLocationEnum>;
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type MenuItemsWhereArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<MenuLocationEnum>;
};

export enum MenuLocationEnum {
  Expanded = 'EXPANDED',
  Footer = 'FOOTER',
  JetpackSocialMenu = 'JETPACK_SOCIAL_MENU',
  Mobile = 'MOBILE',
  Primary = 'PRIMARY',
  Social = 'SOCIAL'
}

export enum MenuNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type MenuToMenuItemConnectionWhereArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<MenuLocationEnum>;
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageHeic = 'IMAGE_HEIC',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum PageIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

export type PageToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type PageToRevisionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PositionCategoriesInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<PositionCategoriesNodeInput>>>;
};

export type PositionCategoriesNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum PositionIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PositionPostFormatsInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<PositionPostFormatsNodeInput>>>;
};

export type PositionPostFormatsNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PositionToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PositionToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type PositionToPostFormatConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PositionToRevisionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostCategoriesInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

export type PostCategoriesNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum PostFormatIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PostFormatToAboutConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToConsultantConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToContentNodeConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToPositionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToPostConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostFormatToTestimonialConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PostIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export enum PostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED'
}

export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

export enum PostObjectsConnectionOrderbyEnum {
  Author = 'AUTHOR',
  CommentCount = 'COMMENT_COUNT',
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Title = 'TITLE'
}

export type PostObjectsConnectionOrderbyInput = {
  field: PostObjectsConnectionOrderbyEnum;
  order: OrderEnum;
};

export type PostPostFormatsInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

export type PostPostFormatsNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum PostStatusEnum {
  AcfDisabled = 'ACF_DISABLED',
  AutoDraft = 'AUTO_DRAFT',
  Draft = 'DRAFT',
  Future = 'FUTURE',
  Inherit = 'INHERIT',
  Pending = 'PENDING',
  Private = 'PRIVATE',
  Publish = 'PUBLISH',
  RequestCompleted = 'REQUEST_COMPLETED',
  RequestConfirmed = 'REQUEST_CONFIRMED',
  RequestFailed = 'REQUEST_FAILED',
  RequestPending = 'REQUEST_PENDING',
  Spam = 'SPAM',
  Trash = 'TRASH'
}

export type PostTagsInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

export type PostTagsNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PostToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type PostToPostFormatConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostToRevisionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostToTagConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostToTermNodeConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshJwtAuthTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  jwtRefreshToken: Scalars['String']['input'];
};

export type RegisterUserInput = {
  aim?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  jabber?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  nicename?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshJwtUserSecret?: InputMaybe<Scalars['Boolean']['input']>;
  registered?: InputMaybe<Scalars['String']['input']>;
  revokeJwtUserSecret?: InputMaybe<Scalars['Boolean']['input']>;
  richEditing?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  yim?: InputMaybe<Scalars['String']['input']>;
};

export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

export type ResetUserPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type RestoreCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RootQueryToAboutConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootQueryToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryToConsultantConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToContactFormConnectionWhereArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToContentNodeConnectionWhereArgs = {
  contentTypes?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToMediaItemConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToMenuConnectionWhereArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<MenuLocationEnum>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToMenuItemConnectionWhereArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<MenuLocationEnum>;
  parentDatabaseId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type RootQueryToPageConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToPositionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToPostConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToPostFormatConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootQueryToTagConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootQueryToTermNodeConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxonomies?: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootQueryToTestimonialConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryToUserConnectionWhereArgs = {
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  hasPublishedPosts?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  include?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  login?: InputMaybe<Scalars['String']['input']>;
  loginIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  loginNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nicename?: InputMaybe<Scalars['String']['input']>;
  nicenameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nicenameNotIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  role?: InputMaybe<UserRoleEnum>;
  roleIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  roleNotIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchColumns?: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export type SendEmailInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  replyTo?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type SendPasswordResetEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type SubmitFormInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Array<InputMaybe<InputField>>>;
  formId?: InputMaybe<Scalars['Int']['input']>;
};

export enum TagIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type TagToContentNodeConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagToPostConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Postformat = 'POSTFORMAT',
  Tag = 'TAG'
}

export enum TaxonomyIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export enum TermNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

export type TestimonialCategoriesInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<TestimonialCategoriesNodeInput>>>;
};

export type TestimonialCategoriesNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum TestimonialIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type TestimonialPostFormatsInput = {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  nodes?: InputMaybe<Array<InputMaybe<TestimonialPostFormatsNodeInput>>>;
};

export type TestimonialPostFormatsNodeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialToCategoryConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type TestimonialToPostFormatConnectionWhereArgs = {
  cacheDomain?: InputMaybe<Scalars['String']['input']>;
  childOf?: InputMaybe<Scalars['Int']['input']>;
  childless?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionLike?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  excludeTree?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  hierarchical?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLike?: InputMaybe<Scalars['String']['input']>;
  objectIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  termTaxonomId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updateTermMetaCache?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialToRevisionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum TimezoneEnum {
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  AfricaAccra = 'AFRICA_ACCRA',
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  AfricaAlgiers = 'AFRICA_ALGIERS',
  AfricaAsmara = 'AFRICA_ASMARA',
  AfricaBamako = 'AFRICA_BAMAKO',
  AfricaBangui = 'AFRICA_BANGUI',
  AfricaBanjul = 'AFRICA_BANJUL',
  AfricaBissau = 'AFRICA_BISSAU',
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  AfricaCairo = 'AFRICA_CAIRO',
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  AfricaCeuta = 'AFRICA_CEUTA',
  AfricaConakry = 'AFRICA_CONAKRY',
  AfricaDakar = 'AFRICA_DAKAR',
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  AfricaDouala = 'AFRICA_DOUALA',
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  AfricaFreetown = 'AFRICA_FREETOWN',
  AfricaGaborone = 'AFRICA_GABORONE',
  AfricaHarare = 'AFRICA_HARARE',
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  AfricaJuba = 'AFRICA_JUBA',
  AfricaKampala = 'AFRICA_KAMPALA',
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  AfricaKigali = 'AFRICA_KIGALI',
  AfricaKinshasa = 'AFRICA_KINSHASA',
  AfricaLagos = 'AFRICA_LAGOS',
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  AfricaLome = 'AFRICA_LOME',
  AfricaLuanda = 'AFRICA_LUANDA',
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  AfricaLusaka = 'AFRICA_LUSAKA',
  AfricaMalabo = 'AFRICA_MALABO',
  AfricaMaputo = 'AFRICA_MAPUTO',
  AfricaMaseru = 'AFRICA_MASERU',
  AfricaMbabane = 'AFRICA_MBABANE',
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  AfricaMonrovia = 'AFRICA_MONROVIA',
  AfricaNairobi = 'AFRICA_NAIROBI',
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  AfricaNiamey = 'AFRICA_NIAMEY',
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  AfricaTripoli = 'AFRICA_TRIPOLI',
  AfricaTunis = 'AFRICA_TUNIS',
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  AmericaAdak = 'AMERICA_ADAK',
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  AmericaAntigua = 'AMERICA_ANTIGUA',
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  AmericaAruba = 'AMERICA_ARUBA',
  AmericaAsuncion = 'AMERICA_ASUNCION',
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  AmericaBahia = 'AMERICA_BAHIA',
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  AmericaBarbados = 'AMERICA_BARBADOS',
  AmericaBelem = 'AMERICA_BELEM',
  AmericaBelize = 'AMERICA_BELIZE',
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  AmericaBogota = 'AMERICA_BOGOTA',
  AmericaBoise = 'AMERICA_BOISE',
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  AmericaCancun = 'AMERICA_CANCUN',
  AmericaCaracas = 'AMERICA_CARACAS',
  AmericaCayenne = 'AMERICA_CAYENNE',
  AmericaCayman = 'AMERICA_CAYMAN',
  AmericaChicago = 'AMERICA_CHICAGO',
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  AmericaCreston = 'AMERICA_CRESTON',
  AmericaCuiaba = 'AMERICA_CUIABA',
  AmericaCuracao = 'AMERICA_CURACAO',
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  AmericaDawson = 'AMERICA_DAWSON',
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  AmericaDenver = 'AMERICA_DENVER',
  AmericaDetroit = 'AMERICA_DETROIT',
  AmericaDominica = 'AMERICA_DOMINICA',
  AmericaEdmonton = 'AMERICA_EDMONTON',
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  AmericaGrenada = 'AMERICA_GRENADA',
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  AmericaGuyana = 'AMERICA_GUYANA',
  AmericaHalifax = 'AMERICA_HALIFAX',
  AmericaHavana = 'AMERICA_HAVANA',
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  AmericaInuvik = 'AMERICA_INUVIK',
  AmericaIqaluit = 'AMERICA_IQALUIT',
  AmericaJamaica = 'AMERICA_JAMAICA',
  AmericaJuneau = 'AMERICA_JUNEAU',
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  AmericaLima = 'AMERICA_LIMA',
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  AmericaMaceio = 'AMERICA_MACEIO',
  AmericaManagua = 'AMERICA_MANAGUA',
  AmericaManaus = 'AMERICA_MANAUS',
  AmericaMarigot = 'AMERICA_MARIGOT',
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  AmericaMenominee = 'AMERICA_MENOMINEE',
  AmericaMerida = 'AMERICA_MERIDA',
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  AmericaMiquelon = 'AMERICA_MIQUELON',
  AmericaMoncton = 'AMERICA_MONCTON',
  AmericaMonterrey = 'AMERICA_MONTERREY',
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  AmericaNassau = 'AMERICA_NASSAU',
  AmericaNewYork = 'AMERICA_NEW_YORK',
  AmericaNipigon = 'AMERICA_NIPIGON',
  AmericaNome = 'AMERICA_NOME',
  AmericaNoronha = 'AMERICA_NORONHA',
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  AmericaNuuk = 'AMERICA_NUUK',
  AmericaOjinaga = 'AMERICA_OJINAGA',
  AmericaPanama = 'AMERICA_PANAMA',
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  AmericaPhoenix = 'AMERICA_PHOENIX',
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  AmericaRecife = 'AMERICA_RECIFE',
  AmericaRegina = 'AMERICA_REGINA',
  AmericaResolute = 'AMERICA_RESOLUTE',
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  AmericaSantarem = 'AMERICA_SANTAREM',
  AmericaSantiago = 'AMERICA_SANTIAGO',
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  AmericaSitka = 'AMERICA_SITKA',
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  AmericaStKitts = 'AMERICA_ST_KITTS',
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  AmericaThule = 'AMERICA_THULE',
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  AmericaTijuana = 'AMERICA_TIJUANA',
  AmericaToronto = 'AMERICA_TORONTO',
  AmericaTortola = 'AMERICA_TORTOLA',
  AmericaVancouver = 'AMERICA_VANCOUVER',
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  AmericaYakutat = 'AMERICA_YAKUTAT',
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  AsiaAden = 'ASIA_ADEN',
  AsiaAlmaty = 'ASIA_ALMATY',
  AsiaAmman = 'ASIA_AMMAN',
  AsiaAnadyr = 'ASIA_ANADYR',
  AsiaAqtau = 'ASIA_AQTAU',
  AsiaAqtobe = 'ASIA_AQTOBE',
  AsiaAshgabat = 'ASIA_ASHGABAT',
  AsiaAtyrau = 'ASIA_ATYRAU',
  AsiaBaghdad = 'ASIA_BAGHDAD',
  AsiaBahrain = 'ASIA_BAHRAIN',
  AsiaBaku = 'ASIA_BAKU',
  AsiaBangkok = 'ASIA_BANGKOK',
  AsiaBarnaul = 'ASIA_BARNAUL',
  AsiaBeirut = 'ASIA_BEIRUT',
  AsiaBishkek = 'ASIA_BISHKEK',
  AsiaBrunei = 'ASIA_BRUNEI',
  AsiaChita = 'ASIA_CHITA',
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  AsiaColombo = 'ASIA_COLOMBO',
  AsiaDamascus = 'ASIA_DAMASCUS',
  AsiaDhaka = 'ASIA_DHAKA',
  AsiaDili = 'ASIA_DILI',
  AsiaDubai = 'ASIA_DUBAI',
  AsiaDushanbe = 'ASIA_DUSHANBE',
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  AsiaGaza = 'ASIA_GAZA',
  AsiaHebron = 'ASIA_HEBRON',
  AsiaHongKong = 'ASIA_HONG_KONG',
  AsiaHovd = 'ASIA_HOVD',
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  AsiaJakarta = 'ASIA_JAKARTA',
  AsiaJayapura = 'ASIA_JAYAPURA',
  AsiaJerusalem = 'ASIA_JERUSALEM',
  AsiaKabul = 'ASIA_KABUL',
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  AsiaKarachi = 'ASIA_KARACHI',
  AsiaKathmandu = 'ASIA_KATHMANDU',
  AsiaKhandyga = 'ASIA_KHANDYGA',
  AsiaKolkata = 'ASIA_KOLKATA',
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  AsiaKuching = 'ASIA_KUCHING',
  AsiaKuwait = 'ASIA_KUWAIT',
  AsiaMacau = 'ASIA_MACAU',
  AsiaMagadan = 'ASIA_MAGADAN',
  AsiaMakassar = 'ASIA_MAKASSAR',
  AsiaManila = 'ASIA_MANILA',
  AsiaMuscat = 'ASIA_MUSCAT',
  AsiaNicosia = 'ASIA_NICOSIA',
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  AsiaOmsk = 'ASIA_OMSK',
  AsiaOral = 'ASIA_ORAL',
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  AsiaPontianak = 'ASIA_PONTIANAK',
  AsiaPyongyang = 'ASIA_PYONGYANG',
  AsiaQatar = 'ASIA_QATAR',
  AsiaQostanay = 'ASIA_QOSTANAY',
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  AsiaRiyadh = 'ASIA_RIYADH',
  AsiaSakhalin = 'ASIA_SAKHALIN',
  AsiaSamarkand = 'ASIA_SAMARKAND',
  AsiaSeoul = 'ASIA_SEOUL',
  AsiaShanghai = 'ASIA_SHANGHAI',
  AsiaSingapore = 'ASIA_SINGAPORE',
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  AsiaTaipei = 'ASIA_TAIPEI',
  AsiaTashkent = 'ASIA_TASHKENT',
  AsiaTbilisi = 'ASIA_TBILISI',
  AsiaTehran = 'ASIA_TEHRAN',
  AsiaThimphu = 'ASIA_THIMPHU',
  AsiaTokyo = 'ASIA_TOKYO',
  AsiaTomsk = 'ASIA_TOMSK',
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  AsiaUrumqi = 'ASIA_URUMQI',
  AsiaUstNera = 'ASIA_UST_NERA',
  AsiaVientiane = 'ASIA_VIENTIANE',
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  AsiaYakutsk = 'ASIA_YAKUTSK',
  AsiaYangon = 'ASIA_YANGON',
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  AsiaYerevan = 'ASIA_YEREVAN',
  AtlanticAzores = 'ATLANTIC_AZORES',
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  AtlanticCanary = 'ATLANTIC_CANARY',
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  AtlanticFaroe = 'ATLANTIC_FAROE',
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  AtlanticStanley = 'ATLANTIC_STANLEY',
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  AustraliaHobart = 'AUSTRALIA_HOBART',
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  AustraliaPerth = 'AUSTRALIA_PERTH',
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  EuropeAndorra = 'EUROPE_ANDORRA',
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  EuropeAthens = 'EUROPE_ATHENS',
  EuropeBelgrade = 'EUROPE_BELGRADE',
  EuropeBerlin = 'EUROPE_BERLIN',
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  EuropeBrussels = 'EUROPE_BRUSSELS',
  EuropeBucharest = 'EUROPE_BUCHAREST',
  EuropeBudapest = 'EUROPE_BUDAPEST',
  EuropeBusingen = 'EUROPE_BUSINGEN',
  EuropeChisinau = 'EUROPE_CHISINAU',
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  EuropeDublin = 'EUROPE_DUBLIN',
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  EuropeHelsinki = 'EUROPE_HELSINKI',
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  EuropeJersey = 'EUROPE_JERSEY',
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  EuropeKiev = 'EUROPE_KIEV',
  EuropeKirov = 'EUROPE_KIROV',
  EuropeLisbon = 'EUROPE_LISBON',
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  EuropeLondon = 'EUROPE_LONDON',
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  EuropeMadrid = 'EUROPE_MADRID',
  EuropeMalta = 'EUROPE_MALTA',
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  EuropeMinsk = 'EUROPE_MINSK',
  EuropeMonaco = 'EUROPE_MONACO',
  EuropeMoscow = 'EUROPE_MOSCOW',
  EuropeOslo = 'EUROPE_OSLO',
  EuropeParis = 'EUROPE_PARIS',
  EuropePodgorica = 'EUROPE_PODGORICA',
  EuropePrague = 'EUROPE_PRAGUE',
  EuropeRiga = 'EUROPE_RIGA',
  EuropeRome = 'EUROPE_ROME',
  EuropeSamara = 'EUROPE_SAMARA',
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  EuropeSaratov = 'EUROPE_SARATOV',
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  EuropeSkopje = 'EUROPE_SKOPJE',
  EuropeSofia = 'EUROPE_SOFIA',
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  EuropeTallinn = 'EUROPE_TALLINN',
  EuropeTirane = 'EUROPE_TIRANE',
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  EuropeVaduz = 'EUROPE_VADUZ',
  EuropeVatican = 'EUROPE_VATICAN',
  EuropeVienna = 'EUROPE_VIENNA',
  EuropeVilnius = 'EUROPE_VILNIUS',
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  EuropeWarsaw = 'EUROPE_WARSAW',
  EuropeZagreb = 'EUROPE_ZAGREB',
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  EuropeZurich = 'EUROPE_ZURICH',
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  IndianChagos = 'INDIAN_CHAGOS',
  IndianChristmas = 'INDIAN_CHRISTMAS',
  IndianCocos = 'INDIAN_COCOS',
  IndianComoro = 'INDIAN_COMORO',
  IndianKerguelen = 'INDIAN_KERGUELEN',
  IndianMahe = 'INDIAN_MAHE',
  IndianMaldives = 'INDIAN_MALDIVES',
  IndianMauritius = 'INDIAN_MAURITIUS',
  IndianMayotte = 'INDIAN_MAYOTTE',
  IndianReunion = 'INDIAN_REUNION',
  PacificApia = 'PACIFIC_APIA',
  PacificAuckland = 'PACIFIC_AUCKLAND',
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  PacificChatham = 'PACIFIC_CHATHAM',
  PacificChuuk = 'PACIFIC_CHUUK',
  PacificEaster = 'PACIFIC_EASTER',
  PacificEfate = 'PACIFIC_EFATE',
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  PacificFiji = 'PACIFIC_FIJI',
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  PacificGambier = 'PACIFIC_GAMBIER',
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  PacificGuam = 'PACIFIC_GUAM',
  PacificHonolulu = 'PACIFIC_HONOLULU',
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  PacificKosrae = 'PACIFIC_KOSRAE',
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  PacificMajuro = 'PACIFIC_MAJURO',
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  PacificMidway = 'PACIFIC_MIDWAY',
  PacificNauru = 'PACIFIC_NAURU',
  PacificNiue = 'PACIFIC_NIUE',
  PacificNorfolk = 'PACIFIC_NORFOLK',
  PacificNoumea = 'PACIFIC_NOUMEA',
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  PacificPalau = 'PACIFIC_PALAU',
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  PacificPohnpei = 'PACIFIC_POHNPEI',
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  PacificSaipan = 'PACIFIC_SAIPAN',
  PacificTahiti = 'PACIFIC_TAHITI',
  PacificTarawa = 'PACIFIC_TARAWA',
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  PacificWake = 'PACIFIC_WAKE',
  PacificWallis = 'PACIFIC_WALLIS',
  Utc_0 = 'UTC_0',
  Utc_0_30 = 'UTC_0_30',
  Utc_1 = 'UTC_1',
  Utc_1_30 = 'UTC_1_30',
  Utc_2 = 'UTC_2',
  Utc_2_30 = 'UTC_2_30',
  Utc_3 = 'UTC_3',
  Utc_3_30 = 'UTC_3_30',
  Utc_4 = 'UTC_4',
  Utc_4_30 = 'UTC_4_30',
  Utc_5 = 'UTC_5',
  Utc_5_30 = 'UTC_5_30',
  Utc_5_45 = 'UTC_5_45',
  Utc_6 = 'UTC_6',
  Utc_6_30 = 'UTC_6_30',
  Utc_7 = 'UTC_7',
  Utc_7_30 = 'UTC_7_30',
  Utc_8 = 'UTC_8',
  Utc_8_30 = 'UTC_8_30',
  Utc_8_45 = 'UTC_8_45',
  Utc_9 = 'UTC_9',
  Utc_9_30 = 'UTC_9_30',
  Utc_10 = 'UTC_10',
  Utc_10_30 = 'UTC_10_30',
  Utc_11 = 'UTC_11',
  Utc_11_30 = 'UTC_11_30',
  Utc_12 = 'UTC_12',
  Utc_12_45 = 'UTC_12_45',
  Utc_13 = 'UTC_13',
  Utc_13_45 = 'UTC_13_45',
  Utc_14 = 'UTC_14'
}

export type UpdateAboutInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<AboutCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<AboutPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateCategoryInput = {
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommentInput = {
  approved?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentOn?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  parent?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConsultantInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<ConsultantCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<ConsultantPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateContactFormInput = {
  categories?: InputMaybe<ContactFormCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMediaItemInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  authorId?: InputMaybe<Scalars['ID']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  dateGmt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<MimeTypeEnum>;
  id: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaItemStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePageInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePositionInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<PositionCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<PositionPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdatePostFormatInput = {
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<PostCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<PostPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  tags?: InputMaybe<PostTagsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateSettingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discussionSettingsDefaultCommentStatus?: InputMaybe<Scalars['String']['input']>;
  discussionSettingsDefaultPingStatus?: InputMaybe<Scalars['String']['input']>;
  generalSettingsDateFormat?: InputMaybe<Scalars['String']['input']>;
  generalSettingsDescription?: InputMaybe<Scalars['String']['input']>;
  generalSettingsEmail?: InputMaybe<Scalars['String']['input']>;
  generalSettingsLanguage?: InputMaybe<Scalars['String']['input']>;
  generalSettingsStartOfWeek?: InputMaybe<Scalars['Int']['input']>;
  generalSettingsTimeFormat?: InputMaybe<Scalars['String']['input']>;
  generalSettingsTimezone?: InputMaybe<Scalars['String']['input']>;
  generalSettingsTitle?: InputMaybe<Scalars['String']['input']>;
  generalSettingsUrl?: InputMaybe<Scalars['String']['input']>;
  readingSettingsPostsPerPage?: InputMaybe<Scalars['Int']['input']>;
  writingSettingsDefaultCategory?: InputMaybe<Scalars['Int']['input']>;
  writingSettingsDefaultPostFormat?: InputMaybe<Scalars['String']['input']>;
  writingSettingsUseSmilies?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateTagInput = {
  aliasOf?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTestimonialInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<TestimonialCategoriesInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentStatus?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  menuOrder?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pingStatus?: InputMaybe<Scalars['String']['input']>;
  pinged?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postFormats?: InputMaybe<TestimonialPostFormatsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  toPing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateUserInput = {
  aim?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  jabber?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  nicename?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  refreshJwtUserSecret?: InputMaybe<Scalars['Boolean']['input']>;
  registered?: InputMaybe<Scalars['String']['input']>;
  revokeJwtUserSecret?: InputMaybe<Scalars['Boolean']['input']>;
  richEditing?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  yim?: InputMaybe<Scalars['String']['input']>;
};

export enum UserNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Email = 'EMAIL',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI',
  Username = 'USERNAME'
}

export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export type UserToAboutConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToCommentConnectionWhereArgs = {
  authorEmail?: InputMaybe<Scalars['String']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  commentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  commentType?: InputMaybe<Scalars['String']['input']>;
  commentTypeIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commentTypeNotIn?: InputMaybe<Scalars['String']['input']>;
  contentAuthor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentAuthorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentId?: InputMaybe<Scalars['ID']['input']>;
  contentIdIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentIdNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contentName?: InputMaybe<Scalars['String']['input']>;
  contentParent?: InputMaybe<Scalars['Int']['input']>;
  contentStatus?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  contentType?: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  includeUnapproved?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  karma?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrderEnum>;
  orderby?: InputMaybe<CommentsConnectionOrderbyEnum>;
  parent?: InputMaybe<Scalars['Int']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserToConsultantConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToContentRevisionUnionConnectionWhereArgs = {
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToMediaItemConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToPageConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToPositionConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToPostConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
  tagIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagSlugAnd?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagSlugIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserToTestimonialConnectionWhereArgs = {
  author?: InputMaybe<Scalars['Int']['input']>;
  authorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateQuery?: InputMaybe<DateQueryInput>;
  hasPassword?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mimeType?: InputMaybe<MimeTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderby?: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stati?: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  status?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum UsersConnectionOrderbyEnum {
  DisplayName = 'DISPLAY_NAME',
  Email = 'EMAIL',
  Login = 'LOGIN',
  LoginIn = 'LOGIN_IN',
  NiceName = 'NICE_NAME',
  NiceNameIn = 'NICE_NAME_IN',
  Registered = 'REGISTERED',
  Url = 'URL'
}

export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum;
  order?: InputMaybe<OrderEnum>;
};

export enum UsersConnectionSearchColumnEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export type AboutFragmentFragment = { __typename?: 'About', content?: string | null, id: string, title?: string | null, modified?: string | null, uri: string, slug?: string | null, databaseId: number, date?: string | null, dateGmt?: string | null, toPing?: Array<string | null> | null, status?: string | null } & { ' $fragmentName'?: 'AboutFragmentFragment' };

export type AboutPollyFragmentFragment = { __typename?: 'About_Polly', audio?: string | null, fieldGroupName?: string | null } & { ' $fragmentName'?: 'AboutPollyFragmentFragment' };

export type MediaDetailsFragmentFragment = { __typename: 'MediaDetails', width?: number | null, height?: number | null } & { ' $fragmentName'?: 'MediaDetailsFragmentFragment' };

export type MediaItemFragmentFragment = { __typename: 'MediaItem', altText?: string | null, uri: string, title?: string | null, sourceUrl?: string | null, databaseId: number, id: string, srcSet?: string | null, slug?: string | null } & { ' $fragmentName'?: 'MediaItemFragmentFragment' };

export type NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment = { __typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & { ' $fragmentName'?: 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment' };

export type AboutFieldsFragment = { __typename?: 'About', id: string, uri: string, slug?: string | null } & { ' $fragmentName'?: 'AboutFieldsFragment' };

export type OurCareersQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  idType: AboutIdType;
}>;


export type OurCareersQuery = { __typename?: 'RootQuery', consultantPost?: (
    { __typename?: 'About', polly?: (
      { __typename?: 'About_Polly' }
      & { ' $fragmentRefs'?: { 'AboutPollyFragmentFragment': AboutPollyFragmentFragment } }
    ) | null, featuredImage?: (
      { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node?: (
        { __typename?: 'MediaItem', mediaDetails?: (
          { __typename?: 'MediaDetails' }
          & { ' $fragmentRefs'?: { 'MediaDetailsFragmentFragment': MediaDetailsFragmentFragment } }
        ) | null }
        & { ' $fragmentRefs'?: { 'MediaItemFragmentFragment': MediaItemFragmentFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment': NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'AboutFragmentFragment': AboutFragmentFragment } }
  ) | null };

export const AboutFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"About"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"toPing"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<AboutFragmentFragment, unknown>;
export const AboutPollyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutPollyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"About_Polly"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"fieldGroupName"}}]}}]} as unknown as DocumentNode<AboutPollyFragmentFragment, unknown>;
export const MediaDetailsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<MediaDetailsFragmentFragment, unknown>;
export const MediaItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<MediaItemFragmentFragment, unknown>;
export const NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragment, unknown>;
export const AboutFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"About"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AboutFieldsFragment, unknown>;
export const OurCareersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OurCareers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AboutIdType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"consultantPost"},"name":{"kind":"Name","value":"about"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"idType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AboutFragment"}},{"kind":"Field","name":{"kind":"Name","value":"polly"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AboutPollyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaDetailsFragment"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"About"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"toPing"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutPollyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"About_Polly"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"fieldGroupName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdgeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeWithFeaturedImageToMediaItemConnectionEdge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<OurCareersQuery, OurCareersQueryVariables>;