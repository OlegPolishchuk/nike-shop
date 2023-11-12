import React, { RefObject } from 'react';

import clsx from 'clsx';

import { GoodsCard } from '@/common/ui';
import { Banner, BaseSection, NothingToShow } from '@/components/sections';
import { GetSectionBannerQuery } from '@/graphql/__generated__';
import { useGetFavoriteGoods } from '@/providers/favoriteProductProvider/FavoriteProductProvider';

interface Props {
  bannerSection: GetSectionBannerQuery['bannerSection'];
  parentRef?: RefObject<any>;
}

export const FavoriteSection = ({ bannerSection }: Props) => {
  const favoriteGoods = useGetFavoriteGoods();

  return (
    <>
      {bannerSection && (
        <Banner
          data={bannerSection.data.attributes}
          className={clsx(!favoriteGoods.length ? 'mt-[-140px]' : 'mt-0')}
        />
      )}

      {!favoriteGoods.length ? (
        <NothingToShow />
      ) : (
        <BaseSection>
          <div
            className={
              'flex w-full flex-col justify-between gap-5 gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3'
            }
          >
            {favoriteGoods.map((product) => (
              <GoodsCard key={product.id} card={product} />
            ))}
          </div>
        </BaseSection>
      )}
    </>
  );
};
