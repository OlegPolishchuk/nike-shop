import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

import { Good } from '../../types/types';

import { getGoodsPage } from '@/api';
import { Default_Page_Size } from '@/common/constants/constants';
import { GoodsCard } from '@/common/ui';

const Item_Index_For_Loading = 7;

interface Props {
  goods: Good[];
  currentPage: number;
  setAllGoods: (goods: Good[]) => void;
  setCurrentPage: (page: number) => void;
}

export const GoodsList = ({ setAllGoods, setCurrentPage, currentPage, goods }: Props) => {
  const router = useRouter();

  const { ref: lastItemRef, inView } = useInView({
    threshold: 1,
  });

  const pageTitle = router.query.pageTitle;
  const stringPageTitle = pageTitle as string;

  const loadMore = async (page: number) => {
    return await getGoodsPage({
      pagination: {
        pageTitle: stringPageTitle,
        page: page,
      },
    });
  };

  useEffect(() => {
    if (inView) {
      if (goods.length < currentPage * Default_Page_Size) return;

      const nextPage = currentPage + 1;

      loadMore(nextPage)
        .then((res) => {
          console.log(res.sectionShoes.data);
          return res.sectionShoes.data;
        })
        .then((res) => {
          setAllGoods(res as Good[]);
          setCurrentPage(nextPage);
        });
    }
  }, [inView]);

  // console.log('allGoods =', goods);
  // сделать условие если inView + count на странице  = limit

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
