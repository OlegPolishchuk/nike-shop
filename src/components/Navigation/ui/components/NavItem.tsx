import React from 'react';

import Link from 'next/link';

import { SubItemNav } from './SubItemNav';

import { Typography } from '@/common/ui';
import { NavItem } from '@/components/Navigation/types/types';

interface Props {
  className?: string;
  navItem: NavItem;
}
export const ItemNav = ({ navItem, className }: Props) => {
  const { sublist, href, title } = navItem;

  return (
    <li
      className={`group/subNav flex items-center ${className} border-b-2 border-transparent hover:border-black-100`}
    >
      <Link
        href={href}
        className={'flex h-[58px] items-center  p-[12px] font-medium transition-all '}
      >
        <Typography tag={'span'} variant={'body-1'}>
          {title}
        </Typography>
      </Link>

      {sublist && <SubItemNav sublist={sublist} />}
    </li>
  );
};
