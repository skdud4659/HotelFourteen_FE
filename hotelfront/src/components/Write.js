import React from 'react';
import {Grid, Image, Input} from '../elements';

const Write = (props) => {
  return (
    <React.Fragment>
      {/* 글쓰기 상자 */}
      <Grid is_flex bg={'rgba(0,0,0,0.1)'} width="70%" height="100%" margin="2% auto" padding="2% 5% 5% 5%">
            {/* flex 좌측 */}
            <Grid>
              {/* 파일 */}
                <Grid width="70px" height="auto" padding="5% 0px 0px 0px" margin="0px 0px 0px 5%"> 
                    <Input type={'file'} id="input"></Input>
                </Grid>
                {/* 미리보기 이미지 */}
                <Grid>
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/03/18/14/06/milky-way-2154049_1280.jpg"
                    width=" 600px"
                    height="350px"
                    margin="3% 0px 0px 5%"/> 
                </Grid>
            </Grid>
            {/* flex 우측 - textarea */}
            <Input multiline width="70%" margin="6% 5% 0px 0px;" padding="3%;" />
          </Grid>
    </React.Fragment>
  );
}

export default Write;