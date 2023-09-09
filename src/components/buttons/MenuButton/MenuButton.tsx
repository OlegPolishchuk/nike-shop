import React, { ComponentPropsWithRef } from 'react';

import { IconButton, MenuIcon } from '@/common/ui';

interface Props {
  onClick: () => void;
  className?: string;
}

export const MenuButton = ({ onClick, className }: Props) => {
  return (
    <IconButton icon={<MenuIcon />} className={`p-0 ${className && className}`} onClick={onClick} />
  );
};
