import React from "react";
import { Button, Grid, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import theme from "../shared/theme";
import {
  actionAddAdult,
  actionAddChild,
  actionDelAdult,
  actionDelChild,
} from "../redux/modules/calendar";

const CountCustomer = () => {
  const adult = useSelector((state) => state.calendar.result.adult);
  const child = useSelector((state) => state.calendar.result.children);

  const dispatch = useDispatch();
  const addAdult = () => {
    if (adult >= 4) {
      return;
    }
    dispatch(actionAddAdult());
  };
  const delAdult = () => {
    if (adult <= 1) {
      return;
    }
    dispatch(actionDelAdult());
  };

  const addChild = () => {
    if (child >= 2) {
      return;
    }
    dispatch(actionAddChild());
  };
  const delChild = () => {
    if (child <= 1) {
      return;
    }
    dispatch(actionDelChild());
  };

  return (
    <>
      <Grid
        is_flex={true}
        margin="0 auto 10px auto"
        width="300px"
        height="70px"
        bg={theme.gridBgColor}
        border_radius={theme.borderRadius}
      >
        <Button
          width="70px"
          height="70px"
          border_radius="50%"
          hover_color={theme.hoverColor}
          _onClick={addAdult}
        >
          <Text size="20px" bold={true} color="white">
            +
          </Text>
        </Button>
        <Grid
          border_radius={theme.borderRadius}
          bg={theme.bgColor}
          is_flex={true}
          width="120px"
        >
          <Text size="20px" bold={true} color={theme.fontColor}>
            {adult ? `성인 ${adult} 인` : " 성인 "}
          </Text>
        </Grid>

        <Button
          width="70px"
          height="70px"
          border_radius="50%"
          hover_color={theme.hoverColor}
          _onClick={delAdult}
        >
          <Text size="20px" bold={true} color="white">
            -
          </Text>
        </Button>
      </Grid>
      {/**child */}
      <Grid
        is_flex={true}
        margin="0 auto 10px auto"
        width="300px"
        height="70px"
        bg={theme.gridBgColor}
        border_radius={theme.borderRadius}
      >
        <Button
          width="70px"
          height="70px"
          border_radius="50%"
          hover_color={theme.hoverColor}
          _onClick={addChild}
        >
          <Text size="20px" bold={true} color="white">
            +
          </Text>
        </Button>
        <Grid
          border_radius={theme.borderRadius}
          bg={theme.bgColor}
          is_flex={true}
          width="120px"
        >
          <Text size="20px" bold={true} color={theme.fontColor}>
            {child ? `유아 ${child} 인` : "유아"}
          </Text>
        </Grid>

        <Button
          width="70px"
          height="70px"
          border_radius="50%"
          hover_color={theme.hoverColor}
          _onClick={delChild}
        >
          <Text size="20px" bold={true} color="white">
            -
          </Text>
        </Button>
      </Grid>
    </>
  );
};

export default CountCustomer;
