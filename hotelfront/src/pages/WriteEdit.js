import React from 'react';
import {Grid, Input, Text, Image, Button} from '../elements';
import styled from 'styled-components';

import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          {/* 작성 버튼 */}
          <Btn>
            <Button width="80px" height="80px" border_radius="50%" bg_color="rgba(0,0,0,0.0)">
                <FontAwesomeIcon icon={faCheckCircle} size="5x" color="rgba(52, 118, 88, 1)"/>
            </Button>
          </Btn>
      </Grid>
    </React.Fragment>
  );
}

const Btn = styled.div`
  float: right;
  margin-right: 1%;
`;

export default WriteEdit;