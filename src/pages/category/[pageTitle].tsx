import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getBannerSection, getGoodsPage, getHomePage } from '@/api';
import { GoodsCard, Typography } from '@/common/ui';
import { getMainLayout } from '@/components/layouts';
import { Banner, BaseSection } from '@/components/sections';
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
  const { goodsPages } = await getGoodsPage(pageTitle);

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

      <BaseSection>
        <Typography variant={'title-2'}>
          {title} ({goodsList.length})
        </Typography>

        <div className={'mb-[70px] flex gap-10'}>
          <div className={'w-[300px]'}>Filters</div>

          <div
            className={
              'flex w-full flex-col justify-between gap-5 gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3'
            }
          >
            {goodsList.map((good) => (
              <GoodsCard key={good.id} card={good} />
            ))}
          </div>
        </div>
      </BaseSection>
    </>
  );
};

GoodsPage.getLayout = getMainLayout;

export default GoodsPage;
