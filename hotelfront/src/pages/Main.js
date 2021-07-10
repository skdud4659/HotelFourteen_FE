import React from "react";
import Calendar from "../components/Calendar";
import Slider from "../components/Slider";

import { Button, Grid, Input, Text } from "../elements";

const Main = (props) => {
  return (
    <React.Fragment>
      <Grid padding="10px 0 10px 0" width="800px">
        <Slider />
      </Grid>
      <Calendar />
    </React.Fragment>
  );
};

export default Main;
