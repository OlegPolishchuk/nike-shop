import { gql } from '@/graphql/client';

export const getGoodsPage = async (pageTitle: string) => {
  return await gql.getGoodsPage({
    pageTitle: { eq: pageTitle },
  });
};
