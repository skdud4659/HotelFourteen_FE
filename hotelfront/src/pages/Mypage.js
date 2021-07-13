import React from 'react';
import { Grid, Button, Input, Text } from "../elements";
import theme from "../shared/theme";
import Book_Detail from '../components/Book_Detail';

const MyPage = (props) => {
  return (
    <React.Fragment>
      {/* 레이아웃 */}
      <Grid
        bg={theme.gridBgColor}
        width="800px"
        height="100vh"
        margin="2% auto"
        padding="5% 3%"
        border_radius={theme.borderRadius}>
          <Book_Detail/>
      </Grid>
    </React.Fragment>
  );
}

export default MyPage;