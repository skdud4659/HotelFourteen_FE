import React from 'react';

const LogIn = (props) => {
  //input 입력값 확인을 위한 함수
  // const [id, setUserId] = React.useState("");
  // const [pw, setPw] = React.useState("");

  // const input_Id = (e) => {
  //   setUserId(e.target.value)
  // }
  // const input_Pw = (e) => {
  //   setPw(e.target.value)
  // }

  // //로그인 버튼
  // const loginBtn = () => {
  //   console.log(id, pw)
  // }

  return (
         //로그인 레이아웃 
        //inputboxs
        <Grid bg={'#1f2e3b'} width="60%" height="100%" margin="7% auto">
          {/* register글씨  */}
          <Box>
            <Text color="white" size="60px" bold>Login</Text>
          </Box>
          {/* //action="" accept-charset="utf-8" method="post"  */}
          <FromBox name="registerForm">
            <fieldset>
              {/* 닉네임 input */}
              <Grid width="400px" height="50px" padding="5% 0px">
                <Text bold color="white">아이디</Text>
                <Input
                  padding="0px 1%;"
                  placeholder="아이디를 입력해주세요."
                  // _onChange={input_Id}
                  name="id"
                  />
              </Grid>
              {/* 비밀번호 input */}
              <Grid width="400px" height="50px" padding="5% 0px">
                <Text bold color="white">비밀번호486</Text>
                <Input
                  padding="0px 1%;"
                  placeholder="비밀번호를 입력해주세요."
                  // _onChange={input_Pw}
                  name="pwd"
                  />
              </Grid>
              {/* 로그인 버튼 */}
              <Grid width="150px" height="70px" padding="10% 0px 7% 0px">
              <InputBtn type="submit" value="로그인"/>
              {/* <Button
                bg_color={"#376a48"}
                _onClick={loginBtn}>로그인</Button> */}
              </Grid>
          </fieldset>
        </FromBox>
      </Grid>
  );
}

export default LogIn;