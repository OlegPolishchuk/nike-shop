import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getBannerSection, getGoodsPage, getHomePage } from '@/api';
import { getMainLayout } from '@/components/layouts';
import { Banner, GoodsSection } from '@/components/sections';
import { GetSectionBannerQuery, GetSectionShoeQuery } from '@/graphql/client';

interface Props {
  goodsList: GetSectionShoeQuery['sectionShoe']['data'][];
  bannerSection: GetSectionBannerQuery['bannerSection'];
  pageTitle: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const { pageTitle } = params as { pageTitle: string };

  const { homePage } = await getHomePage();
  const { bannerSection } = await getBannerSection(
    homePage.data.attributes.banner_section?.data.id,
  );
  const { sectionShoes } = await getGoodsPage({ pagination: { pageTitle } });
  const goodsList = sectionShoes.data.map((product) => product);

  return {
    props: {
      goodsList,
      bannerSection,
      pageTitle,
    },
  };
};

const GoodsPage = ({
  goodsList,
  bannerSection,
  pageTitle,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {bannerSection && <Banner data={bannerSection.data.attributes} />}
      <GoodsSection key={pageTitle} goods={goodsList} pageTitle={pageTitle} />
    </>
  );
};

GoodsPage.getLayout = getMainLayout;

export default GoodsPage;
