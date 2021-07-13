import React, { useEffect } from "react";

import Book from "../pages/Book";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import WriteEdit from "../pages/WriteEdit";
import MyPage from '../pages/Mypage'

//라우팅
import { Redirect, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import styled from "styled-components";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { actionGetRooms } from "../redux/modules/room";

import { actionLoginChecker } from "../redux/modules/user";

function App() {
  const is_login = useSelector((state) => state.user.is_login);
  const is_ready = useSelector((state) => state.book.is_ready);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!is_login) {
      dispatch(actionLoginChecker());
    }
    dispatch(actionGetRooms());
  }, []);
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
          <ConnectedRouter history={history}>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/review" exact component={WriteEdit} />
            <Route path="/review/:_id" exact component={WriteEdit} />
            {is_ready && <Route path="/book" exact component={Book} />}
            <Route path="/mypage" exact component={MyPage} />
            <Redirect from="*" to="/" />
    </>
  );
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  top: -0.1px;
  width: 100%;
  height: 120px;
`;

export default App;
