import React from 'react';

import { navigationData } from '../constants/navigationData';

import { ItemNav } from './components/NavItem';

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={`flex items-center ${className}`}>
      {navigationData.map((navItem) => (
        <ItemNav key={navItem.title} navItem={navItem} />
      ))}
    </nav>
  );
};
