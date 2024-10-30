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
