import React from 'react';

import Link from 'next/link';

import { IconButton, LikeIcon, Logo, NikeIcon } from '@/common/ui';
import { Navigation, SearchInput } from '@/components';

export const Header = () => {
  return (
    <header className={'relative flex h-[60px] items-center px-[36px]'}>
      <Logo />

      <IconButton icon={<LikeIcon />} />

      <SearchInput />

      <Navigation />
    </header>
  );
};
