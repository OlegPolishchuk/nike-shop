import React from 'react';

import Link from 'next/link';

import { NikeIcon } from '@/common/ui';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <Link href={'/'} className={`hover:text-black-200 ${className && className}`}>
      <NikeIcon className={'ml-3 h-[60px] w-[60px] scale-[1.33] fill-inherit'} />
    </Link>
  );
};
