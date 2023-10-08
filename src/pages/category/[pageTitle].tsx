import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getBannerSection, getGoodsPage, getHomePage } from '@/api';
import { getMainLayout } from '@/components/layouts';
import { Banner, GoodsSection } from '@/components/sections';
import { GetSectionBannerQuery, PageGoodsFragment } from '@/graphql/client';

interface Props {
  goodsPages: PageGoodsFragment;
  bannerSection: GetSectionBannerQuery['bannerSection'];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, locale }) => {
  const { pageTitle } = params as { pageTitle: string };

  const { homePage } = await getHomePage();
  const { bannerSection } = await getBannerSection(
    homePage.data.attributes.banner_section?.data.id,
  );
  const { goodsPages } = await getGoodsPage({ pageTitle });

  console.log(goodsPages);

  return {
    props: {
      goodsPages: goodsPages.data[0],
      bannerSection,
    },
  };
};

const GoodsPage = ({
  goodsPages,
  bannerSection,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, good: goodsList } = goodsPages.attributes;

  console.log(goodsList);
  return (
    <>
      {bannerSection && <Banner data={bannerSection.data.attributes} className={'mb-[48px]'} />}
      <GoodsSection goods={goodsList} title={title} />
    </>
  );
};

GoodsPage.getLayout = getMainLayout;

export default GoodsPage;
