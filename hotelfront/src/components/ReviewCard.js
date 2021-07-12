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

  return (
    <>
      <Grid
        width="800px"
        margin="0 0 10px 0"
        is_flex={true}
        height="70px"
        bg={theme.bgColor}
        border_radius={theme.borderRadius}
      >
        <Grid padding="0 20px 0 20px" is_flex={true}>
          <Grid is_flex={true}>
            <Image
              width="50px"
              height="50px"
              src={props.user_profile}
              border_radius="50%"
            />
            <Grid width="300px" is_flex={true}>
              <Text size="15px" color={theme.fontColor} bold={true}>
                {props.title}
              </Text>
            </Grid>
            <Grid is_flex={true} height="50px" width="300px">
              <Button
                bg_color={theme.innerBoxColor}
                border_radius={theme.borderRadius}
                hover_color={theme.hoverColor}
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
          title={props.title}
          content={props.content}
          _id={props._id}
          image_url={props.image_url}
        />
      )}
    </>
  );
};

ReviewCard.defaultProps = {
  // Redux
  user_profile:"https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
  //props
  title:"좋아요.",
  content:"뷰가 좋습니다.",
  _id:"60e7f07cfd1a1465b9a31359",
  image_url:"https://ak-d.tripcdn.com/images/022621200084a4yua0A11_R_600_400_R5_D.jpg_.webp",
}

export default ReviewCard;
