import React from "react";
import { Button, Grid, Image, Text } from "../elements";
import theme from "../shared/theme";

const CardDetail = (props) => {
  const { title, content, _id, image_url } = props;
  return (
    <Grid
      width="800px"
      height="530px"
      bg={theme.gridBgColor}
      border_radius={theme.borderRadius}
      is_flex={true}
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
        <Grid is_flex={true} width="250px" height="280px">
          <Text size="15px" bold={true} color={theme.fontColor}>
            {content}
          </Text>
        </Grid>

        <Grid width="200px" height="70px">
          <Grid is_flex={true}>
            <Button
              border_radius={theme.borderRadius}
              height="40px"
              hover_color={theme.hoverColor}
            >
              <Text size="20px" bold={true} color={theme.fontColor}>
                수정하기
              </Text>
            </Button>
          </Grid>
          <Grid is_flex={true}>
            <Button
              border_radius={theme.borderRadius}
              height="40px"
              hover_color={theme.hoverColor}
            >
              <Text size="20px" bold={true} color={theme.fontColor}>
                삭제하기
              </Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardDetail;
