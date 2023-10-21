import React, { useState } from 'react';

import { SubItemMobile } from './SubItemMobile';

import { ArrowIcon, Typography } from '@/common/ui';
import { NavItem } from '@/components/Navigation/types/types';

interface Props {
  className?: string;
  navItem: NavItem;
  closeMenu: () => void;
}

const showClassName = 'translate-x-0';
const hideClassName = 'translate-x-[100%]';

export const NavItemMobile = ({ navItem, className, closeMenu }: Props) => {
  const { sublist, href, title } = navItem;

  const [subItemClassName, setSubItemClassName] = useState(hideClassName);

  const handleShowSubItem = () => {
    setSubItemClassName(showClassName);
  };

  const handleHideSubItem = () => {
    setSubItemClassName(hideClassName);
  };

  const handleCloseMenu = () => {
    handleHideSubItem();
    closeMenu();
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

        {sublist && <ArrowIcon className={'h-[16px] w-[16px] fill-gray-300 font-normal'} />}
      </button>

      {sublist && (
        <SubItemMobile
          sublist={sublist}
          className={subItemClassName}
          onHide={handleHideSubItem}
          closeMenu={handleCloseMenu}
        />
      )}
    </li>
  );
};
