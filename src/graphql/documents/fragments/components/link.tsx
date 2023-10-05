import { graphql } from '@/graphql/generated';

export const LinkFragment = graphql(`
  fragment LinkFragment on ComponentUiLink {
    id
    label
    href
  }
`);
