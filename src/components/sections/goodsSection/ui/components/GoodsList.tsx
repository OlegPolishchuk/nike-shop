import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { Good } from '../../types/types';

import { getGoodsPage, SortingParams } from '@/api';
import { Default_Page_Size } from '@/common/constants/constants';
import { GoodsCard } from '@/common/ui';

const Item_Index_For_Loading = 7;

interface Props {
  goods: Good[];
  params: SortingParams;
  setAllGoods: (goods: Good[]) => void;
  setParams: (params: Partial<SortingParams>) => void;
}

export const GoodsList = ({ setAllGoods, setParams, goods, params }: Props) => {
  const { ref: lastItemRef, inView } = useInView({
    threshold: 1,
  });

  const currentPage = params.pagination.page || 1;

  const loadMore = async (params: SortingParams) => {
    return await getGoodsPage({ ...params });
  };

  useEffect(() => {
    if (inView) {
      if (goods.length < currentPage * Default_Page_Size) return;

      const nextPage = currentPage + 1;
      const newParams = { ...params, pagination: { ...params.pagination, page: nextPage } };

      setParams(newParams);

      // loadMore(newParams)
      //   .then((res) => {
      //     return res.sectionShoes.data;
      //   })
      //   .then((res) => {
      //     setAllGoods(res as Good[]);
      //     setParams(newParams);
      //   });
    }
  }, [inView]);

  return (
    <div
      className={
        'flex w-full flex-col justify-between gap-5 gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3'
      }
    >
      {goods.map((product, index) => (
        <GoodsCard
          key={product.id}
          card={product}
          ref={index === Item_Index_For_Loading ? lastItemRef : null}
        />
      ))}
    </div>
  );
};
