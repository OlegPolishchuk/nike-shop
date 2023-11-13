import React from 'react';

import { useSessionStorageState } from '@/common/hooks/useStorage';
import { Badge, IconButton, LikeIcon } from '@/common/ui';
import { CartButton } from '@/components/buttons';
import { CartProduct } from '@/components/sections/cart/types/types';
import { Tooltip } from '@/components/tooltip';
import { useGetCartGoods } from '@/providers';

export const CartWidget = () => {
  const goods = useGetCartGoods();
  const count = goods.length;

  return (
    <div className={'relative'}>
      <Tooltip title={'go to bag'}>
        <CartButton />
      </Tooltip>
      {count !== 0 && <Badge title={`${count}`} />}
    </div>
  );
};
