import React from 'react';

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/ru',
      permanent: true,
    },
    props: {},
  };
};

const Home = () => {
  return null;
};

export default Home;
