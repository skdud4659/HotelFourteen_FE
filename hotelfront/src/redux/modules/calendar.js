import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: {
    adult: 0,
    children: 0,
    startDate: null,
    endDate: null,
    roomType: null,
  },
};

const calendar = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    actionAddAdult: (state, action) => {
      state.result.adult += 1;
    },
    actionDelAdult: (state, action) => {
      state.result.adult -= 1;
    },
    actionAddChild: (state, action) => {
      state.result.children += 1;
    },
    actionDelChild: (state, action) => {
      state.result.children -= 1;
    },
  },
});

export const {
  actionAddAdult,
  actionDelAdult,
  actionAddChild,
  actionDelChild,
} = calendar.actions;

export default calendar;
