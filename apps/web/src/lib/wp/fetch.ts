import * as dotenv from "dotenv";
dotenv.config();
import { OrderEnum, PostObjectsConnectionOrderbyEnum } from "@/types/wp";
import { wpHeaders } from "../constants";

async function fetchAPI<const T>(
  query: keyof typeof queryObject,
  { variables }: Record<string, unknown> = {}
) {
  const res = await fetch("https://dcs-headless.com/graphql", {
    headers: wpHeaders,
    method: "POST",
    body: JSON.stringify({
      query: queryObject[query],
      variables
    })
  });

  const json = (await res.json()) as Record<string, T>;
  if (json.errors) {
    console.error(json.errors);
    throw new Error(`WPGraphQL Fetcher Failed`);
  }
  return json.data;
}

export const queryObject = {
  getPages: /* GraphQL */ `
    fragment PageFragment on Page {
      id
      databaseId
      slug
      title
      content
      uri
      date
      dateGmt
      status
    }

    fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {
      __typename
    }

    fragment MediaItemFragment on MediaItem {
      __typename
      altText
      uri
      title
      sourceUrl
      databaseId
      id
      srcSet
      slug
    }

    fragment MediaDetailsFragment on MediaDetails {
      __typename
      width
      height
    }

    query GetPages(
      $first: Int!
      $field: PostObjectsConnectionOrderbyEnum!
      $order: OrderEnum!
    ) {
      pages: pages(
        first: $first
        where: { orderby: { field: $field, order: $order } }
      ) {
        nodes {
          ...PageFragment
          featuredImage {
            ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
            node {
              ...MediaItemFragment
              mediaDetails {
                ...MediaDetailsFragment
              }
            }
          }
        }
      }
    }
  `
} as const;

async function getPagesData({
  first,
  field,
  order
}: {
  first: number;
  field: keyof typeof PostObjectsConnectionOrderbyEnum;
  order: keyof typeof OrderEnum;
}) {
  const [data] = await Promise.all([
    fetchAPI("getPages", { variables: { first, field, order } })
  ]);
  return data;
}

export async function fetcher() {
  return fetch("").then(res => res.json());
}

(async () => {
  return await getPagesData({ field: "SLUG", order: "ASC", first: 100 }).then(
    data => {

      const handleData = typeof data ==="object" ?JSON.stringify(data, null,2) : data;
      console.log(handleData);
      return data;
    }
  );
})().catch(err => console.error(err ? err : "unknown error"));
