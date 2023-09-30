import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/common/ui';

export const TrendCard = () => {
  return (
    <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
      <Link href='/'>
        <Image
          src='/images/trends/trends_1.webp'
          alt='membership'
          layout='fill'
          className='h-full w-full'
        />

        <div className={'absolute bottom-[-25px] flex w-full flex-col  justify-center'}>
          <Typography variant={'body-1'}>The Feel Good Collection</Typography>
        </div>
      </Link>
    </div>
  );
};
