import React from 'react';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Survey', link: '/' },
  { label: 'Business expectations', isActive: true },
];

const SamplePage = () => {
  return (
    <PageContainer heading={<IntlMessages id="sidebar.indexFinStab" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="sidebar.indexFinStab" />
          </Box>
          <Divider />
          <div style={{ marginTop: 24 }}>
            <h3>Survey</h3>
            Business expectations
          </div>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SamplePage;
