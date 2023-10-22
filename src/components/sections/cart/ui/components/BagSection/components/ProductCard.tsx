import React from 'react';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { LikeButton, TrashButton } from '@/components/buttons';
import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  good: CartProduct;
  removeFromCart: (product: CartProduct) => void;
}

export const ProductCard = ({ good, removeFromCart }: Props) => {
  const { options } = good.attributes;
  const { title, tag, mainImage, price } = options;

  const handleDeleteProduct = () => {
    removeFromCart(good);
  };

  return (
    <div className={'border-t border-gray-200 py-[24px]'}>
      <div className={'flex gap-4'}>
        <div className={'relative h-[150px] w-[150px]'}>
          <ImageFromCms
            src={mainImage.data.attributes.url}
            alt={title}
            fill
            className={'object-cover'}
          />
        </div>

        <div className={'flex flex-col justify-between'}>
          <div className={'flex flex-col gap-2'}>
            <Typography variant={'title-3'}>{title}</Typography>
            <Typography variant={'body-1'} className={'text-gray-300'}>
              {tag}
            </Typography>
            <Typography variant={'body-1'} className={'text-gray-300'}>
              Quantity 1
            </Typography>
          </div>

          <div className={'gap34 flex'}>
            <LikeButton />
            <TrashButton onClick={handleDeleteProduct} />
          </div>
        </div>

        <div className={'ml-auto'}>
          <Typography variant={'title-3'}>&#x24; {price}</Typography>
        </div>
      </div>
    </div>
  );
};