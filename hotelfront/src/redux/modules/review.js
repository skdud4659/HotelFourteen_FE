// //1. 우선적으로 필요한 액션 addPost, getPost
// //2. 다음 순위 updatePost, deletePost

// //import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {history} from '../configStore'

// //axios
const instance = axios.create({
  baseURL: "http://3.35.173.0:3000",
});

export const addReviewDB = (title, content) => {
  return function (dispatch, getState) {
    instance
      .post("api/review", { title: title, content: content })
      .then((res) => {
        window.alert('리뷰 작성을 완료하였어요!')
        dispatch(addReview(title, content))
        history.push('/')
    })
    .catch((err) => {
      window.alert('리뷰 작성에 오류가 있어요! 잠시후 다시 시도해주세요.')
      console.log(err)
    })
  };
};

export const getReviewDB = () => {
  return function(dispatch, getState) {
    instance
      .get('api/review')
      .then((res) => {
        let content_list = res.data.reviews
      
        dispatch(getReview(content_list))
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요! 잠시후 다시 시도해주세요.')
        console.log(err)
      })
  }
}

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
      // state.list.push(action.payload.contents)
    },

    getReview: (state, action) => {

      state.list = action.payload
    }

  },
});

export const { addReview, getReview } = review.actions;

export default review;
