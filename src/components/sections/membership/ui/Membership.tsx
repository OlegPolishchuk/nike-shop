import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button, Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';

export const Membership = () => {
  return (
    <BaseSection>
      <div
        className={'flex flex-col gap-1 bg-[#0E0E0E] px-[10px] py-[24px] md:flex-row md:px-[46px]'}
      >
        <div className={'flex flex-col gap-[24px] text-light'}>
          <Typography variant={'title-1'} className={' uppercase leading-[60px]'}>
            Become a <br />
            member
          </Typography>

          <Typography variant={'title-3'}>Sign up free. Join the community</Typography>

          <div className={'flex gap-2'}>
            <div>
              <Button variant={'outlined'}>Join us</Button>
            </div>
            <div>
              <Button variant={'outlined'}>Sign in</Button>
            </div>
          </div>
        </div>

        <div className={'relative grow'}>
          <Link href={'/'}>
            <Image
              src={'/images/membership_bg.webp'}
              alt={'membership image'}
              className={'object-contain'}
              fill
            />
          </Link>
        </div>
      </div>
    </BaseSection>
  );
};
