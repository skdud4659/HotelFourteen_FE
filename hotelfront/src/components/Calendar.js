import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { Button, Text, Grid, Input } from "../elements";
import styled from "styled-components";

const Calendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const [toggle, getToggle] = useState(false);

  const CalendarToggle = () => {
    getToggle((prev) => !prev);
  };

  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };

  return (
    <>
      <Grid
        is_flex={true}
        margin="0 auto 10px auto"
        width="800px"
        height="70px"
        bg="rgba(0,0,0,0.1)"
        border_radius="20px"
      >
        <Grid border_radius="20px" bg="#0E693F" is_flex={true}>
          <Text margin="0 0 0 30px" color="white" bold={true} size="15px">
            Reservation :
          </Text>
          <Grid
            is_flex={true}
            bg="#333333"
            height="50px"
            width="200px"
            border_radius="20px"
          >
            <Text color="white" bold={true} size="15px">
              {startDate
                ? format(startDate, "yyyy-MM-dd", { locale: enGB })
                : ""}
            </Text>
          </Grid>
          <Grid
            is_flex={true}
            bg="#333333"
            height="50px"
            width="200px"
            border_radius="20px"
          >
            <Text color="white" bold={true} size="15px">
              {endDate ? format(endDate, " yyyy-MM-dd", { locale: enGB }) : ""}
            </Text>
          </Grid>
        </Grid>

        <Button
          width="120px"
          border_radius="20px"
          hover_color="rgba(52, 118, 88, 0.5)"
          _onClick={CalendarToggle}
          margin="0 10px 0 10px"
        >
          <Text size="15px" bold={true} color="white">
            날짜선택
          </Text>
        </Button>
        <Button
          width="120px"
          border_radius="20px"
          hover_color="rgba(52, 118, 88, 0.5)"
        >
          <Text size="15px" bold={true} color="white">
            조회하기
          </Text>
        </Button>
      </Grid>
      {toggle && (
        <Grid
          margin="auto"
          width="800px"
          bg="rgba(153, 153 ,153 ,0.4)"
          border_radius="20px"
        >
          <DateRangePickerCalendar
            startDate={startDate}
            endDate={endDate}
            focus={focus}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onFocusChange={handleFocusChange}
            locale={enGB}
          />
        </Grid>
      )}
    </>
  );
};

export default Calendar;
