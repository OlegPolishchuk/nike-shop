import React, { useState } from 'react';

import { SubItemMobile } from './SubItemMobile';

import { Typography } from '@/common/ui';
import { NavArrowButton } from '@/components/buttons';
import { NavItem } from '@/components/Navigation/types/types';

interface Props {
  className?: string;
  navItem: NavItem;
}

export const NavItemMobile = ({ navItem, className }: Props) => {
  const { sublist, href, title } = navItem;

  const [subItemClassName, setSubItemClassName] = useState('');

  const handleShowSubItem = () => {
    setSubItemClassName('translate-x-0');
  };

  const handleHideSubItem = () => {
    setSubItemClassName('');
  };

  return (
    <li className={`group/subNav ${className && className}`}>
      <button
        className={'flex w-full items-center justify-between p-[12px] font-medium transition-all'}
        onClick={handleShowSubItem}
      >
        <Typography tag={'span'} variant={'sub-title'}>
          {title}
        </Typography>

        {sublist && <NavArrowButton onCLick={handleShowSubItem} />}
      </button>

      {sublist && (
        <SubItemMobile sublist={sublist} className={subItemClassName} onHide={handleHideSubItem} />
      )}
    </li>
  );
};
