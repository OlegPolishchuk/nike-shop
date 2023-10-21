import React from 'react';

import clsx from 'clsx';

import { Filter } from './Filter';

import { ExistingSizes } from '@/components/sections/goodsSection/constsnts/constants';
import { FiltersState } from '@/components/sections/goodsSection/types/types';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  filters: FiltersState;
}

export const SizesFilter = ({ filters, setFilters }: Props) => {
  const handleSetActiveSize = (size: string) => {
    setFilters((prevState) => ({ ...prevState, size }));
  };

  return (
    <Filter title={`Sizes`}>
      <div className={'grid grid-cols-3 gap-2'}>
        {ExistingSizes.map((size, index) => (
          <button
            key={index}
            className={clsx(
              'rounded-md border border-gray-200 px-4 py-2 text-center hover:border-primary',
              filters.size === size && 'border-primary',
              index === ExistingSizes.length - 1 && 'col-span-3',
            )}
            onClick={() => handleSetActiveSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </Filter>
  );
};
