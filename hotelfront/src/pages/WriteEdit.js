import React from 'react';
import {Grid, Input, Text, Image, Button} from '../elements';
import styled from 'styled-components';



const WriteEdit = (props) => {
  return (
    <React.Fragment>
      <Grid margin="3% 0px">
          <Grid bg={'#1f2e3b'} width="50%" height="auto" align="center" padding="1% 0%">
              <Text color={'white'} size="16px" bold>항해 최고의 호텔인 Hotel Fourteen과 함께한 이야기를 들려주세요!</Text>
          </Grid>
          <Grid is_flex bg={'#1f2e3b'} width="70%" height="60%" margin="2% auto">
            <Grid>
                <Grid width="70px" height="auto" padding="5% 0px 0px 0px" margin="0px 0px 0px 5%"> 
                    <Input type={'file'} id="input"></Input>
                </Grid>
                <Grid>
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/03/18/14/06/milky-way-2154049_1280.jpg"
                    width=" 450px"
                    height="350px"
                    margin="3% 0px 0px 5%"/> 
                </Grid>
            </Grid>
              <Input multiline rows={10} width="70%" height="62%" margin="2% 5% 0px 0px" padding="3%" />
          </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default WriteEdit;