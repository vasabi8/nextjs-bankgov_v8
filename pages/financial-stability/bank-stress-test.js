import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const StressTestDash = dynamic(() => import('../../modules/Dashboards/financial-stability/bank-stress-test/'), {
  loading: () => <PageLoader />,
});

const StressTestAQR = () => {
  return <StressTestDash />;
};

export default StressTestAQR;
