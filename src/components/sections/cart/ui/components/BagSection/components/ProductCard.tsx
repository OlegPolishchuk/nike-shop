import React from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { LikeButton, TrashButton } from '@/components/buttons';
import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  good: CartProduct;
  removeFromCart: (product: CartProduct) => void;
  updateCount: (product: CartProduct) => void;
}

export const ProductCard = ({ good, removeFromCart, updateCount }: Props) => {
  const { options } = good.attributes;
  const { title, tag, mainImage, price } = options;

  const productLink = `${window.location.origin}/goods/${good.id}`;

  const handleIncrementProductCount = () => {
    updateCount({ ...good, count: good.count + 1 });
  };

  const handleDecrementProductCount = () => {
    updateCount({ ...good, count: good.count - 1 });
  };

  const handleDeleteProduct = () => {
    removeFromCart(good);
  };

  return (
    <div className={'border-t border-gray-200 py-[24px]'}>
      <div className={'flex gap-4'}>
        <div className={'relative h-[150px] w-[150px]'}>
          <Link href={productLink}>
            <ImageFromCms
              src={mainImage.data.attributes.url}
              alt={title}
              fill
              className={'object-cover'}
            />
          </Link>
        </div>

        <div className={'flex flex-col justify-between'}>
          <div className={'flex flex-col gap-2'}>
            <Link href={productLink} className={'hover:underline'}>
              <Typography variant={'title-3'}>{title}</Typography>
            </Link>

            <Typography variant={'body-1'} className={'text-gray-300'}>
              {tag}
            </Typography>

            <div className={'flex items-center gap-5'}>
              <Typography variant={'body-1'} className={'text-gray-300'}>
                Quantity: {good.count}
              </Typography>

              <button
                className={'text-lg hover:text-black-200'}
                onClick={handleIncrementProductCount}
              >
                +
              </button>

              <button
                className={'text-lg hover:text-black-200 disabled:cursor-not-allowed'}
                onClick={handleDecrementProductCount}
                disabled={good.count === 1}
              >
                -
              </button>
            </div>

            <Typography variant={'body-1'} className={'text-gray-300'}>
              Size: {good.size}
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
