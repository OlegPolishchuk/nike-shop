import { graphql } from '@/graphql/generated';

export const ShoeCarouselCard = graphql(`
  fragment ShoeCarouselCard on ComponentUiShoeCardForCarousel {
    id
    title
    link
    price
    tag
    media {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    section_shoes {
      data {
        id
      }
    }
  }
`);
