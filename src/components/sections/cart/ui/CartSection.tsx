import React, { useMemo } from 'react';

import { BagSection, CheckoutMobile, CheckoutSection, SummarySection } from './components';

import { useSessionStorageState } from '@/common/hooks/useStorage';
import { Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import { CartProduct } from '@/components/sections/cart/types/types';
import { Good } from '@/components/sections/goodsSection/types/types';
import { useGetCartGoods, useSetCartGoods } from '@/providers';

const ESTIMATES = 15;

export const CartSection = () => {
  const goods = useGetCartGoods();
  const updateGoods = useSetCartGoods();

  const goodsCount = goods.length;

  const subtotal = useMemo(
    () =>
      goods.reduce((acc: number, currentValue) => {
        return acc + currentValue.attributes.options.price * currentValue.count;
      }, 0),
    [goods],
  );

  const handleUpdateGoods = (goods: CartProduct[]) => {
    updateGoods(goods);
  };

  const estimates = goodsCount > 0 ? ESTIMATES : 0;

  const total = subtotal + estimates;

  const summary = {
    goodsCount,
    subtotal,
    estimates,
    total,
  };

  return (
    <BaseSection className={'mt-2'}>
      {/*<div>*/}
      {/*  <Breadcrumbs />*/}
      {/*</div>*/}

      <div className={'flex flex-col gap-10 md:flex-row md:justify-center'}>
        <div className={'md:w-[60%] md:max-w-[700px]'}>
          <BagSection goods={goods} updateGoods={handleUpdateGoods} summary={summary} />
        </div>

        <div className={'md:w-[40%] md:max-w-[400px]'}>
          <SummarySection summary={summary} />
          <CheckoutSection disabled={goodsCount === 0} />
        </div>

        <CheckoutMobile disabled={goodsCount === 0} />
      </div>
    </BaseSection>
  );
};
