import React from "react";
import styled from "styled-components";
import theme from "./theme";
import { Button, Grid, Text } from "../elements";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const is_login = false;
  const history = useHistory();

  const handleClickLogin = () => {
    history.push("/login");
  };
  const handleClickRegister = () => {
    history.push("/register");
  };
  return (
    <Grid is_flex={true} height="120px" bg="rgba(52, 118, 88, 0.5)">
      <DivForFlex />
      <Grid is_flex={true}>
        <Text color="ivory" size="50px" bold={true}>
          Hotel Fourteen
        </Text>
      </Grid>

      {!is_login && (
        <ButtonDiv>
          <Button
            width="130px"
            height="35px"
            border_radius={theme.borderRadius}
            hover_color={theme.hoverColor}
            margin="0 15px"
            _onClick={handleClickLogin}
          >
            <Text color="ivory" size="17px">
              로그인
            </Text>
          </Button>
          <Button
            width="130px"
            height="35px"
            border_radius="18px"
            border_radius={theme.borderRadius}
            hover_color={theme.hoverColor}
            margin=""
            _onClick={handleClickRegister}
          >
            <Text color="ivory" size="17px">
              회원가입
            </Text>
          </Button>
        </ButtonDiv>
      )}
      {is_login && (
        <ButtonDiv>
          <Button
            width="200px"
            height="35px"
            border_radius="18px"
            border_radius={theme.borderRadius}
            hover_color={theme.hoverColor}
            margin=""
          >
            <Text color="ivory" size="17px">
              로그아웃
            </Text>
          </Button>
        </ButtonDiv>
      )}
    </Grid>
  );
};

const DivForFlex = styled.div`
  width: 100%;
`;
const ButtonDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;
`;

export default Header;
