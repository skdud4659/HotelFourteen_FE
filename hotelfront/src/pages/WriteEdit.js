import React from 'react';
import {Grid, Input, Text} from '../elements';

const WriteEdit = (props) => {
  return (
    <React.Fragment>
      <Grid margin="11% 0px">
          <Grid bg={'#1f2e3b'} width="50%" height="auto" align="center" padding="1% 0%">
              <Text color={'white'} size="16px" bold>항해 최고의 호텔인 Hotel Fourteen과 함께한 이야기를 들려주세요!</Text>
          </Grid>
          <Grid bg={'#1f2e3b'} width=" 70%" height="60%" margin="2% auto">
            <Grid>
              <Input type={'file'} width="40%" />
            </Grid>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default WriteEdit;