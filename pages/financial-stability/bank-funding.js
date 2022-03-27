import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const BankFundingDash = dynamic(() => import('../../modules/Dashboards/financial-stability/bank-funding/'), {
  loading: () => <PageLoader />,
});

const BankFunding = () => {
  return <BankFundingDash />;
};

export default BankFunding;
