import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const EconomicRatiosDash = dynamic(() => import('../../modules/Dashboards/financial-stability/economic-ratios/'), {
  loading: () => <PageLoader />,
});

const EconomicRatios = () => {
  return <EconomicRatiosDash />;
};

export default EconomicRatios;
