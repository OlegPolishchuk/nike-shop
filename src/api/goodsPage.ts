import { Default_Page_Size } from '@/common/constants/constants';
import { Max_Product_Cost } from '@/components/sections/goodsSection/constsnts/constants';
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
  priceFrom?: number;
  priceTo?: number;
  query?: string;
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
  const priceFrom = params.filters?.priceFrom || 0;
  const priceTo = params.filters?.priceTo || Max_Product_Cost;
  const query = params.filters?.query || '';

  let newParams: any = {
    pageTitle,
    page,
    pageSize,
    sort,
    size,
    gender,
    priceFrom,
    priceTo,
    query,
  };

  if (!gender?.length) {
    const { gender, ...rest } = newParams;
    newParams = rest;
  }

  if (!priceTo) {
    const { priceTo, ...rest } = newParams;
    newParams = rest;
  }

  if (newParams.size === '') {
    const { size, ...rest } = newParams;
    newParams = rest;
  }

  // return await gql.getGoodsPage({ ...newParams });
  return await gql.getGoodsPageMin({ ...newParams });
};
