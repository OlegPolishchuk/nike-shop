import React from 'react';

import Image, { StaticImageData } from 'next/image';

import { Typography } from '@/common/ui';

interface Props {
  imgSrc: string | StaticImageData;
  title: string;
  price: string;
  category: string;
}

export const ItemCard = ({ imgSrc, category, price, title }: Props) => {
  return (
    <div className={'min-h-[300px] min-w-[300px] max-w-[500px]'}>
      <div className={'relative mb-[12px] aspect-square min-h-[300px]'}>
        <Image src={imgSrc} alt={title} fill priority />
      </div>

      <div className={'flex justify-between pr-[16px]'}>
        <div>
          <Typography variant={'body-1'} className={'mb-[10px]'}>
            {title}
          </Typography>
          <Typography variant={'body-1'} className={'text-gray-300'}>
            {category}
          </Typography>
        </div>

        <Typography variant={'body-1'}>&#36;{price}</Typography>
      </div>
    </div>
  );
};
