import React from 'react';

import { useRouter } from 'next/router';

import { Badge, IconButton, LikeIcon } from '@/common/ui';
import { Tooltip } from '@/components/tooltip';
import { useGetFavoriteGoods } from '@/providers/favoriteProductProvider/FavoriteProductProvider';

export const LikeWidget = () => {
  const router = useRouter();

  const favoriteGoods = useGetFavoriteGoods();
  const count = favoriteGoods.length;

  return (
    <div className={'relative'}>
      <Tooltip title={'go to favorite'}>
        <IconButton icon={<LikeIcon />} onClick={() => router.push('/favorite')}></IconButton>
      </Tooltip>
      {count !== 0 && <Badge title={`${count}`} />}
    </div>
  );
};
