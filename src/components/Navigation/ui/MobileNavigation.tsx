import React, { useState } from 'react';

import { navigationData } from '../constants/navigationData';

import { NavItemMobile } from './components/NavItemMobile';

import { CloseButton, MenuButton } from '@/components/buttons';

const drawerContainerClassNamesHidden =
  'fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,.5)] opacity-0 [transition:all_.2s_.25s] invisible';
const drawerContainerClassNamesVisible =
  'fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,.5)] opacity-100 transition-all visible';

const drawerClassnamesVisible =
  'fixed top-0 right-0 z-100 w-[90%] h-full  bg-light shadow-lg [transition:all_.2s_.1s] translate-x-0';
const drawerClassnamesHidden =
  'fixed top-0 right-0 z-100 w-[90%] h-full  bg-light shadow-lg [transition:all_.2s_.1s] translate-x-[100%]';

export const MobileNavigation = () => {
  const [drawerContainerClassNames, setDrawerContainerClassNames] = useState(
    drawerContainerClassNamesHidden,
  );
  const [drawerClassNames, setDrawerClassName] = useState(drawerClassnamesHidden);

  const handleShowMenu = () => {
    setDrawerContainerClassNames(drawerContainerClassNamesVisible);
    setDrawerClassName(drawerClassnamesVisible);
  };

  const handleCloseMenu = () => {
    setDrawerClassName(drawerClassnamesHidden);
    setDrawerContainerClassNames(drawerContainerClassNamesHidden);
  };

  return (
    <>
      <MenuButton onClick={handleShowMenu} />

      <div className={drawerContainerClassNames}>
        <div className={drawerClassNames}>
          <div className={'flex h-[64px] items-center justify-end px-[14px]'}>
            <CloseButton onClick={handleCloseMenu} />
          </div>

          <div>
            <nav>
              {navigationData.map((navItem) => (
                <NavItemMobile key={navItem.title} navItem={navItem} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
