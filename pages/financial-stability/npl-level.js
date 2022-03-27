import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const NplLevelDash = dynamic(() => import('../../modules/Dashboards/financial-stability/npl-level/'), {
  loading: () => <PageLoader />,
});

const NplLevel = () => {
  return <NplLevelDash />;
};

export default NplLevel;
