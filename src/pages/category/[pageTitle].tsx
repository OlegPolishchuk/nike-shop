import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getBannerSection, getGoodsPage, getHomePage } from '@/api';
import { getMainLayout } from '@/components/layouts';
import { Banner, GoodsSection } from '@/components/sections';
import { GetSectionBannerQuery, PageGoodsFragment } from '@/graphql/client';

interface Props {
  goodsPages: PageGoodsFragment;
  bannerSection: GetSectionBannerQuery['bannerSection'];
  pageTitle: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, req, locale }) => {
  const { pageTitle } = params as { pageTitle: string };

  const { homePage } = await getHomePage();
  const { bannerSection } = await getBannerSection(
    homePage.data.attributes.banner_section?.data.id,
  );
  const { goodsPages } = await getGoodsPage({ pagination: { pageTitle } });

  console.log(goodsPages.data[0]);

  return {
    props: {
      goodsPages: goodsPages.data[0],
      bannerSection,
      pageTitle,
    },
  };
};

const GoodsPage = ({
  goodsPages,
  bannerSection,
  pageTitle,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, good: goodsList } = goodsPages.attributes;

  console.log('goodsList =', goodsList);

  return (
    <>
      {bannerSection && <Banner data={bannerSection.data.attributes} className={'mb-[48px]'} />}
      <GoodsSection key={title} goods={goodsList} title={title} pageTitle={pageTitle} />
    </>
  );
};

GoodsPage.getLayout = getMainLayout;

export default GoodsPage;
