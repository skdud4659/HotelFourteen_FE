import React, { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { Button, Text, Grid } from "../elements";
import SearchRoom from "./SearchRoom";
import theme from "../shared/theme";
import CountCustomer from "./CountCustomer";
import { useSelector } from "react-redux";
import RoomTypeSelector from "./RoomTypeSelector";

const Calendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  //각각 토글
  const [toggleCalender, settoggleCalender] = useState(false);
  const [toggleCheckPerson, settoggleCheckPerson] = useState(false);
  const [toggleSearch, setSearch] = useState(false);

  //인원
  const adult = useSelector((state) => state.calendar.result.adult);
  const child = useSelector((state) => state.calendar.result.children);
  const roomType = useSelector((state) => state.calendar.result.roomType);
  //고른 방의 타입 추후 아이디값과 비교하여 전달
  console.log(roomType);
  const calendarToggle = () => {
    if (toggleSearch) {
      window.alert("조회하기 버튼을 다시 눌러주세요.");
      return;
    }
    settoggleCalender((prev) => !prev);
  };
  const personToggle = () => {
    if (toggleSearch) {
      window.alert("조회하기 버튼을 다시 눌러주세요.");
      return;
    }
    settoggleCheckPerson((prev) => !prev);
  };

  const searchToogle = () => {
    if (!startDate || !endDate || !adult || !roomType) {
      window.alert("선택사항을 모두 선택해 주세요");
      return;
    }
    if (startDate.getDate() < new Date().getDate()) {
      window.alert("오늘 날짜 이상을 설정해 주세요");
      return;
    }
    if (toggleCalender) {
      settoggleCalender((prev) => !prev);
    }
    if (toggleCheckPerson) {
      settoggleCheckPerson((prev) => !prev);
    }
    setSearch((prev) => !prev);
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
        bg={theme.gridBgColor}
        border_radius={theme.borderRadius}
      >
        <Grid
          _onClick={calendarToggle}
          border_radius={theme.borderRadius}
          bg={theme.bgColor}
          is_flex={true}
          width="450px"
        >
          <Text
            margin="0 0 0 30px"
            color={theme.fontColor}
            bold={true}
            size="15px"
          >
            Reservation :
          </Text>
          <Grid
            is_flex={true}
            bg={theme.innerBoxColor}
            height="50px"
            width="130px"
            border_radius={theme.borderRadius}
          >
            <Text color={theme.fontColor} bold={true} size="15px">
              {startDate
                ? format(startDate, "yyyy-MM-dd", { locale: enGB })
                : ""}
            </Text>
          </Grid>
          <Grid
            is_flex={true}
            bg={theme.innerBoxColor}
            height="50px"
            width="130px"
            border_radius={theme.borderRadius}
          >
            <Text color={theme.fontColor} bold={true} size="15px">
              {endDate ? format(endDate, " yyyy-MM-dd", { locale: enGB }) : ""}
            </Text>
          </Grid>
        </Grid>

        <Button
          width="120px"
          border_radius={theme.borderRadius}
          hover_color={theme.hoverColor}
          _onClick={calendarToggle}
          margin="0 0 0 10px"
        >
          <Text size="15px" bold={true} color="white">
            날짜선택
          </Text>
        </Button>

        <Button
          width="120px"
          border_radius={theme.borderRadius}
          hover_color={theme.hoverColor}
          _onClick={personToggle}
          margin="0 10px"
        >
          <Text color="white" bold={true} size="15px">
            상세선택
          </Text>
        </Button>

        <Button
          width="120px"
          border_radius={theme.borderRadius}
          hover_color={theme.hoverColor}
          _onClick={searchToogle}
        >
          <Text size="15px" bold={true} color="white">
            조회하기
          </Text>
        </Button>
      </Grid>

      {toggleCheckPerson && (
        <>
          {/* 인원추가 창 */}
          <CountCustomer />

          {/* 상세선택 창 */}
          <RoomTypeSelector />
        </>
      )}

      {/* 캘린더 */}
      {toggleCalender && (
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
      {toggleSearch && (
        <Grid width="800px" margin="0 auto 10px auto">
          <SearchRoom
            startDate={startDate}
            endDate={endDate}
            adult={adult}
            child={child}
            roomType={roomType}
          />
        </Grid>
      )}
    </>
  );
};

export default Calendar;
