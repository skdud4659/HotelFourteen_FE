import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Book_Calender from "../components/Book_Calendar";
import { Grid, Button, Input, Text } from "../elements";
import theme from "../shared/theme";
//오로라
// import book_Video from '../video/pexels-nicolas-becker-5600929.mp4'
//폭죽
import book_Video from "../video/video (1).mp4";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { actionBookingforDb } from "../redux/modules/book";

const Book = (props) => {
  //현재 이메일
  const user_name = useSelector((state) => state.user.user_info.nickname);
  const book_info = useSelector((state) => state.book.book_info);
  const dispatch = useDispatch();

  const day_arr = ["일", "월", "화", "수", "목", "금", "토"];
  const startDate = `${format(book_info.startDate, "yyyy년 MM월 dd일", {
    locale: enGB,
  })} (${day_arr[new Date(book_info.startDate).getDay()]}) `;
  const endDate = `${format(book_info.endDate, "yyyy년 MM월 dd일", {
    locale: enGB,
  })} (${day_arr[new Date(book_info.endDate).getDay()]}) `;

  const handleReservation = () => {
    dispatch(actionBookingforDb());
  };

  return (
    <React.Fragment>
      {/* 글쓰기 상자 */}
      <Grid
        is_flex
        bg={theme.gridBgColor}
        width="70%"
        height="100vh"
        margin="2% auto"
        padding="5% 3% 0px 6%"
        border_radius={theme.borderRadius}
      >
        {/* flex 좌측 */}
        <Grid>
          {/* 호텔 이미지 = 선택한 이미지 자동으로 불러오기 가능할까? */}
          <Book_vid controls autoPlay loop muted>
            <source src={book_Video} type="video/mp4" />
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
          <Grid
            bg={theme.innerBoxColor}
            height="30%"
            width="80%"
            align="center"
            padding="5% 0px"
            border_radius={theme.borderRadius}
          >
            <Text size="25px" color="white" bold>
              {user_name}, 예약을 확인해주세요!
            </Text>
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
              <Title>
                {startDate} - {endDate}
              </Title>
              {/* 데이터로 넘어온 인원 수 */}
              <Title>
                숙박 인원 : 성인 {book_info.adult}명, 소아 {book_info.child} 명
              </Title>
            </Grid>
            <hr />
            <Grid is_flex height="auto" margin="6% 0px 0px 0px">
              <Grid>
                <Text color="white" size="18px" bold>
                  합계
                </Text>
              </Grid>
              {/* 데이터로 넘어온 가격 */}
              <Grid>
                <Text color="white" size="18px" bold>
                  {book_info.price.toLocaleString()}원
                </Text>
              </Grid>
            </Grid>
          </Grid>
          {/* 캘린더 */}
          <Grid height="auto" margin="5% 0px 0px 0px">
            <Book_Calender />
          </Grid>
          {/* 예약 하기 버튼 */}
          <ReserveBtn onClick={handleReservation}>예약하기</ReserveBtn>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.p`
  color: white;
  margin-top: 4%;
`;

const Book_vid = styled.video`
  width: 100%;
  height: 90%;
  object-fit: fill;
  border-radius: 20px;
`;

const ReserveBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: rgba(31, 46, 59);
  margin: 5% auto;
  border: none;
  color: white;
  display: block;
  font-size: 15px;
  font-weight: bold;
`;

export default Book;
