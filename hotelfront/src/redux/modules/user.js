//필요한 액션
//addUser, getUser, deleteUser

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user_info: { email: "익명", nickname: "익명", uid: "0" },
  is_login: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    actionSetUser: (state, action) => {
      state.user_info = { ...action.payload };
      state.is_login = true;
    },
    actionLogOut: (state, action) => {
      state.is_login = false;
    },
  },
});

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
});

export const actionSignupForDb =
  (user_info) =>
  (dispatch, getState, { history }) => {
    const email = user_info.userId;
    const nickname = user_info.userName;
    const password = user_info.pwd;
    const confirmPassword = user_info.pwdCheck;

    // axios 후가시
    const user_info_dedux = {
      email,
      nickname,
    };
    dispatch(actionSetUser(user_info_dedux));
    history.replace("/");
  };

export const actionLoginpForDb =
  (user_info) =>
  (dispatch, getState, { history }) => {
    const email = user_info.userId;
    const password = user_info.pwd;

    // 추후
    const user_info_dedux = {
      email,
    };
    dispatch(actionSetUser(user_info_dedux));
    history.replace("/");
  };

export const actionLoginChecker =
  () =>
  (dispatch, getState, { history }) => {};

export const { actionSetUser, actionLogOut } = user.actions;

export default user;
