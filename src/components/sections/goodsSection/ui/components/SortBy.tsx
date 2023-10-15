import React, { ChangeEvent, useState } from 'react';

import clsx from 'clsx';

import { SortingBy } from '../../constsnts/constants';

import { PaginationParams, SortingParams } from '@/api';
import { ArrowIcon, Typography } from '@/common/ui';

interface Props {
  setParams: (params: Partial<SortingParams>) => void;
  params: SortingParams;
}

export const SortBy = ({ setParams, params }: Props) => {
  const [sort, setSort] = useState(SortingBy[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log('params =', params);
  const handleChangeSorting = (event: ChangeEvent<HTMLInputElement>) => {
    const sortedItem = SortingBy.find((item) => item.value === event.target.value);

    if (!sortedItem) return;

    setSort(sortedItem);
    setIsOpen(false);

    setParams({
      ...params,
      sort: [sortedItem.value],
      pagination: { ...params.pagination, page: 1 },
    });
  };

  return (
    <div className={'align-right min-w-[150px] bg-light'}>
      <div className={'relative z-20 flex h-[72px] w-full items-end justify-end bg-light'}>
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
      </div>

      <div
        className={clsx(
          'absolute right-0 z-10 flex min-w-[150px] flex-col gap-3 rounded-b-md bg-light px-4 py-4 text-right transition-all duration-[.2s]',
          isOpen ? 'transform-x-[150%] flex max-h-[500px]' : 'translate-y-[-100%]',
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
