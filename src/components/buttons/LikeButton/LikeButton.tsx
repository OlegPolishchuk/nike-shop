import React from 'react';

import { useLocalStorageState } from '@/common/hooks/useStorage';
import { IconButton, LikeIcon } from '@/common/ui';
import { Good } from '@/components/sections/goodsSection/types/types';

interface Props {
  isFavorite: boolean;
  handleToggleFavoriteProduct: () => void;
}

export const LikeButton = ({ isFavorite, handleToggleFavoriteProduct }: Props) => {
  return (
    <IconButton
      icon={<LikeIcon fill={isFavorite ? '#f87171' : '#fff'} />}
      onClick={handleToggleFavoriteProduct}
    />
  );
};
