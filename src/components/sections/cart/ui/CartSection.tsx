import React, { useMemo } from 'react';

import { BagSection, CheckoutMobile, CheckoutSection, SummarySection } from './components';

import { useSessionStorageState } from '@/common/hooks/useStorage';
import { BaseSection } from '@/components/sections';
import { CartProduct } from '@/components/sections/cart/types/types';

const ESTIMATES = 15;

export const CartSection = () => {
  const [goods, setGoods] = useSessionStorageState<CartProduct[]>('goods', []);

  const goodsCount = goods.length;

  const subtotal = useMemo(
    () =>
      goods.reduce((acc: number, currentValue) => {
        return acc + currentValue.attributes.options.price * currentValue.count;
      }, 0),
    [goods],
  );

  const handleUpdateGoods = (goods: CartProduct[]) => {
    setGoods(goods);
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
          <BagSection goods={goods} updateGoods={handleUpdateGoods} />
        </div>

        <div className={'md:w-[40%] md:max-w-[400px]'}>
          <SummarySection summary={summary} />
          <CheckoutSection disabled={goodsCount === 0} />
        </div>

        <CheckoutMobile />
      </div>
    </BaseSection>
  );
};
