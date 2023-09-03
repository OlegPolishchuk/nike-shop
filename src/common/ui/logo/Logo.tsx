import React from 'react';

import Link from 'next/link';

import { NikeIcon } from '@/common/ui';

export const Logo = () => {
  return (
    <Link href={'/'} className={'hover:text-black-200'}>
      <NikeIcon className={'ml-3 h-[60px] w-[60px] scale-[1.33] fill-inherit'} />
    </Link>
  );
};
