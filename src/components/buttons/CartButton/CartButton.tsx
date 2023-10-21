import React from 'react';

import Link from 'next/link';

import { BagIcon, IconButton } from '@/common/ui';

export const CartButton = () => {
  return (
    <Link href={'cart'}>
      <IconButton icon={<BagIcon />} />
    </Link>
  );
};
