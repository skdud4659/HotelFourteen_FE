import React, { useEffect } from "react";

import Book from "../pages/Book";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import WriteEdit from "../pages/WriteEdit";

//라우팅
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import styled from "styled-components";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { actionGetRooms } from "../redux/modules/room";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetRooms());
  }, []);
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/review" exact component={WriteEdit} />
        <Route path="/review/:id" exact component={WriteEdit} />
        <Route path="/book" exact component={Book} />
        <Redirect from="*" to="/" />
      </Switch>
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

export default withRouter(App);
