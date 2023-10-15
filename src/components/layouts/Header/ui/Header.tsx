import React from 'react';

import { useMediaQuery } from '@/common/hooks';
import { Logo } from '@/common/ui';
import { MobileNavigation, Navigation, SearchInput } from '@/components';
import { CartButton, LikeButton, SearchButton, UserButton } from '@/components/buttons';

export const Header = () => {
  const isLargeScreen = useMediaQuery('(min-width: 960px)');

  return (
    <header
      className={'relative z-30 flex h-[60px] items-center justify-between px-[14px] sm:px-[36px]'}
    >
      {isLargeScreen ? (
        <>
          <div>
            <Logo />
          </div>

          <div className={'flex grow justify-end'}>
            <Navigation className={'md:mr-[30%] lg:mr-[35%]'} />
          </div>

          <div className={'flex items-center gap-2'}>
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
            <SearchInput />
            <CartButton />
            <UserButton />
            <MobileNavigation />
          </div>
        </>
      )}
    </header>
  );
};
