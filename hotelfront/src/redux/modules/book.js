//1. 우선적으로 필요한 액션 addBook
//2. 그 다음(나의 예약 확인 페이지도 필요함) getBook
//room 정보도 같이 가져와야함

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book_info: {
    startDate: null,
    endDate: null,
    adult: 0,
    child: 0,
    roomType: "",
    room_id: "",
  },
  is_ready: false,
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    actionSetBookInfo: (state, action) => {
      state.book_info = { ...action.payload };
      state.is_ready = true;
    },
  },
});

export const { actionSetBookInfo } = book.actions;

export default book;
