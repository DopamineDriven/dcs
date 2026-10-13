export const OrderEnum = {
  ASC: "ASC",
  DESC: "DESC"
} as const;

/** Field to order the connection by */
export const PostObjectsConnectionOrderbyEnum = {
  // Order by author
  AUTHOR: "AUTHOR",

  // Order by the number of comments it has acquired
  COMMENT_COUNT: "COMMENT_COUNT",

  // Order by publish date
  DATE: "DATE",

  // Preserve the ID order given in the IN array
  IN: "IN",

  // Order by the menu order value
  MENU_ORDER: "MENU_ORDER",

  // Order by last modified date
  MODIFIED: "MODIFIED",

  // Preserve slug order given in the NAME_IN array
  NAME_IN: "NAME_IN",

  // Order by parent ID
  PARENT: "PARENT",

  // Order by slug
  SLUG: "SLUG",

  // Order by title
  TITLE: "TITLE"
} as const;

export const parentPagesById = {
  About_Us: "cG9zdDoxNg==",
  Consultants: "cG9zdDo4Nw=="
} as const;

export type MediaSizeProps = {
  __typename: "MediaSize";
  /**
   * thumbnail and medium always present in array.
   * thumbnail always of size 150x150
   */
  name: "medium" | "thumbnail" | "medium_large" | "large" | (string & {});
  /**
   * examples by "name":
   *
   * thumbnail: "https://www.dcs-headless.com/wp-content/uploads/2024/11/our_clients_1_1x-150x150.webp"
   *
   * medium: "https://www.dcs-headless.com/wp-content/uploads/2024/11/our_clients_1_1x-300x200.webp"
   *
   * medium_large: "https://www.dcs-headless.com/wp-content/uploads/2024/11/our_clients_1_1x-768x512.webp"
   *
   * large: "https://www.dcs-headless.com/wp-content/uploads/2024/11/our_clients_1_1x-1024x683.webp"
   *
   */
  sourceUrl: string;
  /**
   * example: "our_clients_1_1x-150x150.webp"
   */
  file: string;
  /**
   * bytes
   */
  fileSize: number;
  /**
   * example: "/wp-content/uploads/2024/11/our_clients_1_1x-150x150.webp"
   */
  filePath: string;
  /**
   * example: "image/webp"
   */
  mimeType: string;
  width: number;
  height: number;
};

export type MediaDetailsProps = {
  __typename: "MediaDetails";
  /**
   * example: 1280
   */
  width: number;
  /**
   * example: 854
   */
  height: number;
  /**
   * example: "/wp-content/uploads/2024/11/our_clients_1_1x.webp"
   */
  filePath: string;
  sizes: MediaSizeProps[];
};

export type MediaItemProps = {
  __typename: "MediaItem";
  /**
   * example: "our-satisfied-clients"
   */
  altText: string;
  /**
   * example: "cG9zdDo2Ng=="
   */
  id: string;
  /**
   * example: 59
   */
  databaseId: number;
  /**
   * example: "our_clients_1_1x"
   */
  slug: string;
  /**
   * example: "https://www.dcs-headless.com/wp-content/uploads/2024/11/our_clients_1_1x.webp"
   */
  sourceUrl: string;
  /**
   * example: "/about-us/our-satisfied-clients/our_clients_1_1x/"
   */
  uri: string;
  /**
   * example: "<p>our-satisfied-clients</p>\n"
   */
  description: string;
  /**
   * bytes
   */
  fileSize: number;
  /**
   * example: "/wp-content/uploads/2024/11/our_clients_1_1x.webp"
   */
  filePath: string;
  mediaDetails: MediaDetailsProps;
};

export type NodeWithFeaturedImageToMediaItemConnectionEdgeProps = {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * Opaque reference to the nodes position in the connection. Value can be used with pagination args.
   *
   * example: "YXJyYXljb25uZWN0aW9uOjEzMw=="
   */
  cursor: string;
  node: MediaItemProps;
};

