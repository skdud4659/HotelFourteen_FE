import React from 'react';
import moment from "moment";
import { history } from "../redux/configStore";
import {useDispatch, useSelector} from 'react-redux';
import {actionDelReservation} from '../redux/modules/book'

import { Grid, Button, Input, Text, Image } from "../elements";
import theme from "../shared/theme";

import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

import Santa from '../img/santa.jpeg'


const Book_list = (props) => {
  const dispatch = useDispatch();
  const chk_in = moment(props.startDate).format(`YYYY년 MM월 DD일 오후 3시`);
  const chk_out = moment(props.endDate).format(`YYYY년 MM월 DD일 오전 12시`);

  //삭제 버튼
  const deleteBtn = () => {
    let result = window.confirm("예약을 취소하시겠습니까?")
    result ? dispatch(actionDelReservation(props.book_id)) : history.push('/mypage')
  }

  return (
    <React.Fragment>
       {/* 예약 1건 */}
        <Grid bg={theme.innerBoxColor} border_radius={theme.borderRadius} height="25%" padding="10px" is_flex>
          {/* 산타 이미지 */}
          <Grid width="300px" margin="10px" height="90%">
            <Image src={Santa} height="300px"/>
          </Grid>
          {/* 일정 확인 텍스트  > 데이터 받아야 할 것*/}
          <Grid margin="0px 0px 0px 5%" width="60%">
            {/* 일정 */}
            <Grid height="60px" margin="3% 0px">
              <Text color={'white'} bold size="20px">
                일정
              </Text>
              {/* 데이터 */}
              <Text color={'white'} size="16px" margin="10px 0px">
              {chk_in} ~ {chk_out}
              </Text>
            </Grid>
            {/* 인원 */}
            <Grid height="60px" margin="3% 0px">
              <Text color={'white'} bold size="20px">
              숙박 인원
              </Text>
              {/* 데이터 */}
              <Text color={'white'} size="16px" margin="10px 0px">
              성인 : {props.adult}명, 소아 : {props.kid}명
              </Text>
            </Grid>
            {/* 룸타입 */}
            <Grid height="60px" margin="3% 0px">
              <Text color={'white'} bold size="20px">
              예약 룸타입
              </Text>
              {/* 데이터 */}
              <Text color={'white'} size="16px" margin="10px 0px">
              {props.roomType}
              </Text>
            </Grid>
            <Grid height="20px" margin="4% 0px" align="center">
              <Text bold size="15px" color ={'#33d18c'}>확정 완료! Hotel Fourteen과 함께해주셔서 감사합니다!</Text>
            </Grid>
          </Grid>
           {/* 삭제 버튼 */}
            <div>
              <deleteIcon onClick={deleteBtn}>
                <FontAwesomeIcon icon={faTimesCircle} size="2x" color={"white"}/>
              </deleteIcon>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </Grid>
    </React.Fragment>
  );
}

Book_list.defaultProps = {
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
};

const deleteIcon = styled.button`
  background-color: none;
`;

export default Book_list;