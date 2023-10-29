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
      const goods = res.sectionShoes.data || [];
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
    <section className={'flex flex-col gap-[24px] px-[14px] pb-[20px] sm:px-[36px]'}>
      <div className={'relative flex items-end justify-between bg-light'}>
        <Typography variant={'title-2'}>
          {splitSolidText(pageTitle)} ({total})
        </Typography>

        <div className={'flex items-end gap-8'}>
          <ShowFiltersButton isShowFilter={isShowFilter} setShowFilter={setShowFilter} />

          <SortBy params={params} setParams={handleSetParams} />
        </div>
      </div>

      <div className={'mb-[70px] flex gap-10 '}>
        <Filters
          params={params}
          setParams={handleSetParams}
          className={clsx('transition-all', isShowFilter ? 'ml-0' : 'ml-[-350px]')}
        />

        <GoodsList
          className={clsx('w-full transition-all')}
          goods={allGoods}
          params={params}
          // setAllGoods={handleSetAllGoods}
          setParams={handleSetParams}
        />
      </div>
    </section>
  );
};
