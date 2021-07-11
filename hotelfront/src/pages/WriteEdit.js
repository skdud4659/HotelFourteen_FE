import React from 'react';
import {Grid, Input, Text, Image, Button} from '../elements';



import Write from '../components/Write';


const WriteEdit = (props) => {
  return (
    <React.Fragment>
      {/* 전체 글쓰기 레이아웃 */}
      <Grid margin="3% 0px">
        {/* 상단 멘트 */}
          <Grid bg={'#1f2e3b'} width="50%" height="auto" align="center" padding="1% 0%">
              <Text color={'white'} size="16px" bold>항해 최고의 호텔인 Hotel Fourteen과 함께한 이야기를 들려주세요!</Text>
          </Grid>
          {/* write box */}
          <Write />
      </Grid>
    </React.Fragment>
  );
}


export default WriteEdit;