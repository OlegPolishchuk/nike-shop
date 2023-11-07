import React, { useCallback, useState } from 'react';

import clsx from 'clsx';

import { Good } from '../types/types';

import { Filters } from './components/Filters/Filters';
import { GoodsList } from './components/GoodsList';
import { SortBy } from './components/SortBy';

import { getGoodsPage, SortingParams } from '@/api';
import { splitSolidText } from '@/common/helpers/splitSolidText';
import { Typography } from '@/common/ui';
import { ShowFiltersButton } from '@/components/buttons';
import { useGetGoods, useQueryContext, useSetGoods } from '@/providers';

interface Props {
  pageTitle: string;
}

export const GoodsSection = ({ pageTitle }: Props) => {
  const { goods: allGoods, total } = useGetGoods();
  const setAllGoods = useSetGoods();
  const queryParam = useQueryContext();

  const [isShowFilter, setShowFilter] = useState(true);

  const [params, setParams] = useState<SortingParams>({
    pagination: {
      pageTitle,
      page: 1,
    },
    sort: [''],
  });

  const handleRefetchGoodsWithParams = useCallback(
    async (params: Partial<SortingParams>) => {
      const res = await getGoodsPage({
        pagination: { pageTitle },
        ...params,
        filters: {
          ...params.filters,
          query: queryParam,
        },
      });
      const goods = (res.sectionShoes.data || []) as Good[];
      const total = res.sectionShoes.meta.pagination.total;

      if (params.pagination?.page !== 1) {
        return setAllGoods({ goods: [...allGoods, ...goods], total });
      }

      setAllGoods({ goods: goods as Good[], total });
    },
    [allGoods],
  );

  const handleSetParams = useCallback(
    (newParams: Partial<SortingParams>) => {
      setParams({ ...params, ...newParams });

      handleRefetchGoodsWithParams(newParams);
    },
    [params, handleRefetchGoodsWithParams],
  );

  return (
    <section className={'md:align-end flex flex-col gap-[24px] px-[14px] pb-[20px] sm:px-[36px]'}>
      <div
        className={'relative flex flex-col justify-between bg-light md:flex-row md:items-center'}
      >
        <Typography variant={'title-2'} className={'relative z-20 mt-5 bg-light'}>
          {splitSolidText(pageTitle)} ({total})
        </Typography>

        <div className={'flex items-end justify-between gap-8'}>
          <ShowFiltersButton
            isShowFilter={isShowFilter}
            setShowFilter={setShowFilter}
            className={'order-1'}
          />

          <SortBy params={params} setParams={handleSetParams} className={'md:order-2'} />
        </div>
      </div>

      <div className={'relative mb-[70px] flex flex-col transition-all md:flex-row md:gap-10'}>
        <Filters
          params={params}
          setParams={handleSetParams}
          className={clsx(
            'z-10 [transition:height_.2s_.1s,margin_.1s_.1s]',
            isShowFilter
              ? 'absolute ml-0 max-h-full md:static'
              : 'ml-[-110%]  max-h-0 md:ml-[-350px]',
          )}
        />

        <GoodsList
          className={clsx(
            'w-full [transition:margin_.2s_.1s] md:mt-0',
            isShowFilter ? 'mt-[350px]' : 'mt-0',
          )}
          goods={allGoods}
          params={params}
          // setAllGoods={handleSetAllGoods}
          setParams={handleSetParams}
        />
      </div>
    </section>
  );
};
