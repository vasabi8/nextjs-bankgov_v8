import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../@jumbo/components/PageComponents/PageLoader';

const MainPage = dynamic(() => import('../modules/Pages/MainPage'), {
  loading: () => <PageLoader />,
});

const HomePage = () => {
  return <MainPage />;
};

export default HomePage;