export type PageProps = {
  __typename: "Page";
  /**
   * example: "cG9zdDo1OQ=="
   */
  id: string;
  /**
   * example: 59
   */
  databaseId: number;
  /**
   * example:  "cG9zdDoxNg==",
   */
  parentId: string | null;
  /**
   * example: "our-satisfied-clients"
   */
  slug: string;
  /**
   * example: "Our Satisfied Clients"
   */
  title: string;
  /**
   * stringified html
   */
  content: string;
  /**
   * example: "/about-us/our-satisfied-clients/"
   */
  uri: string;
  /**
   * "publish" | (string & {})
   */
  status: string;
  /**
   * UTC-5
   *
   * example: "2026-10-10T10:45:42"
   */
  modified: string;
  /**
   * UTC-5
   *
   * example: "2024-10-29T20:58:34"
   */
  date: string;
  /**
   * UTC-0
   *
   * example: "2026-10-10T15:45:42"
   */
  modifiedGmt: string;
  /**
   * UTC-0
   *
   * example: "2024-10-30T01:58:34
   */
  dateGmt: string;
  isPreview: boolean;
  /**
   * parent pages lack featured images here -- eg, home, about_us, and consultants
   */
  featuredImage: NodeWithFeaturedImageToMediaItemConnectionEdgeProps | null;
};

export type GetAboutUsWithChildrenProps = {
  page: {
    id: string;
    databaseId: number;
    slug: string;
    title: string;
    content: string;
    uri: string;
    date: string;
    dateGmt: string;
    status: string;
    isPreview: boolean;
    featuredImage: null;
    children: {
      edges: {
        cursor: string;
        node: PageProps[];
      }
    };
  };
};

export type PageByIdWithChildrenProps = {
  page: {
    id: string;
    databaseId: number;
    slug: string;
    title: string;
    content: string;
    uri: string;
    date: string;
    dateGmt: string;
    status: string;
    isPreview: boolean;
    featuredImage: null;
    children: {
      edges: {
        cursor: string;
        node: PageProps;
      }[];
    };
  };
};

export type AboutUsChildPagesProps = {
  pages: {
    edges: {
      cursor: string;
      node: {
        content: string;
        id: string;
        uri: string;
        title: string;
        isPreview: boolean;
        databaseId: number;
        featuredImage: NodeWithFeaturedImageToMediaItemConnectionEdgeProps;
      };
    }[];
  };
};

export type AboutUsChildPageByUriProps = {
  page: PageProps;
};

export type PageByUriProps = {
  page: PageProps;
};

export type ChildPathsProps = {
  pages: {
    edges: {
      __typename: "RootQueryToPageConnectionEdge"
      cursor: string;
      node: {
        __typename: "Page"
        uri: string;
        id: string;
        databaseId: number;
        slug: string;
      };
    }[];
  };
};
export type FieldErrorProps = {
  id: number | string | null;
  message: string | null;
  __typename: "FieldError";
};

export type SubmissionPayloadProps = {
  data: {
    submitGfForm: {
      clientMutationId: string;
      confirmation: {
        message: string;
        pageId: string | number | null;
        queryString: string | null;
        type: string;
        url: string | null;
        __typename: string;
      };
      errors: FieldErrorProps[] | null;
      __typename: string;
      entry: {
        dateCreated: string;
        userAgent: string;
        __typename: string;
        ip: string;
        formId: string;
        isSubmitted: boolean;
        sourceUrl: string;
        id: string;
        createdById: string;
        createdByDatabaseId: number;
        dateCreatedGmt: string;
        form: {
          cssClass: string | null;
          databaseId: number;
          dateCreated: string;
          description: string;
          title: string;
          nextFieldId: number;
          __typename: string;
        };
        formFields: {
          __typename: string;
          edges: {
            cursor: string;
            __typename: string;
            node: {
              databaseId: number;
              displayOnly: boolean;
              inputType: string;
              layoutGridColumnSpan: number | string | null;
              layoutSpacerGridColumnSpan: number | string | null;
              pageNumber: number;
              type: string;
              visibility: string;
              __typename: string;
            };
          }[];
        };
      };
    };
  };
};

export type ExecuteContactFormSubmissionMutationProps = {
  firstName: string;
  lastName: string;
  email: string;
  subject?: string;
  body: string;
  userAgent?: string;
  ip?: string;
};

export type ExecuteEventFormSubmissionMutationProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  body: string;
  userAgent?: string;
  ip?: string;
};

export type ExecuteResumeFormSubmissionMutationProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  body: string;
  userAgent?: string;
  ip?: string;
  file: string;
};

export type CardsProps<T extends keyof typeof parentPagesById> = {
  target: T;
} & PageByIdWithChildrenProps["page"]["children"];
