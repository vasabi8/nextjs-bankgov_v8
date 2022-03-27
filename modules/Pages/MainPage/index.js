import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Main Page', isActive: true },
];

const MainPage = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.samplePage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Divider />
          <div style={{ marginTop: 24 }}>
            <h3>Main Page</h3>
            Test
            <br></br>
            Main chart
          </div>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default MainPage;
