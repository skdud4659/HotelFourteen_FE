//필요한 액션
//addUser, getUser, deleteUser

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "../../shared/cookie";

const initialState = {
  user_info: { nickname: "익명" },
  is_login: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    actionSetUser: (state, action) => {
      state.user_info.nickname = action.payload;
      setCookie("nickname", action.payload);
      state.is_login = true;
    },
    actionLogOut: (state, action) => {
      deleteCookie("nickname");
      state.is_login = false;
    },
  },
});

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
});

export const actionSignupForDb =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    const email = user_info.userId;
    const nickname = user_info.userName;
    const password = user_info.pwd;
    const confirmPassword = user_info.pwdCheck;
    try {
      const signup = await instance.post("/api/user", {
        email,
        nickname,
        password,
        confirmPassword,
      });
      const message = signup.data.message;
      if (message !== "success") {
        window.alert(signup.data.message);
        return;
      }

      dispatch(actionSetUser(email));
      history.replace("/");
    } catch (data) {
      window.alert(data.message);
    }

    // axios 추가시
  };

export const actionLoginForDb =
  (user_info) =>
  async (dispatch, getState, { history }) => {
    const email = user_info.userId;
    const password = user_info.pwd;
    try {
      const login = await instance.post("/api/user/auth", {
        email,
        password,
      });
      const message = login.data.message;
      if (message !== "success") {
        window.alert(login.data.message);
        return;
      }
      // 체크해서 가져올것

      dispatch(actionSetUser(email));
      history.replace("/");
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionLoginChecker =
  () =>
  async (dispatch, getState, { history }) => {
    const get_nick = getCookie("nickname");
    console.log(get_nick);
    if (get_nick === undefined) {
      return;
    }
    dispatch(actionSetUser(get_nick));
  };

export const { actionSetUser, actionLogOut } = user.actions;

export default user;
