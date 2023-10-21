import React from 'react';

import { Filter } from './Filter';

import { Typography } from '@/common/ui';
import { Gender, GenderValue } from '@/components/sections/goodsSection/constsnts/constants';
import { FiltersState } from '@/components/sections/goodsSection/types/types';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  filters: FiltersState;
}

export const GenderFilter = ({ setFilters, filters }: Props) => {
  const activeGendersCount = Object.values(filters.genders).filter((value) => value).length;
  const handleChangeGender = (gender: GenderValue) => {
    setFilters((prevState) => ({
      ...prevState,
      genders: { ...prevState.genders, [gender]: !prevState.genders[gender] },
    }));
  };

  return (
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
  );
};
