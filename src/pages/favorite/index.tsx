import React from 'react';

import { GetServerSideProps } from 'next';

import { getBannerSection, getHomePage } from '@/api';
import { useLocalStorageState } from '@/common/hooks/useStorage';
import { GoodsCard } from '@/common/ui';
import { getMainLayout } from '@/components/layouts';
import { Banner, BaseSection, FavoriteSection } from '@/components/sections';
import { Good } from '@/components/sections/goodsSection/types/types';
import { GetSectionBannerQuery } from '@/graphql/__generated__';

interface Props {
  bannerSection: GetSectionBannerQuery['bannerSection'];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const { homePage } = await getHomePage();
  const { bannerSection } = await getBannerSection(
    homePage.data.attributes.banner_section?.data.id,
  );

  return {
    props: {
      bannerSection,
    },
  };
};

const Favorite = ({ bannerSection }: Props) => {
  return (
    <>
      <FavoriteSection bannerSection={bannerSection} />
    </>
  );
};

Favorite.getLayout = getMainLayout;
export default Favorite;
