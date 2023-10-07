import React from 'react';

import { GetServerSideProps } from 'next';

import { ShoeSection } from '@/components';
import { getMainLayout } from '@/components/layouts';
import { GetSectionShoeQuery, gql } from '@/graphql/client';

interface Props {
  sectionShoe: GetSectionShoeQuery['sectionShoe'];
}
export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const { id } = params as { id: string };

  const { sectionShoe } = await gql.getSectionShoe({ id });

  return {
    props: {
      sectionShoe,
    },
  };
};

const ProductPage = ({ sectionShoe }: Props) => {
  return <ShoeSection sectionShoe={sectionShoe} />;
};

ProductPage.getLayout = getMainLayout;

export default ProductPage;
