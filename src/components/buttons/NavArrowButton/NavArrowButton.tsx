import React from 'react';

import { IconButton, NavArrowIcon } from '@/common/ui';

interface Props {
  className?: string;
  onCLick: () => void;
}

export const NavArrowButton = ({ className, onCLick }: Props) => {
  return (
    <IconButton icon={<NavArrowIcon />} className={className && className} onClick={onCLick} />
  );
};
