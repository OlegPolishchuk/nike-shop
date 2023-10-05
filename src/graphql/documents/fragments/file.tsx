import { graphql } from '@/graphql/generated';

export const FileFragment = graphql(`
  fragment FileFragment on UploadFile {
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
  }
`);
