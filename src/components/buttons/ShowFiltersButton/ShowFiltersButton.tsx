import React, { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import { FiltersIcon, Typography } from '@/common/ui';

interface Props {
  isShowFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const ShowFiltersButton = ({ className, setShowFilter, isShowFilter }: Props) => {
  return (
    <button
      className={clsx('flex gap-3', className && className)}
      onClick={() => setShowFilter((prevState) => !prevState)}
    >
      <Typography tag={'span'} variant={'title-3'} className={'hidden md:block'}>
        {isShowFilter ? 'Hide' : 'Show'} Filters
      </Typography>

      <FiltersIcon />
    </button>
  );
};
