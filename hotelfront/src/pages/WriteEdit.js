import React from "react";
import { Grid, Input, Text, Image, Button } from "../elements";

import Write from "../components/Write";
import theme from "../shared/theme";

const WriteEdit = (props) => {
  return (
    <React.Fragment>
      {/* 전체 글쓰기 레이아웃 */}
      <Grid margin="3% 0px">
        {/* 상단 멘트 */}
        <Grid
          bg={"#1f2e3b"}
          width="600px"
          height="50px"
          align="center"
          padding="1% 0%"
          border_radius={theme.borderRadius}
          is_flex
        >
          <Text color={"white"} size="20px" bold>
            항해 최고의 호텔인 Hotel Fourteen 을 공유해주세요 🔅
          </Text>
        </Grid>
        {/* write box */}
        <Write />
      </Grid>
    </React.Fragment>
  );
};

export default WriteEdit;
