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
        node: {
          uri: string;
          title: string;
          featuredImage: {
            __typename: string;
            cursor: string;
            node: {
              __typename: string;
              altText: string;
              uri: string;
              title: string;
              sourceUrl: string;
              databaseId: number;
              description: string;
              id: string;
              slug: string;
              mediaDetails: {
                __typename: string;
                width: number;
                height: number;
              };
            };
          };
        };
      }[];
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
        node: {
          uri: string;
          title: string;
          featuredImage: {
            __typename: string;
            cursor: string;
            node: {
              __typename: string;
              altText: string;
              uri: string;
              title: string;
              sourceUrl: string;
              databaseId: number;
              description: string;
              id: string;
              slug: string;
              mediaDetails: {
                __typename: string;
                width: number;
                height: number;
              };
            };
          };
        };
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
        featuredImage: {
          node: {
            altText: string;
            id: string;
            uri: string;
            sourceUrl: string;
            mediaDetails: {
              width: number;
              height: number;
            };
          };
        };
      };
    }[];
  };
};

export type AboutUsChildPageByUriProps = {
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
    featuredImage: {
      node: {
        __typename: string;
        altText: string;
        uri: string;
        title: string;
        sourceUrl: string;
        databaseId: number;
        id: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
    };
  };
};

export type PageByUriProps = {
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
    featuredImage: {
      node: {
        __typename: string;
        altText: string;
        uri: string;
        title: string;
        sourceUrl: string;
        databaseId: number;
        id: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
    };
  };
};

export type ChildPathsProps = {
  pages: {
    edges: {
      node: {
        uri: string;
        id: string;
        databaseId: number;
        slug: string;
      };
    }[];
  };
};

export type ContactFormSubmissionPayloadProps = {
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
      errors: string | null;
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
