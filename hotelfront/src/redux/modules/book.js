//1. 우선적으로 필요한 액션 addBook
//2. 그 다음(나의 예약 확인 페이지도 필요함) getBook
//room 정보도 같이 가져와야함

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const initialState = {
  book_info: {
    startDate: null,
    endDate: null,
    adult: 0,
    child: 0,
    roomType: "",
    room_id: "",
  },
  user_book_info: [],
  is_ready: false,
};

/*        adult: each.adult,
          endDate: each.endDate,
          kid: each.kid,
          price: each.price,
          roomType: room_id[each.roomId],
          startDate: each.startDate,
          book_id: each.userId._id, */

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    actionSetBookInfo: (state, action) => {
      state.book_info = { ...action.payload };
      state.is_ready = true;
    },
    actionSetUserBookInfo: (state, action) => {
      state.user_book_info = action.payload;
    },
    actionDelUserBookInfo: (state, action) => {
      const new_book_info = state.user_book_info.filter((each) => {
        return each.book_id !== action.payload;
      });
      state.user_book_info = new_book_info;
    },
  },
});

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
  headers: { authorization: `Bearer ${getCookie("token")}` },
});

export const actionBookingforDb =
  () =>
  async (dispatch, getState, { history }) => {
    const book_info = getState().book.book_info;

    const book_arr = {
      adult: book_info.adult,
      kid: book_info.child,
      roomId: book_info.room_id,
      startDate: book_info.startDate,
      endDate: book_info.endDate,
    };
    try {
      const book = await instance.post("/api/book", book_arr);
      console.log(book);
      if (book.data.message === "fail") {
        window.alert(book.data.message);
        return;
      }
      window.alert("예약이 완료되었읍니다.");
      history.replace("/");
    } catch (error) {
      window.alert(error.message);
    }
  };
/////
const room_id = {
  "60e9448c4e03c013b8c05810": "Deluxe",
  "60e9449c4e03c013b8c05812": "Suite",
  "60e944a84e03c013b8c05814": "Superior",
  "60e944b94e03c013b8c05816": "On-dol",
  "60e944c54e03c013b8c05818": "Single",
};

export const actionUserBookInfo =
  () =>
  async (dispatch, getState, { history }) => {
    const nickname = getState().user.user_info.nickname;

    try {
      const book_list = await instance.get("/api/book");
      const user_book_list = book_list.data.books.filter((each) => {
        return each.userId.nickname === nickname;
      });
      const user_book_info = user_book_list.map((each) => {
        return {
          adult: each.adult,
          endDate: new Date(each.endDate),
          kid: each.kid,
          price: each.price,
          roomType: room_id[each.roomId],
          startDate: new Date(each.startDate),
          book_id: each._id,
        };
      });
      dispatch(actionSetUserBookInfo(user_book_info));
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionDelReservation =
  (book_id) =>
  async (dispatch, getState, { history }) => {
    try {
      await instance.delete(`/api/book/${book_id}`);
      dispatch(actionDelUserBookInfo(book_id));
      history.push("/");
      window.alert("예약이 취소되었습니다.");
    } catch (error) {
      window.alert(error.message);
    }
  };

export const {
  actionSetBookInfo,
  actionSetUserBookInfo,
  actionDelUserBookInfo,
} = book.actions;

export default book;
