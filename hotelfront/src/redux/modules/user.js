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
      state.user_info.nickname = action.payload.nickname;
      setCookie("token", action.payload.token);
      state.is_login = true;
    },
    actionLogOut: (state, action) => {
      deleteCookie("token");
      state.is_login = false;
    },
    actionSetNick: (state, action) => {
      state.user_info.nickname = action.payload;
      state.is_login = true;
    },
  },
});

const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
  headers: { authorization: `Bearer ${getCookie("token")}` },
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
      history.replace("/login");
      window.alert("회원가입이 완료되었습니다. 로그인해 주세요.");
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
      const login_info = {
        token: login.data.token,
        nickname: login.data.nickname,
      };
      dispatch(actionSetUser(login_info));
      history.replace("/");
      window.alert("로그인이 완료되었습니다. 즐거운 여행되세요.");
    } catch (error) {
      window.alert(error.message);
    }
  };

export const actionLoginChecker =
  () =>
  async (dispatch, getState, { history }) => {
    const token = getCookie("token");
    if (token === undefined) {
      return;
    }
    try {
      const confirm = await instance.get("/api/user/me");
      if (confirm.data.message !== "success") {
        window.alert(confirm.data.message);
        return;
      }
      console.log(confirm.data.user);
      dispatch(actionSetNick(confirm.data.user));
    } catch (error) {
      window.alert(error.message);
    }
  };

export const { actionSetUser, actionLogOut, actionSetNick } = user.actions;

export default user;
