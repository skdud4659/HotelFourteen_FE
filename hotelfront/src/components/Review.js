import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Text } from "../elements";
import theme from "../shared/theme";
import ReviewCard from "./ReviewCard";

import { useSelector, useDispatch} from 'react-redux';
import { getReview, getReviewDB } from '../redux/modules/review';

const Review = () => {
  const history = useHistory();
  const handleOnReview = () => {
    history.push("/review");
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
          <Button
            border_radius={theme.borderRadius}
            hover_color={theme.hoverColor}
            _onClick={handleOnReview}
          >
            <Text size="20px" bold={true} color={theme.fontColor}>
            ✔ 호텔 후기 작성하러 가기 ✔
            </Text>
          </Button>
        </Grid>
          {review_list.map((r, idx) => {
            return <ReviewCard key={r.id} {...r}/>
          })}
      </Grid>
    );
};

export default Review;
