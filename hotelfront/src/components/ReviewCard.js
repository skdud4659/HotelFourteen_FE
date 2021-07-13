import React, { useState } from "react";
import { Button, Grid, Image, Text } from "../elements";
import theme from "../shared/theme";
import CardDetail from "./CardDetail";


const ReviewCard = (props) => {
  const [detail_toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle((prev) => !prev);
    console.log(detail_toggle);
  };

  //props
  const {title, _id, content, date, userId, user_profile, image_url} = props

  return (
    <>
      <Grid
        width="800px"
        margin="0 0 10px 0"
        is_flex
        height="70px"
        bg={theme.innerBoxColor}
        border_radius={theme.borderRadius}
      >
        <Grid padding="0 20px 0 20px" is_flex>
          <Grid is_flex>
            <Image
              width="50px"
              height="50px"
              src={user_profile}
              border_radius="50%"
            />
            <Grid width="auto" padding="3.5% 0px 3.5% 2%">
              <Text color={'white'} size="16px">{userId.nickname}</Text>
            </Grid>
            <Grid width="300px" is_flex>
              <Text size="15px" color={theme.fontColor} bold>
                {title}
              </Text>
            </Grid>
            <Grid is_flex height="50px" width="300px">
              <Button
                bg_color={theme.hoverColor}
                border_radius={theme.borderRadius}
                hover_color={theme.bgColor}
                _onClick={handleToggleChange}
              >
                <Text color={theme.fontColor} size="20px">
                  상세보기
                </Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {detail_toggle && (
        <CardDetail
          {...props}
        />
      )}
    </>
  );
};

ReviewCard.defaultProps = {
  //나중에 
  user_profile:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
  image_url:"https://ak-d.tripcdn.com/images/022621200084a4yua0A11_R_600_400_R5_D.jpg_.webp",

  //db
  _id: "60ec33bc4a02d368fdf9170c",
  title: "좋아요",
  content: "please....?????",
  date: "Mon Jul 12 2021 21:21:16 GMT+0900 (Korean Standard Time)",
  userId: {
    _id: "60ec30cbff7f286051745a60",
    nickname: "garden1"
  },
}

export default ReviewCard;
