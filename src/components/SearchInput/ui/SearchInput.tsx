import React from 'react';

import { IconButton, SearchIcon } from '@/common/ui';

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  return (
    <div className={`relative h-[40px] w-[180px] rounded-[20px] bg-gray-100 ${className}`}>
      <IconButton className={'absolute left-[2px] top-[2px]'} icon={<SearchIcon />} />
      <input
        className={
          'h-full w-full rounded-[20px] bg-transparent py-[8px] pl-[48px] pr-[20px] hover:bg-gray-200 focus:outline-none'
        }
        placeholder={'Search'}
      />
    </div>
  );
};
