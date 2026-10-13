import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { MediaDetailsFragment } from "@/fragments/MediaDetails";
import { MediaItemFragment } from "@/fragments/MediaItems";
import { MediaSizeFragment } from "@/fragments/MediaSize";
import { NodeWithFeaturedImageToMediaItemConnectionEdgeFragment } from "@/fragments/NodeWithFeaturedImageToMediaItemConnectionEdgeFragment";
import { PageFragment } from "@/fragments/Page";
import { PageByUriProps, parentPagesById } from "@/types/wp";
import { fetchWpAPI } from "@/utils/fetch-wordpress";

export const GetPageByUri = gql`
  ${MediaSizeFragment}
  ${MediaItemFragment}
  ${MediaDetailsFragment}
  ${PageFragment}
  ${NodeWithFeaturedImageToMediaItemConnectionEdgeFragment}
  query GetPageById($uri: ID!) {
    page(id: $uri, idType: URI) {
      ...PageFragment
      featuredImage {
        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
        node {
          ...MediaItemFragment
          mediaDetails {
            ...MediaDetailsFragment
            sizes {
              ...MediaSizeFragment
            }
          }
        }
      }
    }
  }
`;

export async function QueryChildPageBySlug<
  const T extends keyof typeof parentPagesById,
  const V extends string
>(target: T, slug: V) {
  if (target === "About_Us") {
    return await fetchWpAPI<PageByUriProps>(print(GetPageByUri), {
      uri: `/about-us/${slug}/` as const
    }).then(data => {
      if (!data) throw new Error(`About_Us does not have child ${slug}`);
      else return data;
    });
  } else {
    return await fetchWpAPI<PageByUriProps>(print(GetPageByUri), {
      uri: `/consultants/${slug}/` as const
    }).then(data => {
      if (!data) throw new Error(`Consultants does not have child ${slug}`);
      else return data;
    });
  }
}

export async function QueryPageByUri<const V extends string>(uri: V) {
  return await fetchWpAPI<PageByUriProps>(print(GetPageByUri), {
    uri: uri
  }).then(data => {
    if (!data) throw new Error(`uri ${uri} does not exist`);
    else return data;
  });
}
