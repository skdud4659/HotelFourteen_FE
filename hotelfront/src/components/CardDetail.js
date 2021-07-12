import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Image, Text } from "../elements";
import theme from "../shared/theme";

import {useDispatch} from 'react-redux'
import {deleteReview, deleteReviewDB} from '../redux/modules/review'

const CardDetail = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();

  //props
  const {_id, content, image_url} = props

  //editBtn
  const editBtn = () => {
    history.push(`/review/${_id}`)
  }

  //deleteBtn
  const deleteBtn = () => {
    let result = window.confirm('정말 삭제하시겠어요?')
    result ? dispatch(deleteReviewDB(_id)) : history.push('/');
  }

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
        <Grid is_flex={true} width="200px" height="280px">
          <Text size="20px" bold={true} color={theme.fontColor} lineHeight="30px">
            {content}
          </Text>
        </Grid>

        <Grid width="200px" height="70px">
          <Grid is_flex={true}>
            <Button
              border_radius={theme.borderRadius}
              height="40px"
              hover_color={theme.hoverColor}
              _onClick={editBtn}
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
              _onClick={deleteBtn}
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

CardDetail.defaultProps = {
  content:"뷰가 좋습니다.",
  _id:"60e7f07cfd1a1465b9a31359",
  image_url:"https://ak-d.tripcdn.com/images/022621200084a4yua0A11_R_600_400_R5_D.jpg_.webp",
}

export default CardDetail;
