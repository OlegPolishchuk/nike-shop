import React from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  good: CartProduct;
}

export const ProductCard = ({ good }: Props) => {
  const { options } = good.attributes;
  const { title, tag, mainImage, price } = options;

  const productLink = `${window.location.origin}/goods/${good.id}`;

  return (
    <div className={'mb-[24px]'}>
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
                Quantity:
                <Typography tag={'span'} variant={'body-1'} className={'ml-1 text-black-100'}>
                  {good.count}
                </Typography>
              </Typography>
            </div>

            <Typography variant={'body-1'} className={'text-gray-300'}>
              Size: {good.size}
            </Typography>
          </div>
        </div>

        <div className={'ml-auto'}>
          <Typography variant={'title-3'}>&#x24; {price}</Typography>
        </div>
      </div>
    </div>
  );
};
