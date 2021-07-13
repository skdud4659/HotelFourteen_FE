import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Text } from "../elements";
import theme from "../shared/theme";
import ReviewCard from "./ReviewCard";

import { useSelector, useDispatch} from 'react-redux';
import { getReview, getReviewDB } from '../redux/modules/review';
import styled from "styled-components";

const Review = () => {
  const history = useHistory();
  const is_login = useSelector((state) => state.user.is_login);

  const handleOnReview = () => {
    history.push('/review')
    // if(!is_login) {
    //   let result = window.confirm('로그인이 필요해요! 로그인 페이지로 이동할까요?')
    //   result ? history.push('/login') : history.push('/');
    // }

    // if(is_login) {
    //   history.push("/review");
    // }
  };

  const dispatch = useDispatch();
  const review_list = useSelector((state)=>state.review.list)
      
  React.useEffect(() => {
    dispatch(getReviewDB())
  },[])


    return (
      <Grid margin="10px auto 10px auto" width="800px">
        <Grid
          margin="10px auto 10px auto"
          height="70px"
          border_radius={theme.borderRadius}
        >
          {/* 클릭하면 글 쓰기 페이지*/}
          <GoReviewWrite
            onClick={handleOnReview}
          >
            <Text size="20px" bold={true} color={theme.fontColor}>
            ✔ 호텔 후기 작성하러 가기 ✔
            </Text>
          </GoReviewWrite>
        </Grid>
          {review_list.map((r, idx) => {
            return <ReviewCard key={r.id} {...r}/>
          })}
      </Grid>
    );
};

const GoReviewWrite = styled.button`
  border-radius: 20px;
  background-color: #1f2e3b;
  width:50%;
  border: none;
  height:100%;
  display: block;
  margin:auto;
  :hover { 
    background-color: rgba(52, 118, 88, 0.5)
    ;
  }
`;

export default Review;
