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
    <BackGround>
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
    </BackGround>
  );
}

const BackGround = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2013/12/09/03/53/northern-lights-225454_1280.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  top: -0.1px;
  width: 100%;
  height: 100%;
`;

export default App;
