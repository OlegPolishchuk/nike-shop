import React from 'react';

import { useRouter } from 'next/router';

import { useMediaQuery } from '@/common/hooks';
import { IconButton, LikeIcon, Logo } from '@/common/ui';
import { MobileNavigation, Navigation, SearchInput } from '@/components';
import { CartButton, UserButton } from '@/components/buttons';
import { Tooltip } from '@/components/tooltip';

export const Header = () => {
  const isLargeScreen = useMediaQuery('(min-width: 960px)');

  const router = useRouter();

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

            <Tooltip title={'go to favorite'}>
              <IconButton icon={<LikeIcon />} onClick={() => router.push('/favorite')}></IconButton>
            </Tooltip>

            <Tooltip title={'go to bag'}>
              <CartButton />
            </Tooltip>
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
