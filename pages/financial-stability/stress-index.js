import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const StressIndexDash = dynamic(() => import('../../modules/Dashboards/financial-stability/stress-index/'), {
  loading: () => <PageLoader />,
});

const StressIndexMain = () => {
  return <StressIndexDash />;
};

export default StressIndexMain;
