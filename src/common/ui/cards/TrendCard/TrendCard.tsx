import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { TrendCardFragment } from '@/graphql/__generated__';

interface Props {
  card: TrendCardFragment;
}

export const TrendCard = ({ card }: Props) => {
  const { image, title, link } = card;

  return (
    <div>
      <Link href={link}>
        <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
          <ImageFromCms
            src={image.data.attributes.url}
            alt='membership'
            fill
            className='h-full w-full'
          />
        </div>

        <div className={'mt-3 flex w-full flex-col  justify-center'}>
          <Typography variant={'body-1'}>{title}</Typography>
        </div>
      </Link>
    </div>
  );
};
