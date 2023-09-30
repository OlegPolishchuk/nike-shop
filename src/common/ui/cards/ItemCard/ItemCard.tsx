import React from 'react';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';

interface Props {
  imgSrc: string | StaticImageData;
  title: string;
  price: string;
  category: string;
  size?: 'medium' | 'small' | 'large';
}

const sizesClassName = {
  medium: 'w-full min-w-[350px] sm:min-w-[400px] sm:max-w-[400px]',
  large: 'w-full min-w-[350px] sm:min-w-[400px] sm:max-w-[400px]',
  small: 'w-full min-w-[300px] sm:w-full sm:max-w-[400px]',
};

export const ItemCard = ({ imgSrc, category, price, title, size = 'large' }: Props) => {
  return (
    <div className={''}>
      <div
        className={clsx(
          'relative mb-[12px]',
          sizesClassName[size],
          size === 'medium' ? 'aspect-video' : 'aspect-square',
        )}
      >
        {/*<Image src={imgSrc} alt={title} fill priority />*/}
        <ImageFromCms src={imgSrc} alt={title} fill priority />
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
