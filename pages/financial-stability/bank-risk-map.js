import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const RiskMapDash = dynamic(() => import('../../modules/Dashboards/financial-stability/bank-risk-map/'), {
  loading: () => <PageLoader />,
});

const BankRiskMapMain = () => {
  return <RiskMapDash />;
};

export default BankRiskMapMain;
