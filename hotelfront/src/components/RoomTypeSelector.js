import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Text } from "../elements";
import { actionTypeSelector } from "../redux/modules/calendar";
import theme from "../shared/theme";

const RoomTypeSelector = () => {
  const roomType = useSelector((state) => state.calendar.result.roomType);
  const dispatch = useDispatch();

  const selectDeluxe = () => {
    dispatch(actionTypeSelector("Deluxe"));
  };
  const selectSuite = () => {
    dispatch(actionTypeSelector("Suite"));
  };
  const selectSuperior = () => {
    dispatch(actionTypeSelector("Superior"));
  };
  const selectOn_dol = () => {
    dispatch(actionTypeSelector("On-dol"));
  };
  const selectSingle = () => {
    dispatch(actionTypeSelector("Single"));
  };
  return (
    <Grid
      is_flex={true}
      margin="0 auto 10px auto"
      width="800px"
      height="70px"
      bg={theme.gridBgColor}
      border_radius={theme.borderRadius}
    >
      <Button
        width="130px"
        height="70px"
        border_radius={theme.borderRadius}
        hover_color={theme.hoverColor}
        _onClick={selectDeluxe}
      >
        <Text size="20px" bold={true} color="white">
          Deluxe
        </Text>
      </Button>
      <Button
        width="130px"
        height="70px"
        border_radius={theme.borderRadius}
        hover_color={theme.hoverColor}
        _onClick={selectSuite}
      >
        <Text size="20px" bold={true} color="white">
          Suite
        </Text>
      </Button>
      <Button
        width="130px"
        height="70px"
        border_radius="20px"
        hover_color="rgba(52, 118, 88, 0.5)"
        _onClick={selectSuperior}
      >
        <Text size="20px" bold={true} color="white">
          Superior
        </Text>
      </Button>
      <Button
        width="130px"
        height="70px"
        border_radius="20px"
        hover_color="rgba(52, 118, 88, 0.5)"
        _onClick={selectOn_dol}
      >
        <Text size="20px" bold={true} color="white">
          On-dol
        </Text>
      </Button>
      <Button
        width="130px"
        height="70px"
        border_radius="20px"
        hover_color="rgba(52, 118, 88, 0.5)"
        _onClick={selectSingle}
      >
        <Text size="20px" bold={true} color="white">
          Single
        </Text>
      </Button>
      <Grid
        border_radius="20px"
        bg="rgba(255,255,255, 0.8)"
        is_flex={true}
        width="130px"
      >
        <Text size="20px" bold={true} color="#0E693F">
          {roomType ? `✔ ${roomType}` : "선택사항"}
        </Text>
      </Grid>
    </Grid>
  );
};

export default RoomTypeSelector;
