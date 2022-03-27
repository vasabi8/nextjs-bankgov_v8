import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const SystemicImportanceDash = dynamic(() => import('../../modules/Dashboards/financial-stability/systemic-importance/'), {
  loading: () => <PageLoader />,
});

const SystemicImportance = () => {
  return <SystemicImportanceDash />;
};

export default SystemicImportance;
