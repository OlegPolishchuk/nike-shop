import { graphql } from '@/graphql/generated';

export const TrendCard = graphql(`
  fragment TrendCard on ComponentUiTrendCard {
    id
    title
    link
    image {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
`);
