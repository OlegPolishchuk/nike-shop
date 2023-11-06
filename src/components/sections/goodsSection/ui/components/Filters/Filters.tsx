import React, { useState } from 'react';

import clsx from 'clsx';

import { DefaultFilters, GenderValue } from '../../../constsnts/constants';

import { GenderFilter } from './GenderFilter';
import { PriceFilter } from './PriceFilter';
import { SizesFilter } from './SizesFilter';

import { SortingParams } from '@/api';
import { Button, CloseIcon } from '@/common/ui';
import { FiltersState } from '@/components/sections/goodsSection/types/types';

interface Props {
  setParams: (params: Partial<SortingParams>) => void;
  params: SortingParams;
  className?: string;
}

export const Filters = ({ params, setParams, className }: Props) => {
  const [filters, setFilters] = useState<FiltersState>(DefaultFilters);

  const handleApplyFilters = () => {
    let genders = (Object.keys(filters.genders) as GenderValue[]).filter(
      (key) => filters.genders[key],
    );

    const { from, to } = filters.priceInterval;

    setParams({
      ...params,
      filters: {
        ...params.filters,
        sizes: { title: filters.size },
        gender: genders,
        priceTo: to,
        priceFrom: from,
      },
      pagination: { ...params.pagination, page: 1 },
    });
  };

  const handleResetFilters = () => {
    const { genders, ...restDefaultFilters } = DefaultFilters;
    setFilters(DefaultFilters);

    if (filters !== DefaultFilters) {
      setParams({
        ...params,
        filters: {
          gender: [],
          ...restDefaultFilters,
        },
        pagination: { ...params.pagination, page: 1 },
      });
    }
  };

  return (
    <div
      className={clsx(
        'flex w-full flex-col bg-light transition-[height] duration-300 md:w-[300px]',
        className && className,
      )}
    >
      <GenderFilter filters={filters} setFilters={setFilters} />
      <SizesFilter filters={filters} setFilters={setFilters} />
      <PriceFilter filters={filters} setFilters={setFilters} />

      <Button
        className={'mt-10 max-w-[300px] self-center'}
        variant={'outlined'}
        endIcon={<CloseIcon />}
        onClick={handleResetFilters}
      >
        Reset filters
      </Button>

      <Button className={'mt-5 max-w-[300px] self-center'} onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};
