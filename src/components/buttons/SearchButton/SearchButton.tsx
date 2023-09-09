import React from 'react';

import { IconButton, SearchIcon } from '@/common/ui';

interface Props {
  className?: string;
}

export const SearchButton = ({ className }: Props) => {
  return <IconButton className={`${className && className}`} icon={<SearchIcon />} />;
};
