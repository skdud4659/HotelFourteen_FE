import React from "react";

import Book from "../pages/Book";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import WriteEdit from "../pages/WriteEdit";

//라우팅
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import styled from "styled-components";
import Header from "./Header";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/post_review" exact component={WriteEdit} />
        <Route path="/post_review/:id" exact component={WriteEdit} />
        <Route path="/booking" exact component={Book} />
      </ConnectedRouter>
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
