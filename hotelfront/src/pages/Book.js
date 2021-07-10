import React from 'react';
import styled from 'styled-components';
import Book_Calender from '../components/Book_Calendar';
import {Grid, Button, Input, Text} from '../elements';

//오로라
// import book_Video from '../video/pexels-nicolas-becker-5600929.mp4' 
//폭죽
import book_Video from '../video/video (1).mp4'


const Book = (props) => {
  return (
    <React.Fragment>
      {/* 글쓰기 상자 */}
      <Grid is_flex bg={'rgba(0,0,0,0.1)'} width="70%" height="100vh" margin="2% auto" padding="5% 3% 0px 6%">
            {/* flex 좌측 */}
            <Grid>
              {/* 호텔 이미지 = 선택한 이미지 자동으로 불러오기 가능할까? */}
              <Book_vid controls autoPlay loop muted>
                <source src= {book_Video} type="video/mp4"/>
              </Book_vid>
                {/* <Image 
                  src="https://mblogthumb-phinf.pstatic.net/MjAxNjEyMjFfNjUg/MDAxNDgyMjg1MjA1MDEx.j_Ec0Ee48Q7hnCBiO8i9f-G251y7VgSuE-kjY_-JkGUg.sx5FORfY7C7W3KQLfPRMsi8EbjaSXDm9FefuUQPZnG8g.JPEG.chalet_swiss/image_251768691482284708664.jpg?type=w800"
                  width="100%"
                  height="400px"
                  /> */}
            </Grid>
            {/* flex 우측 - textarea */}
            <Grid>
              {/* 예약 확인 - 유저 네임 받기*/}
              <Grid bg={'rgba(31,46,59)'} height="30%" width="80%" align="center" padding="5% 0px">
                <Text size="25px" color="white" bold>가든님, 예약을 확인해주세요!</Text>
                {/* 체크인-아웃 > 사이드로 해야해서 플렉스*/}
                <Grid is_flex margin="5% 0px 0px 0px" height="auto">
                  <Grid>
                    <Title>Check-In</Title>
                    <Title>이후 오후 3:00</Title>
                  </Grid>
                  <Grid>
                    <Title>Check-Out</Title>
                    <Title>이전 오전 12:00</Title>
                  </Grid>
                </Grid>
                <Grid height="auto" margin="7% 0px 4% 0px">
                  {/* 데이터로 넘어온 날짜값 */}
                  <Title>2021년 7월 10일 (토) - 2021년 9월 10일 (금)</Title>
                  {/* 데이터로 넘어온 인원 수 */}
                  <Title>숙박 인원 : 2명</Title>  
                </Grid>
                <hr/>
                <Grid is_flex height="auto" margin="6% 0px 0px 0px">
                  <Grid>
                    <Text color="white" size="18px" bold>합계</Text> 
                  </Grid>
                  {/* 데이터로 넘어온 가격 */}
                  <Grid>
                      <Text color="white" size="18px" bold>5,000,000원</Text> 
                  </Grid>
                </Grid>
              </Grid>
              {/* 캘린더 */}
              <Grid height="auto" margin="5% 0px 0px 0px">
                <Book_Calender />
              </Grid>
              {/* 예약 하기 버튼 */}
                <ReserveBtn
                  >
                    예약하기
                </ReserveBtn>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

const Title = styled.p`
  color:white;
  margin-top: 4%;
`;

const Book_vid = styled.video`
  width:100%;
  height:90%;
  object-fit: fill;
`;

const ReserveBtn = styled.button`
  width:150px;
  height:50px;
  border-radius:30px;
  background-color:rgba(31,46,59);
  margin:5% auto;
  border: none;
  color:white;
  display: block;
  font-size: 15px;
  font-weight: bold;
`;

export default Book;