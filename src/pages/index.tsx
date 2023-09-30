import React from 'react';

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return {
    redirect: {
      destination: BaseUrl + '/ru',
      permanent: true,
    },
    props: {},
  };
};

const Home = () => {
  return null;
};

export default Home;
