import React, { useId } from 'react';

import { IconButton, LikeIcon } from '@/common/ui';
import { Good } from '@/components/sections/goodsSection/types/types';
import { Tooltip } from '@/components/tooltip';
import {
  useIsFavorite,
  useToggleFavorite,
} from '@/providers/favoriteProductProvider/FavoriteProductProvider';

interface Props {
  className?: string;
  good: Good;
}

export const LikeButton = ({ good, className }: Props) => {
  const toggleFavorite = useToggleFavorite();
  const checkIsFavorite = useIsFavorite();

  const isThisProductFavorite = checkIsFavorite(good.id);

  return (
    <IconButton
      className={className ? className : ''}
      icon={<LikeIcon fill={isThisProductFavorite ? '#f87171' : '#fff'} />}
      onClick={() => toggleFavorite(good)}
    />
  );
};
