import React from "react";
import { Button, Grid, Text } from "../elements";
import theme from "../shared/theme";
import ReviewCard from "./ReviewCard";

const Review = () => {
  /*
        반복문  props 필요사항
        const title
        const content
        const _id 
        image_url
      */

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
        >
          <Text size="20px" bold={true} color={theme.fontColor}>
            호텔을 이용하신 경험을 이야기 해주세요 ✔
          </Text>
        </Button>
      </Grid>

      {/*
        반복문  props 필요사항
        const title
        const content
        const _id 
        image_url
      */}
      <ReviewCard />
    </Grid>
  );
};

export default Review;
