import React, { useEffect } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getBannerSection, getGoodsPage, getHomePage } from '@/api';
import { getMainLayout } from '@/components/layouts';
import { Banner, GoodsSection } from '@/components/sections';
import { GetSectionBannerQuery, GetSectionShoeQuery } from '@/graphql/client';
import { useSetGoods } from '@/providers';

interface Props {
  goodsList: GetSectionShoeQuery['sectionShoe']['data'][];
  bannerSection: GetSectionBannerQuery['bannerSection'];
  pageTitle: string;
  total: number;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const { pageTitle } = params as { pageTitle: string };

  const { homePage } = await getHomePage();
  const { bannerSection } = await getBannerSection(
    homePage.data.attributes.banner_section?.data.id,
  );
  const { sectionShoes } = await getGoodsPage({ pagination: { pageTitle } });
  const goodsList = sectionShoes.data.map((product) => product);
  const total = sectionShoes.meta.pagination.total;

  return {
    props: {
      goodsList,
      bannerSection,
      pageTitle,
      total,
    },
  };
};

const GoodsPage = ({
  goodsList,
  bannerSection,
  pageTitle,
  total,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setAllGoods = useSetGoods();

  useEffect(() => {
    setAllGoods({ goods: goodsList, total });
  }, [goodsList]);

  return (
    <>
      {bannerSection && <Banner data={bannerSection.data.attributes} />}
      <GoodsSection pageTitle={pageTitle} />
    </>
  );
};

GoodsPage.getLayout = getMainLayout;

export default GoodsPage;
