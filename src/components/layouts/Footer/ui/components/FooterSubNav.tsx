import React from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';

export const FooterSubNav = () => {
  return (
    <div className={'flex flex-col gap-5 text-gray-300 md:flex-row'}>
      <Link href={'/'} className={'hover:text-light'}>
        <Typography variant={'title-5'}>Guides</Typography>
      </Link>
      <Link href={'/'} className={'hover:text-light'}>
        <Typography variant={'title-5'}>Terms of Sale</Typography>
      </Link>
      <Link href={'/'} className={'hover:text-light'}>
        <Typography variant={'title-5'}>Terms of Use</Typography>
      </Link>
      <Link href={'/'} className={'hover:text-light'}>
        <Typography variant={'title-5'}>Nike Privacy Policy</Typography>
      </Link>
      <Link href={'/'} className={'hover:text-light'}>
        <Typography variant={'title-5'}>Your Privacy Choices</Typography>
      </Link>
    </div>
  );
};
