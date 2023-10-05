import { graphql } from '@/graphql/generated';

export const PageGoods = graphql(`
  fragment PageGoods on GoodsPageEntity {
    id
    attributes {
      pageTitle
      title
      good {
        ...ShoeCarouselCard
      }
    }
  }
`);
