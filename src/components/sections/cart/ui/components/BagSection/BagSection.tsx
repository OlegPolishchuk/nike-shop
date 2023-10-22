import React from 'react';

import { ProductList } from './components';

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

        <div className={'mt-4 flex w-full justify-center gap-3 md:hidden'}>
          <Typography tag={'span'} variant={'body-1'}>
            4 Items
          </Typography>
          <Typography tag={'span'} variant={'body-1'}>
            |
          </Typography>
          <Typography tag={'span'} variant={'body-1'}>
            &#x24; 557
          </Typography>
        </div>
      </div>

      <ProductList goods={goods} updateGoods={updateGoods} />
    </>
  );
};
