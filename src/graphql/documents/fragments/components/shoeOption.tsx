import { graphql } from '@/graphql/generated';

export const ShoeOptionFragment = graphql(`
  fragment ShoeOptionFragment on ComponentEntityShoeOption {
    medias {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
`);
