import React, { useState } from 'react';

import clsx from 'clsx';

import { ExistingSizes, Gender, GenderValue } from '../../constsnts/constants';

import { Filter } from './Filter';

import { SortingParams } from '@/api';
import { Button, Typography } from '@/common/ui';
import { FiltersState } from '@/components/sections/goodsSection/types/types';

interface Props {
  setParams: (params: Partial<SortingParams>) => void;
  params: SortingParams;
}

export const Filters = ({ params, setParams }: Props) => {
  const [filters, setFilters] = useState<FiltersState>({
    genders: {
      [GenderValue.MEN]: false,
      [GenderValue.WOMEN]: false,
      [GenderValue.UNISEX]: true,
    },
    size: '',
    priceInterval: [
      { checked: false, value: { from: 0, to: 25 } },
      { checked: false, value: { from: 25, to: 50 } },
      { checked: false, value: { from: 50, to: 100 } },
      { checked: false, value: { from: 100, to: 150 } },
      { checked: false, value: { from: 150, to: Infinity } },
    ],
  });

  const activeGendersCount = Object.values(filters.genders).filter((value) => value).length;

  const handleChangeGender = (gender: GenderValue) => {
    setFilters((prevState) => ({
      ...prevState,
      genders: { ...prevState.genders, [gender]: !prevState.genders[gender] },
    }));
  };

  const handleSetActiveSize = (size: string) => {
    setFilters((prevState) => ({ ...prevState, size }));
  };

  const handlePriceInterval = (interval: { from: number; to: number }) => {
    const { priceInterval } = filters;

    const currentInterval = priceInterval.find(
      (filterInterval) => filterInterval.value === interval,
    );
    const currentIntervalIndex = priceInterval.findIndex(
      (interval) => interval === currentInterval,
    );

    if (!currentInterval) return;
    if (currentIntervalIndex < 0) return;

    setFilters((prevState) => ({
      ...prevState,
      priceInterval: priceInterval.map((interval) => ({
        ...interval,
        checked: interval.value === currentInterval.value ? !interval.checked : interval.checked,
      })),
    }));
  };

  const handleApplyFilters = () => {
    let genders = (Object.keys(filters.genders) as GenderValue[]).filter(
      (key) => filters.genders[key],
    );

    setParams({
      ...params,
      filters: {
        ...params.filters,
        sizes: { title: filters.size },
        gender: genders,
      },
      pagination: { ...params.pagination, page: 1 },
    });
  };

  return (
    <div className={'flex w-[300px] flex-col transition-[height] duration-300'}>
      <Filter title={`Gender (${activeGendersCount})`}>
        <div className={'flex flex-col gap-1'}>
          {Gender.map((gender, index) => (
            <label key={index} className={'flex cursor-pointer items-center gap-3'}>
              <input
                className={'h-[20px] w-[20px] accent-black'}
                type={'checkbox'}
                value={gender.value}
                checked={filters.genders[gender.value]}
                onChange={() => handleChangeGender(gender.value)}
              />

              <Typography tag={'span'} variant={'title-3'}>
                {gender.title}
              </Typography>
            </label>
          ))}
        </div>
      </Filter>

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

      <Filter title={`Shop by Price`}>
        <div className={'flex flex-col gap-2'}>
          {filters.priceInterval.map((interval, index) => (
            <label key={index} className={'flex cursor-pointer items-center gap-3'}>
              <input
                className={'h-[20px] w-[20px] accent-black'}
                type={'checkbox'}
                value={interval.value.from}
                checked={interval.checked}
                onChange={() => handlePriceInterval(interval.value)}
              />

              <Typography tag={'span'} variant={'title-3'}>
                from {interval.value.from} to {interval.value.to}
              </Typography>
            </label>
          ))}
        </div>
      </Filter>

      <Button className={'mt-10'} onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};
