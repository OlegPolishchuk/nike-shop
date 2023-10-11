import React, { ChangeEvent, useState } from 'react';

import clsx from 'clsx';

import { SortingBy } from '../../constsnts/constants';

import { SortingParams } from '@/api';
import { ArrowIcon, Typography } from '@/common/ui';

interface Props {
  refetch: (params: Partial<SortingParams>) => void;
}

export const SortBy = ({ refetch }: Props) => {
  const [sort, setSort] = useState(SortingBy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeSorting = (event: ChangeEvent<HTMLInputElement>) => {
    const sortedItem = SortingBy.find((item) => item.value === event.target.value);

    if (!sortedItem) return;

    setSort(sortedItem);
    setIsOpen(false);
    // refetch({ sort: sortedItem.value });
  };

  return (
    <div className={'relative'}>
      <button className={'flex items-center gap-3 '} onClick={handleOpen}>
        <p className={'flex items-center gap-2'}>
          <Typography tag={'span'} variant={'title-3'}>
            Sort By:
          </Typography>
          <Typography tag={'span'} variant={'body-1'}>
            {sort.title}
          </Typography>
        </p>

        <ArrowIcon
          className={clsx(
            'h-[15px] w-[15px] transition-all duration-[.3s]',
            isOpen ? 'rotate-[-90deg]' : 'rotate-90',
          )}
        />
      </button>

      <div
        className={clsx(
          'absolute top-[35px] z-10 flex w-full flex-col gap-3 rounded-b-md bg-light px-2 py-3 text-right transition-all delay-100 duration-[.3s]',
          isOpen ? 'flex max-h-[500px]' : 'max-h-0 opacity-0',
        )}
      >
        {SortingBy.map((param, index) => (
          <label
            key={index}
            className={clsx(
              'cursor-pointer hover:text-black-200',
              sort.title === param.title && 'text-black-200',
            )}
          >
            <input
              type={'radio'}
              name={'sort'}
              value={param.value}
              onChange={handleChangeSorting}
              checked={param.value === sort.value}
              className={'sr-only'}
            />

            <Typography variant={'body-1'}>{param.title}</Typography>
          </label>
        ))}
      </div>
    </div>
  );
};
