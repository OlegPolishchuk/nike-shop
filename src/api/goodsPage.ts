import { Default_Page_Size } from '@/common/constants/constants';
import { BooleanFilterInput, gql, IdFilterInput, StringFilterInput } from '@/graphql/client';

export interface PaginationParams {
  pageTitle: string;
  page?: number;
  pageSize?: number;
  start?: number;
  limit?: number;
}

export interface FilterParams {
  title?: StringFilterInput;
  price?: StringFilterInput;
  tag?: StringFilterInput;
  sectionShoes?: {
    id?: IdFilterInput;
    sizes: {
      Sizes: {
        title: StringFilterInput;
        inStock: BooleanFilterInput;
      };
    };
  };
}

export interface SortingParams {
  sort?: string;
  filters?: FilterParams;
  pagination: PaginationParams;
}

export const getGoodsPage = async (params: SortingParams) => {
  const { pageTitle, page = 1, pageSize = Default_Page_Size } = params.pagination;

  // return await gql.getGoodsPage({
  //   pageTitle: { eq: pageTitle },
  //   page,
  //   pageSize,
  // });

  return await gql.getGoodsPage({
    pageTitle,
    page,
    pageSize,
    // filters: params.filters,
    // sort: params.sort,
  });
};
