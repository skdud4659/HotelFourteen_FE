import React, { useState } from "react";
import { format } from "date-fns";
import { de, enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

import { Grid } from "../elements";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Book_Calender = () => {
  const book_info = useSelector((state) => state.book.book_info);
  const [startDate, setStartDate] = useState(book_info.startDate);
  const [endDate, setEndDate] = useState(book_info.endDate);
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  return (
    <div>
      {/* <p>Selected start date: {startDate ? format(startDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p>Selected end date: {endDate ? format(endDate, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
      <p>Currently selecting: {focus}.</p> */}
      <Calender_Wrap>
        <DateRangePickerCalendar
          startDate={startDate}
          endDate={endDate}
          focus={focus}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onFocusChange={handleFocusChange}
          locale={enGB}
        />
      </Calender_Wrap>
    </div>
  );
};

const Calender_Wrap = styled.div`
  width: 80%;
  margin: auto;
  background-color: rgba(225, 225, 225, 0.3);
  border-radius: 20px;
`;

export default Book_Calender;
