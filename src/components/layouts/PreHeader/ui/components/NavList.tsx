import React from 'react';

import Link from 'next/link';

import { LinkRoutes } from '../../constants/data';

import { SubList } from './SubList';

import { Typography } from '@/common/ui';

export const NavList = () => {
  return (
    <div className={'flex'}>
      {LinkRoutes.map((route, index) => {
        const lastIndex = LinkRoutes.length - 1;

        return (
          <div
            key={route.title}
            className={'group/sublist relative flex items-center pr-[2px] text-[12px]'}
          >
            <Link
              href={route.href}
              className={'mx-[8px] flex h-[34px] items-center hover:text-gray-300'}
            >
              <Typography tag={'span'} variant={'body-2'}>
                {route.title}
              </Typography>
            </Link>

            {route.subList && <SubList title={route.title} sublist={route.subList} />}

            {index !== lastIndex && <span className={'mr-4px'}>|</span>}
          </div>
        );
      })}
    </div>
  );
};
