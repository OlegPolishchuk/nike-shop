import { graphql } from '@/graphql/generated';

export const ButtonFragment = graphql(`
  fragment ButtonFragment on ComponentUiButton {
    id
    label
    href
  }
`);
