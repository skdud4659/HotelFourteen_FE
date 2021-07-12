import { createSlice } from "@reduxjs/toolkit";

const room_id = {
  Deluxe: "60e9448c4e03c013b8c05810",
  Suite: "60e9449c4e03c013b8c05812",
  Superior: "60e944a84e03c013b8c05814",
  "On-dol": "60e944b94e03c013b8c05816",
  Single: "60e944c54e03c013b8c05818",
};

const initialState = {
  result: {
    adult: 0,
    children: 0,
    roomType: null,
    room_id: "",
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
    actionTypeSelector: (state, action) => {
      state.result.roomType = action.payload;
      state.result.room_id = room_id[action.payload];
    },
  },
});

export const {
  actionAddAdult,
  actionDelAdult,
  actionAddChild,
  actionDelChild,
  actionTypeSelector,
} = calendar.actions;

export default calendar;
