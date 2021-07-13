import React from "react";
import Calendar from "../components/Calendar";
import Slider from "../components/Slider";
import Review from "../components/Review";

import { Button, Grid, Input, Text } from "../elements";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import theme from "../shared/theme";

const Main = (props) => {
  const handleUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <Grid width="800px">
        <Grid padding="10px 0 10px 0" width="800px">
          <Slider />
        </Grid>
        <Calendar />
        <Grid>
          <Review />
        </Grid>
      </Grid>
      <UpDiv onClick={handleUp}>
          <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
      </UpDiv>
    </React.Fragment>
  );
};

const UpDiv = styled.div`
  color: ${theme.bgColor};
  position: sticky;
  width: 64px;
  background-color: ${theme.fontColor};
  height: 64px;
  bottom: 50px;
  left: 2%;
  border-radius: 50%;
  transition: background-color 0.3s;
  :hover {
    cursor: pointer;
    background-color: ${theme.bgColor};
    color: ${theme.fontColor};
  }
`;

export default Main;
