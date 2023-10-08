import { GetGoodsPageQuery } from '@/graphql/__generated__';

export type Good = GetGoodsPageQuery['goodsPages']['data'][0]['attributes']['good'][0];
export type Goods = GetGoodsPageQuery['goodsPages']['data'][0]['attributes']['good'];
