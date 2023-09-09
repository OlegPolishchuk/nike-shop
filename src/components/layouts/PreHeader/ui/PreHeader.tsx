import React from 'react';

import { IconList } from './components/IconList';
import { NavList } from './components/NavList';

export const PreHeader = () => {
  return (
    <div
      className={
        'flex flex-col items-center justify-between bg-gray-100 px-[36px] py-1 sm:h-[36px] sm:flex-row sm:py-0'
      }
    >
      <IconList />

      <NavList />
    </div>
  );
};
