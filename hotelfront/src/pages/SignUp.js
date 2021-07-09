import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Input, Text } from '../elements';

//박스 배경 색 #1f2e3b
//회원가입 버튼 색 #376a48
const SignUp = (props) => {

  //input 입력값 확인을 위한 함수
  const [user_name, setUserName] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [pw_chk, setPwChk] = React.useState("");

  const input_UserName = (e) => {
    setUserName(e.target.value)
  }
  const input_Pw = (e) => {
    setPw(e.target.value)
  }
  const input_PwChk = (e) => {
    setPwChk(e.target.value)
  }

  //회원가입 버튼
  const registerBtn = () => {
    console.log(user_name, pw, pw_chk)
  }

  return (
     //회원가입 레이아웃 
    <Grid width="70%" height="70%" margin="5% auto;">
     {/* register글씨  */}
      <Grid width="27%"  height="20%" padding="auto">
        <Text color="white" size="72px" bold>Register</Text>
      </Grid>
       {/* inputboxs */}
      <Grid bg={'#1f2e3b'} width="100%" height="85%">
        {/* 닉네임 input */}
        <Grid width="400px" height="50px" padding="5% 0px">
          <Text bold color="white">닉네임</Text>
          <Input
            padding="0px 4%;"
            placeholder="닉네임을 입력해주세요."
            _onChange={input_UserName}
            />
        </Grid>
        {/* 비밀번호 input */}
        <Grid width="400px" height="50px" >
          <Text bold color="white">비밀번호486</Text>
          <Input
            padding="0px 4%;"
            placeholder="비밀번호를 입력해주세요."
            _onChange={input_Pw}
            />
        </Grid>
        {/* 비밀번호 확인 input */}
        <Grid width="400px" height="50px" padding="5% 0px">
          <Text bold color="white">비밀번호 확인</Text>
          <Input
            padding="0px 4%;"
            placeholder="비밀번호를 확인해주세요."
            _onChange={input_PwChk}
            />
        </Grid>
        {/* 회원가입 버튼 */}
        <Grid width="150px" height="40px" padding="1% 0px 0px 0px">
        <Button
          bg_color={"#376a48"}
          _onClick={registerBtn}>회원가입</Button>
        </Grid>
      </Grid>
  </Grid>
  );
}

const RegisterBox = styled.div`

`;

export default SignUp;