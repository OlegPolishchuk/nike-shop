import React, { useState } from 'react';

import { Good, Goods } from '../types/types';

import { Filters } from './components/Filters';
import { GoodsList } from './components/GoodsList';

import { Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import { SortingBy } from '@/components/sections/goodsSection/constsnts/constants';
import { SortBy } from '@/components/sections/goodsSection/ui/components/SortBy';

interface Props {
  goods: Goods;
  title: string;
}

export const GoodsSection = ({ goods, title }: Props) => {
  const [allGoods, setAllGoods] = useState(goods);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSetAllGoods = (newGoods: Good) => {
    setAllGoods((prevState) => [...prevState, newGoods]);
  };
  const handleSetPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  return (
    <BaseSection>
      <div className={'relative flex justify-between'}>
        <Typography variant={'title-2'}>
          {title} ({goods.length})
        </Typography>

        <SortBy />
      </div>

      <div className={'mb-[70px] flex gap-10'}>
        <Filters />

        <GoodsList
          goods={allGoods}
          currentPage={currentPage}
          setAllGoods={handleSetAllGoods}
          setCurrentPage={handleSetPage}
        />
      </div>
    </BaseSection>
  );
};
