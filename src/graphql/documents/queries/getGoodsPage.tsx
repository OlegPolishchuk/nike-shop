import { graphql } from '@/graphql/generated';

export const getGoodsPageQuery = graphql(`
  query getGoodsPage($pageTitle: StringFilterInput) {
    goodsPages(filters: { pageTitle: $pageTitle }) {
      data {
        ...PageGoods
      }
    }
  }
`);
