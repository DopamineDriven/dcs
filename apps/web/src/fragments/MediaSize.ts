import gql from "graphql-tag";

export const MediaSizeFragment = gql`
  fragment MediaSizeFragment on MediaSize {
    __typename
  	sourceUrl
    name
    file
    fileSize
    filePath
    mimeType
    width
    height
  }
`;
