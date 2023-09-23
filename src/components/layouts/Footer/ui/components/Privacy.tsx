import React from 'react';

import Link from 'next/link';

import { PointIcon, Typography } from '@/common/ui';

export const Privacy = () => {
  return (
    <div className={'flex flex-col justify-between text-gray-300 md:flex-row md:items-center'}>
      <div className={'flex flex-col gap-5 text-gray-300 md:flex-row'}>
        <Link href={'/'} className={'text-light'}>
          <Typography variant={'title-5'} className={'flex items-center gap-3'}>
            <PointIcon />
            United States
          </Typography>
        </Link>

        <Typography variant={'title-5'}>&#169; Nike, inc. All Rights Reserved</Typography>
      </div>

      <div>
        <Link href={'/'} className={'hover:text-light'}>
          <Typography variant={'title-5'}>CA Supply Chains Act</Typography>
        </Link>
      </div>
    </div>
  );
};
