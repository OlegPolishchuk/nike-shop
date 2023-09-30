import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/common/ui';

export const MembershipCard = () => {
  return (
    <>
      <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
        <Link href='/'>
          <Image
            src='/images/membership/membership_1.webp'
            alt='membership'
            layout='fill'
            className='h-full w-full'
          />

          <div className={'absolute top-[80%] flex w-full flex-col  justify-center px-5'}>
            <Typography variant={'sub-title'}>Member Shop</Typography>

            <Typography variant={'title-2'}>Shop Member-exclusive styles</Typography>
          </div>
        </Link>
      </div>

      <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
        <Link href='/'>
          <Image
            src='/images/membership/membership_2.webp'
            alt='membership'
            layout='fill'
            className='h-full w-full'
          />

          <div className={'absolute top-[80%] flex w-full flex-col  justify-center px-5'}>
            <Typography variant={'sub-title'}>Shipping as It Should Be</Typography>

            <Typography variant={'title-2'}>Free shipping on orders $50+</Typography>
          </div>
        </Link>
      </div>

      <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
        <Link href='/'>
          <Image
            src='/images/membership/membership_3.webp'
            alt='membership'
            layout='fill'
            className='h-full w-full'
          />

          <div className={'absolute top-[80%] flex w-full flex-col justify-center  px-5'}>
            <Typography variant={'sub-title'}>Nike By You</Typography>

            <Typography variant={'title-2'}>Customize your so-you shoe</Typography>
          </div>
        </Link>
      </div>
    </>
  );
};
