import React from "react";
import { history } from "../redux/configStore";
import { Button, Grid, Image, Text } from "../elements";
import theme from "../shared/theme";
import Permit from '../shared/Permit';

import { useDispatch } from "react-redux";
import { deleteReview, deleteReviewDB } from "../redux/modules/review";

import moment from "moment";

const CardDetail = (props) => {
  const dispatch = useDispatch();

  //props

  const {title, _id, content, date, userId, nickname, user_profile, image_url} = props


  const insert_d = moment(date).format("dddd MMM Do YY");

  //deleteBtn
  const deleteBtn = () => {
    let result = window.confirm("정말 삭제하시겠어요?");
    result ? dispatch(deleteReviewDB(_id)) : history.push("/");
  };

  //editBtn
  const editBtn = () => {
    history.push(`/review/${_id}`);
  };

  return (
    <Grid
      width="800px"
      height="530px"
      bg={theme.gridBgColor}
      border_radius={theme.borderRadius}
      is_flex
    >
      {/** 이미지 */}
      <Grid width="480px" height="450px" margin="0 10px 0 20px">
        <Image src={image_url} border_radius={theme.borderRadius} />
      </Grid>
      {/**제목, 내용 */}
      <Grid
        width="240px"
        height="445px"
        bg={theme.innerBoxColor}
        border_radius={theme.borderRadius}
      >
        <Grid width="90%" height="5%" align="right" padding="7% 0px 0px 0px">
          <Text color={"white"} size="17px" bold>
            {insert_d}
          </Text>
        </Grid>
        <Grid is_flex width="200px" height="250px">
          <Text size="20px" bold color={theme.fontColor} lineHeight="30px">
            {content}
          </Text>
        </Grid>
        <Permit>
        <Grid width="200px" height="70px">
          <Grid is_flex>
            <Button
              key={_id}
              border_radius={theme.borderRadius}
              height="40px"
              hover_color={theme.hoverColor}
              _onClick={editBtn}
            >
              <Text size="20px" bold color={theme.fontColor}>
                수정하기
              </Text>
            </Button>
          </Grid>
          <Grid is_flex>
            <Button
              border_radius={theme.borderRadius}
              height="40px"
              hover_color={theme.hoverColor}
              _onClick={deleteBtn}
            >
              <Text size="20px" bold color={theme.fontColor}>
                삭제하기
              </Text>
            </Button>
          </Grid>
        </Grid>
        </Permit>
      </Grid>
    </Grid>
  );
};

CardDetail.defaultProps = {
  //나중에
  user_profile:
    "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
  image_url:
    "https://ak-d.tripcdn.com/images/022621200084a4yua0A11_R_600_400_R5_D.jpg_.webp",

  //db
  _id: "60ec33bc4a02d368fdf9170c",
  title: "좋아요",
  content: "please....?????",
  date: "Mon Jul 12 2021",
  userId: {
    _id: "60ec30cbff7f286051745a60",

  },
  nickname: "garden1"
}


export default CardDetail;
