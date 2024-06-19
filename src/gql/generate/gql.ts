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
 */
const documents = {
    "\n  query MyQuery {\n  menu(where: {id: \"clxma09b20b9207lwcjapufqx\"}) {\n    menuLink {\n      ... on Link {\n        id\n        title\n      }\n    }\n    socialLink {\n      ... on Social {\n        id\n        name\n        icon {\n          url\n        }\n      }\n    }\n  }\n  hero(where: {id: \"clxm9ontz0afe07ltr3n8sy1e\"}) {\n    logo {\n      url\n    }\n    title\n    subTitle\n    bgImage {\n      url\n    }\n    whatsapp {\n      icon {\n        url\n      }\n    }\n  }\n  carousel(where: {id: \"clxm9wlnk0ase07lt4liwtkwz\"}) {\n    component {\n      ... on CarouselItemData {\n        id\n        image {\n          url\n        }\n        title\n        date\n      }\n    }\n  }\n  sections {\n    title\n    id\n    sectionItem {\n      ... on CarouselItemData {\n        id\n        title\n        date\n        image {\n          url\n        }\n      }\n    }\n    sectionSubTitle\n  }\n}\n": types.MyQueryDocument,
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
export function graphql(source: "\n  query MyQuery {\n  menu(where: {id: \"clxma09b20b9207lwcjapufqx\"}) {\n    menuLink {\n      ... on Link {\n        id\n        title\n      }\n    }\n    socialLink {\n      ... on Social {\n        id\n        name\n        icon {\n          url\n        }\n      }\n    }\n  }\n  hero(where: {id: \"clxm9ontz0afe07ltr3n8sy1e\"}) {\n    logo {\n      url\n    }\n    title\n    subTitle\n    bgImage {\n      url\n    }\n    whatsapp {\n      icon {\n        url\n      }\n    }\n  }\n  carousel(where: {id: \"clxm9wlnk0ase07lt4liwtkwz\"}) {\n    component {\n      ... on CarouselItemData {\n        id\n        image {\n          url\n        }\n        title\n        date\n      }\n    }\n  }\n  sections {\n    title\n    id\n    sectionItem {\n      ... on CarouselItemData {\n        id\n        title\n        date\n        image {\n          url\n        }\n      }\n    }\n    sectionSubTitle\n  }\n}\n"): (typeof documents)["\n  query MyQuery {\n  menu(where: {id: \"clxma09b20b9207lwcjapufqx\"}) {\n    menuLink {\n      ... on Link {\n        id\n        title\n      }\n    }\n    socialLink {\n      ... on Social {\n        id\n        name\n        icon {\n          url\n        }\n      }\n    }\n  }\n  hero(where: {id: \"clxm9ontz0afe07ltr3n8sy1e\"}) {\n    logo {\n      url\n    }\n    title\n    subTitle\n    bgImage {\n      url\n    }\n    whatsapp {\n      icon {\n        url\n      }\n    }\n  }\n  carousel(where: {id: \"clxm9wlnk0ase07lt4liwtkwz\"}) {\n    component {\n      ... on CarouselItemData {\n        id\n        image {\n          url\n        }\n        title\n        date\n      }\n    }\n  }\n  sections {\n    title\n    id\n    sectionItem {\n      ... on CarouselItemData {\n        id\n        title\n        date\n        image {\n          url\n        }\n      }\n    }\n    sectionSubTitle\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;