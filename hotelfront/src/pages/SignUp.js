import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Input, Text } from '../elements';

//박스 배경 색 #1f2e3b
//회원가입 버튼 색 #376a48
const SignUp = (props) => {

  //input 입력값 확인을 위한 함수
  // const [user_name, setUserName] = React.useState("");
  // const [pw, setPw] = React.useState("");
  // const [pw_chk, setPwChk] = React.useState("");

  // const input_UserName = (e) => {
  //   setUserName(e.target.value)
  // }
  // const input_Pw = (e) => {
  //   setPw(e.target.value)
  // }
  // const input_PwChk = (e) => {
  //   setPwChk(e.target.value)
  // }

  // //회원가입 버튼
  // const registerBtn = () => {
  //   console.log(user_name, pw, pw_chk)
  // }

  return (
         //회원가입 레이아웃 
        //inputboxs
        <Grid bg={'#1f2e3b'} width="60%" height="100%" margin="7% auto">
          {/* register글씨  */}
          <Box>
            <Text color="white" size="60px" bold>Register</Text>
          </Box>
          {/* //action="" accept-charset="utf-8" method="post"  */}
          <FromBox name="registerForm">
            <fieldset>
              {/* 닉네임 input */}
              <Grid width="400px" height="50px" padding="3% 0px">
                <Text bold color="white">닉네임</Text>
                <Input
                  padding="0px 1%;"
                  placeholder="닉네임을 입력해주세요."
                  // _onChange={input_UserName}
                  name="username"
                  />
              </Grid>
              {/* 비밀번호 input */}
              <Grid width="400px" height="50px" >
                <Text bold color="white">비밀번호486</Text>
                <Input
                  padding="0px 1%;"
                  placeholder="비밀번호를 입력해주세요."
                  // _onChange={input_Pw}
                  name="pwd"
                  />
              </Grid>
              {/* 비밀번호 확인 input */}
              <Grid width="400px" height="50px" padding="5% 0px">
                <Text bold color="white">비밀번호 확인</Text>
                <Input
                  padding="0px 1%;"
                  placeholder="비밀번호를 확인해주세요."
                  // _onChange={input_PwChk}
                  name="pwdchk"
                  />
              </Grid>
              {/* 회원가입 버튼 */}
              <Grid width="150px" height="70px" padding="2% 0px 0px 0px">
              <InputBtn type="submit" value="회원가입"/>
              {/* <Button
                bg_color={"#376a48"}
                _onClick={registerBtn}>회원가입</Button> */}
              </Grid>
          </fieldset>
        </FromBox>
      </Grid>
     
  );
}

const Box = styled.div`
  width:100%;
  height:10%;
  padding:auto;
  text-align: center;
  padding-top: 3%;
`;

const FromBox = styled.form`
  width: 70%;
  height: 90%;
  margin:2% auto;
`;

const InputBtn = styled.input`
  width:100%;
  height: 25px;
  border-radius: 30px;
  font-weight: 700;
  border: none;
  color:white;
  background-color: #376a48;
  margin:auto;
  align-content: center;
`;

export default SignUp;