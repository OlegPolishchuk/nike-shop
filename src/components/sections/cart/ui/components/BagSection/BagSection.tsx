import React, { useEffect, useState } from 'react';

import { DescriptionMobile, ProductList } from './components';

import { Typography } from '@/common/ui';
import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  goods: CartProduct[];
  updateGoods: (goods: CartProduct[]) => void;
  summary: { goodsCount: number; subtotal: number; estimates: number; total: number };
}

export const BagSection = ({ goods, updateGoods, summary }: Props) => {
  const [emptyCart, setEmptyCart] = useState(false);

  useEffect(() => {
    if (!goods.length) {
      setEmptyCart(true);
    }
  }, [goods]);

  return (
    <>
      <div className={'py-6 text-center md:text-left'}>
        <Typography variant={'title-2'}>Bag</Typography>

        {emptyCart && (
          <div className={'mt-10'}>
            <Typography variant={'title-3'} className={'text-gray-300'}>
              Nothing has been added yet
            </Typography>
          </div>
        )}

        <DescriptionMobile summary={summary} />
      </div>

      <ProductList goods={goods} updateGoods={updateGoods} />
    </>
  );
};
