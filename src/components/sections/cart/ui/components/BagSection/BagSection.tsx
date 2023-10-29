import React from 'react';

import { DescriptionMobile, ProductList } from './components';

import { Typography } from '@/common/ui';
import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  goods: CartProduct[];
  updateGoods: (goods: CartProduct[]) => void;
}

export const BagSection = ({ goods, updateGoods }: Props) => {
  return (
    <>
      <div className={'py-6 text-center md:text-left'}>
        <Typography variant={'title-2'}>Bag</Typography>

        <DescriptionMobile />
      </div>

      <ProductList goods={goods} updateGoods={updateGoods} />
    </>
  );
};
