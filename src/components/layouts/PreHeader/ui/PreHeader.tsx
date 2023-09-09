import React from 'react';

import clsx from 'clsx';

import { IconList } from './components/IconList';
import { NavList } from './components/NavList';

interface Props {
  className?: string;
}

export const PreHeader = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-between bg-gray-100 px-[36px] py-1 max-[960px]:hidden sm:h-[36px] sm:flex-row sm:py-0',
        className && className,
      )}
    >
      <IconList />

      <NavList />
    </div>
  );
};
