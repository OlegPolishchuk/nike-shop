import { Default_Page_Size } from '@/common/constants/constants';
import { GenderValue } from '@/components/sections/goodsSection/constsnts/constants';
import { BooleanFilterInput, gql, StringFilterInput } from '@/graphql/client';

export interface PaginationParams {
  pageTitle: string;
  page?: number;
  pageSize?: number;
  start?: number;
  limit?: number;
}

export interface FilterParams {
  price?: StringFilterInput;
  tag?: StringFilterInput;
  sizes?: {
    title: string;
    inStock?: BooleanFilterInput;
  };
  gender?: string[];
}

export interface SortingParams {
  sort?: string[];
  filters?: FilterParams;
  pagination: PaginationParams;
}

export const getGoodsPage = async (params: SortingParams) => {
  const { pageTitle, page = 1, pageSize = Default_Page_Size } = params.pagination;
  const size = params.filters?.sizes?.title || '';
  const gender = params.filters?.gender;
  const sort = params.sort || [''];

  let newParams: any = {
    pageTitle,
    page,
    pageSize,
    sort,
    size,
    gender,
  };

  if (newParams.size === '') {
    const { size, ...rest } = newParams;
    newParams = rest;
  }

  return await gql.getGoodsPage({ ...newParams });
};
