import React from 'react';

import { Filter } from './Filter';

import { Typography } from '@/common/ui';
import { PriceInterval } from '@/components/sections/goodsSection/constsnts/constants';
import { FiltersState } from '@/components/sections/goodsSection/types/types';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  filters: FiltersState;
}

export const PriceFilter = ({ filters, setFilters }: Props) => {
  const handleSetPriceInterval = (interval: { from: number; to: number }) => {
    setFilters((prevState) => ({ ...prevState, priceInterval: interval }));
  };

  return (
    <Filter title={`Shop by Price`}>
      <div className={'flex flex-col gap-2'}>
        {PriceInterval.map((interval, index) => (
          <label key={index} className={'flex cursor-pointer items-center gap-3'}>
            <input
              name={'interval'}
              className={'h-[20px] w-[20px] accent-black'}
              type={'radio'}
              value={interval.value.from}
              checked={interval.value === filters.priceInterval}
              onChange={() => handleSetPriceInterval(interval.value)}
            />

            <Typography tag={'span'} variant={'title-3'}>
              {/*from {interval.value.from} to {interval.value.to}*/}
              {interval.title}
            </Typography>
          </label>
        ))}
      </div>
    </Filter>
  );
};
