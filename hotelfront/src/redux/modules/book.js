//1. 우선적으로 필요한 액션 addBook
//2. 그 다음(나의 예약 확인 페이지도 필요함) getBook
//room 정보도 같이 가져와야함

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
});

export const actionBookingforDb =
  () =>
  async (dispatch, getState, { history }) => {
    const book_info = getState().book.book_info;

    const book_arr = {
      adult: book_info.adult,
      kid: book_info.child,
      roomId: book_info.room_id,
      startDate: String(book_info.startDate),
      endDate: String(book_info.endDate),
    };
    try {
      const book = await instance.post("/api/book");
      if (book.data.message === "fail") {
        window.alert(book.data.message);
        return;
      }
      console.log(book);
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { actionSetBookInfo } = book.actions;

export default book;
