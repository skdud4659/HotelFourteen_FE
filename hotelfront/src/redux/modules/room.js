import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const initialState = {
  list: [],
  room: {
    _id: "60e9448c4e03c013b8c05810",
    name: "디럭스룸",
    image: "https://sbti.kosmes.or.kr/images/content/img_SHSTI040M0_01_01.jpg",
    price: 3000000,
  },
};

const room = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.list = [...action.payload];
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

//{ autherization : `Bearer ${token}` }

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
  headers: { authorization: `Bearer ${getCookie("token")}` },
});

export const actionGetRooms =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await instance.get("/api/room");
      const room_list = data.data.rooms;
      dispatch(setRooms(room_list));
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionGetOneRoom =
  () =>
  async (dispatch, getState, { history }) => {
    const room_id = getState().calendar.result.room_id;

    try {
      const get_room = await instance.get(`/api/room/${room_id}`);

      const room = {
        _id: get_room.data.room._id,
        name: get_room.data.room.name,
        image: get_room.data.room.image,
        price: get_room.data.room.price,
      };

      if (get_room.data.message !== "success") {
        window.alert(get_room.data.message);
      }
      dispatch(setRoom(room));
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { setRooms, setRoom } = room.actions;

export default room;
