// //1. 우선적으로 필요한 액션 addPost, getPost
// //2. 다음 순위 updatePost, deletePost

// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

// //axios
const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
  headers: { authorization: `Bearer ${getCookie("token")}` },
});

export const addReviewDB = (title, content) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/review", { title: title, content: content })
      .then((res) => {
        console.log(res);
        window.alert("리뷰 작성을 완료하였어요!");
        dispatch(addReview(title, content));
        history.push("/");
      })
      .catch((err) => {
        window.alert("리뷰 작성에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

export const getReviewDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get("/api/review")
      .then((res) => {
        let content_list = res.data.reviews;
        dispatch(getReview(content_list));
      })
      .catch((err) => {
        window.alert("페이지에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

export const deleteReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/api/review/${reviewId}`)
      .then((res) => {
        console.log(res);
        window.alert("리뷰가 삭제되었습니다!");
        dispatch(deleteReview(reviewId));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("앗! 리뷰 삭제에 오류가 있어요! 관리자에게 문의해주세요");
        console.log("err");
      });
  };
};

export const updateReviewDB = (title, content, reviewId) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`/api/review/${reviewId}`, { title: title, content: content })
      .then((res) => {
        console.log(res);
        window.alert("수정이 완료되었어요!");
        history.replace("/");
      })
      .catch((err) => {
        window.alert("리뷰 수정에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

const initialState = {
  list: [],
};

//리덕스
const review = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const title = action.payload.title;
      const content = action.payload.content;
      state.list.push({ title, content });
    },

    getReview: (state, action) => {
      state.list = action.payload;
    },

    deleteReview: (state, action) => {
      let idx = state.list.findIndex((r) => r._id === action.payload);
      if (idx !== -1) {
        state.list.splice(idx, 1);
      }
    },

    updateReview: (state, action) => {},
  },
});

export const { addReview, getReview, deleteReview, updateReview } =
  review.actions;

export default review;
