import { Default_Page_Size } from '@/common/constants/constants';
import { gql } from '@/graphql/client';

export interface PaginationParams {
  pageTitle: string;
  page?: number;
  pageSize?: number;
  start?: number;
  limit?: number;
}

export const getGoodsPage = async ({
  pageTitle,
  page = 1,
  pageSize = Default_Page_Size,
}: PaginationParams) => {
  return await gql.getGoodsPage({
    pageTitle: { eq: pageTitle },
    page,
    pageSize,
  });
};
