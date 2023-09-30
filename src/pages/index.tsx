import React from 'react';

import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    redirect: {
      destination: params ? `/${params}` : '/ru',
      permanent: true,
    },
  };
};

const Home = () => {
  return null;
};

export default Home;
