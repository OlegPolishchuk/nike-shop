import React from 'react';

import { GetStaticProps } from 'next';

import { getMainLayout } from '@/components/layouts';

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

const ProductPage = () => {
  return <div></div>;
};

ProductPage.getLayout = getMainLayout;

export default ProductPage;
