import React from 'react';

import { IconButton, SearchIcon } from '@/common/ui';

interface Props {
  className?: string;
  onClick: () => void;
}

export const SearchButton = ({ className, onClick }: Props) => {
  return (
    <IconButton className={`${className && className}`} icon={<SearchIcon />} onClick={onClick} />
  );
};
