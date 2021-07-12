import React from "react";
import { Button, Grid, Image, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import theme from "../shared/theme";
import { actionSetBookInfo } from "../redux/modules/book";

const SearchRoom = (props) => {
  // 여기서 axios 서버 요청
  const { startDate, endDate, adult, child, roomType } = props;

  const room_info = useSelector((state) => state.room.room);
  const room_id = useSelector((state) => state.calendar.result.room_id);
  const dispatch = useDispatch();
  const difference = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const price = difference * room_info.price;
  const history = useHistory();
  const room = {
    name: room_info.name,
    price: price,
    image: room_info.image,
  };

  const update_room = {
    startDate,
    endDate,
    adult,
    child,
    roomType,
    room_id,
  };
  // 계산용
  // 리덕스에서 받아온 이미지

  console.log(price);
  const handleReserve = () => {
    dispatch(actionSetBookInfo(update_room));
    history.push("/book");
  };

  return (
    <>
      <Grid
        is_flex={true}
        bg={theme.gridBgColor}
        border_radius={theme.borderRadius}
      >
        <Grid width="70%" margin="20px">
          <Image
            border_radius={theme.borderRadius}
            height="210px"
            src={room.image}
          />
        </Grid>
        <Grid
          margin="20px 20px 20px 0"
          is_flex={true}
          bg={theme.innerBoxColor}
          border_radius={theme.borderRadius}
        >
          <Grid height="170px" padding="20px">
            <Text size="30px" color={theme.fontColor} bold={true}>
              {room.name.toUpperCase()}
            </Text>
            <Text
              size="25px"
              bold={true}
              color={theme.fontColor}
              margin="20px 0 20px 0"
            >{`Price : ${room.price.toLocaleString()} Won`}</Text>

            <Button
              border_radius={theme.borderRadius}
              height="70px"
              hover_color={theme.hoverColor}
              _onClick={handleReserve}
            >
              <Text size="20px" bold={true} color={theme.fontColor}>
                예약하기
              </Text>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchRoom;
