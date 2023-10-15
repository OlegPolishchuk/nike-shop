import React, { useEffect, useState } from 'react';

import { flushSync } from 'react-dom';
import { set } from 'zod';

import { Good } from '../types/types';

import { Filters } from './components/Filters';
import { GoodsList } from './components/GoodsList';
import { SortBy } from './components/SortBy';

import { getGoodsPage, SortingParams } from '@/api';
import { Default_Page_Size } from '@/common/constants/constants';
import { Typography } from '@/common/ui';

interface Props {
  goods: Good[];
  pageTitle: string;
}

export const GoodsSection = ({ goods, pageTitle }: Props) => {
  const [allGoods, setAllGoods] = useState(goods);

  const [params, setParams] = useState<SortingParams>({
    pagination: {
      pageTitle,
      page: 1,
    },
    sort: [''],
  });

  const handleSetAllGoods = (newGoods: Good[]) => {
    setAllGoods((prevState) => [...prevState, ...newGoods]);
  };

  const handleRefetchGoodsWithParams = async (params: Partial<SortingParams>) => {
    const res = await getGoodsPage({ pagination: { pageTitle }, ...params });
    const goods = res.sectionShoes.data || [];

    if (params.pagination?.page !== 1) {
      return setAllGoods([...allGoods, ...goods]);
    }

    setAllGoods(goods as Good[]);
  };

  const handleSetParams = (params: Partial<SortingParams>) => {
    setParams((prevState) => ({ ...prevState, ...params }));

    handleRefetchGoodsWithParams(params);
  };

  return (
    <section className={'flex flex-col gap-[24px] px-[14px] pb-[20px] sm:px-[36px]'}>
      <div className={'relative flex items-end justify-between bg-light'}>
        <Typography variant={'title-2'}>
          {pageTitle} ({goods.length})
        </Typography>

        <SortBy params={params} setParams={handleSetParams} />
      </div>

      <div className={'mb-[70px] flex gap-10'}>
        <Filters params={params} setParams={handleSetParams} />

        <GoodsList
          goods={allGoods}
          params={params}
          setAllGoods={handleSetAllGoods}
          setParams={handleSetParams}
        />
      </div>
    </section>
  );
};
