import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  room_list: [],
};

const room = createSlice({
  name: "room",
  initialState,
  reducers: {},
});

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
});

export const actionGetRooms =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await instance.get("/api/room");
      const room_list = data.data.rooms;
      console.log(room_list);
    } catch (error) {
      window.alert(error.message);
    }
  };

export const {} = room.actions;

export default room;
