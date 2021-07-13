import React from 'react';
import { Grid, Button, Input, Text } from "../elements";
import theme from "../shared/theme";

const MyPage = (props) => {
  return (
    <React.Fragment>
      {/* 레이아웃 */}
      <Grid
        bg={theme.gridBgColor}
        width="70%"
        height="100vh"
        margin="2% auto"
        padding="5% 3% 0px 6%"
        border_radius={theme.borderRadius}>
          
      </Grid>
    </React.Fragment>
  );
}

export default MyPage;