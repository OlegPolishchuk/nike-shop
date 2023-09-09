import React from 'react';

import { useMediaQuery } from '@/common/hooks';
import { Logo } from '@/common/ui';
import { MobileNavigation, Navigation, SearchInput } from '@/components';
import { CartButton, LikeButton, SearchButton, UserButton } from '@/components/buttons';

export const Header = () => {
  const isLargeScreen = useMediaQuery('(min-width: 960px)');

  return (
    <header
      className={'relative flex h-[60px] items-center justify-between px-[14px] sm:px-[36px]'}
    >
      {isLargeScreen ? (
        <>
          <div>
            <Logo />
          </div>

          <div className={'flex grow justify-end'}>
            <Navigation className={'mr-[5%] lg:mr-[15%]'} />
          </div>

          <div className={'flex gap-2'}>
            <SearchInput />
            <LikeButton />
            <CartButton />
          </div>
        </>
      ) : (
        <>
          <div>
            <Logo />
          </div>

          <div className={'flex items-center gap-4'}>
            <SearchButton />
            <CartButton />
            <UserButton />
            <MobileNavigation />
          </div>
        </>
      )}
    </header>
  );
};
