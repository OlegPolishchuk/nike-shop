import { Good } from '@/components/sections/goodsSection/types/types';

export interface CartProduct extends Good {
  size: string;
  count: number;
}
