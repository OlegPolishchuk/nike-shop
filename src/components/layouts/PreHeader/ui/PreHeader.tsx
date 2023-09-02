import React from 'react';

import { IconList } from './components/IconList';
import { NavList } from './components/NavList';

export const PreHeader = () => {
  return (
    <div className={'flex h-[36px] items-center justify-between bg-gray-100 px-[36px]'}>
      <IconList />

      <NavList />
    </div>
  );
};
