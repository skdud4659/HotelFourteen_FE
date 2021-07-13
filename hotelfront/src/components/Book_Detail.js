import React from 'react';
import { Grid, Button, Input, Text, Image } from "../elements";
import theme from "../shared/theme";

import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const Book_Detail = (props) => {
  const {book, santa_img} = props

  //삭제 버튼
  const deleteBtn = () => {

  }

  return (
    <React.Fragment>
      <Grid>
        {/* 예약 타이틀 */}
        <Grid height="5%">
          <Text color={'white'} bold size="30px">다가오는 예약</Text>
        </Grid>
        {/* 예약 1건 */}
        <Grid bg={theme.innerBoxColor} border_radius={theme.borderRadius} height="25%" padding="10px" margin="0px" is_flex>
          {/* 산타 이미지 */}
          <Grid width="300px" margin="10px" height="90%">
            <Image src={santa_img}/>
          </Grid>
          {/* 일정 확인 텍스트  > 데이터 받아야 할 것*/}
          <Grid margin="0px 0px 0px 5%" width="60%">
            {/* 일정 */}
            <Grid height="50px" margin="3% 0px">
              <Text color={'white'} bold size="20px">
                일정
              </Text>
              {/* 데이터 */}
              <Text color={'white'} size="16px" margin="10px 0px">
              {book.startDate} ~ {book.endDate}
              </Text>
            </Grid>
            {/* 인원 */}
            <Grid height="50px" margin="3% 0px">
              <Text color={'white'} bold size="20px">
              숙박 인원
              </Text>
              {/* 데이터 */}
              <Text color={'white'} size="16px" margin="10px 0px">
              성인 : {book.adult}명, 소아 : {book.kid}명
              </Text>
            </Grid>
            {/* 룸타입 */}
            <Grid height="50px" margin="3% 0px">
              <Text color={'white'} bold size="20px">
              예약 룸타입
              </Text>
              {/* 데이터 */}
              <Text color={'white'} size="16px" margin="10px 0px">
              {book.roomType}
              </Text>
            </Grid>
            <Grid height="50px" margin="4% 0px" align="center">
              <Text bold size="15px" color ={'#33d18c'}>확정 완료! Hotel Fourteen과 함께해주셔서 감사합니다!</Text>
            </Grid>
          </Grid>
           {/* 삭제 버튼 */}
            <div>
              <deleteIcon onClick={deleteBtn}>
                <FontAwesomeIcon icon={faTimesCircle} size="2x" color={"white"}/>
              </deleteIcon>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Book_Detail.defaultProps={
  book: {
    adult: 1,
    kid: 1,
    price: 6000000,
    _id: "60ed063b1881d77ef0af763c",
    roomType: "온돌룸",
    startDate: "Sat Jul 10 2021",
    endDate: "Mon Jul 12 2021",
    userId: {
      _id: "60ecf4211f628c6cf40f7123",
      nickname: "garden1"
    },
  },
  santa_img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5sxC1bV-01Jvs8dIDC4d98543BL4ipomzx7IRWTetFNplh5sVyFBCwW8x_I7k1QiODU&usqp=CAU"
};

const deleteIcon = styled.button`
  background-color: none
`;

export default Book_Detail;