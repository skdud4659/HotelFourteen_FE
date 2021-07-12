import React from "react";
import styled from "styled-components";
import { Button, Grid, Input, Text } from "../elements";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import theme from "../shared/theme";
import { actionLoginpForDb } from "../redux/modules/user";

const LogIn = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userId: "",
      pwd: "",
    },

    validationSchema: Yup.object({
      userId: Yup.string()
        .email("이메일 형식이 아닙니다.")
        .required("아이디를 입력해주세요!"),
      pwd: Yup.string()
        .min(4, "비밀번호는 4자리 이상이여야 합니다.")
        .matches(/[a-zA-Z]/, "패스워드에는 반드시 영문을 포함해야합니다.")
        .required("패스워드를 입력해주세요."),
    }),

    onSubmit: (values) => {
      // dispatch 자리
      dispatch(actionLoginpForDb(values));
    },
  });

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

  //input 입력값 확인을 위한 함수
  // const [user_name, setUserName] = React.useState("");
  // const [pw, setPw] = React.useState("");

  // const input_UserName = (e) => {
  //   setUserName(e.target.value)
  // }
  // const input_Pw = (e) => {
  //   setPw(e.target.value)
  // }

  // //로그인 버튼
  // const loginBtn = () => {
  //   console.log(user_name, pw)

  // }

  return (
    //로그인 레이아웃
    //inputboxs
    <Grid
      bg={"#1f2e3b"}
      width="800px"
      height="100%"
      margin="7% auto"
      border_radius={theme.borderRadius}
    >
      {/* register글씨  */}
      <Box>
        <Text color={theme.fontColor} size="60px" bold>
          Login
        </Text>
      </Box>
      {/* //action="" accept-charset="utf-8" method="post"  */}
      <FromBox name="registerForm" onSubmit={formik.handleSubmit}>
        <fieldset>
          {/* 닉네임 input */}
          <Grid width="400px" height="80px" padding="3% 0px">
            <Text bold color={theme.fontColor} size="20px">
              아이디
            </Text>
            <Input
              padding="0px 1%;"
              placeholder="아이디를 입력해주세요."
              // _onChange={input_Id}
              id="userId"
              name="userId"
              type="userId"
              _onChange={formik.handleChange}
              value={formik.values.userId}
              height="40px"
            />
            {formik.touched.userId && formik.errors.userId ? (
              <HelperMsg>{formik.errors.userId}</HelperMsg>
            ) : null}
          </Grid>
          {/* 비밀번호 input */}
          <Grid width="400px" height="80px" padding="3% 0px">
            <Text bold color={theme.fontColor} size="20px">
              비밀번호486
            </Text>
            <Input
              padding="0px 1%;"
              placeholder="비밀번호를 입력해주세요."
              // _onChange={input_Pw}
              id="pwd"
              name="pwd"
              type="password"
              _onChange={formik.handleChange}
              value={formik.values.pwd}
              height="40px"
            />
            {formik.touched.pwd && formik.errors.pwd ? (
              <HelperMsg>{formik.errors.pwd}</HelperMsg>
            ) : null}
          </Grid>
          {/* 로그인 버튼 */}
          <Grid width="150px" height="70px" padding="10% 0px 7% 0px">
            <InputBtn type="submit" value="로그인" />
            {/* <Button
                bg_color={"#376a48"}
                _onClick={loginBtn}>로그인</Button> */}
          </Grid>
        </fieldset>
      </FromBox>
    </Grid>
  );
};

const Box = styled.div`
  width: 100%;
  height: 10%;
  padding: auto;
  text-align: center;
  padding-top: 5%;
`;

const FromBox = styled.form`
  width: 70%;
  height: 90%;
  margin: 5% auto;
`;

const InputBtn = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  font-weight: 700;
  border: none;
  color: white;
  background-color: #376a48;
  margin: auto;
  align-content: center;
`;
const HelperMsg = styled.div`
  margin-top: 1rem;
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.warningColor};
  margin: auto;
`;

export default LogIn;
