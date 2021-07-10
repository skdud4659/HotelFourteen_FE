import React from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { Button, Grid, Image, Text } from "../elements";
import { useHistory } from "react-router-dom";
import theme from "../shared/theme";

const SearchRoom = (props) => {
  // 여기서 axios 서버 요청
  const { startDate, endDate, adult, child, roomType } = props;
  const start_date = format(startDate, "yyyy-MM-dd", { locale: enGB });
  const end_date = format(endDate, "yyyy-MM-dd", { locale: enGB });
  const history = useHistory();
  // 리덕스에서 받아온 이미지
  const handleReserve = () => {
    history.push("/book");
  };
  const room = {
    name: "royal suite",
    price: 30000000,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/63/d5/dc/caption.jpg?w=600&h=300&s=1",
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
