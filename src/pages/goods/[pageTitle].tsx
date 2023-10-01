import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { gql, PageGoodsFragment } from '@/graphql/client';

interface Props {
  goodsPages: PageGoodsFragment;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const { pageTitle } = params as { pageTitle: string };

  const { goodsPages } = await gql.getGoodsPage({
    pageTitle: { eq: pageTitle },
  });

  console.log(goodsPages);

  return {
    props: {
      goodsPages: goodsPages.data[0],
    },
  };
};

const GoodsPage = ({ goodsPages }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(goodsPages);
  return <div></div>;
};

export default GoodsPage;
