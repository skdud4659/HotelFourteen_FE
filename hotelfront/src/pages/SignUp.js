import React from "react";
import styled from "styled-components";
import { Button, Grid, Input, Text } from "../elements";
import * as Yup from "yup";
import { useFormik } from "formik";
import theme from "../shared/theme";
import { useDispatch } from "react-redux";
import { actionSignupForDb } from "../redux/modules/user";
//박스 배경 색 #1f2e3b
//회원가입 버튼 색 #376a48
const SignUp = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userId: "",
      userName: "",
      pwd: "",
      pwdCheck: "",
    },

    validationSchema: Yup.object({
      userId: Yup.string()
        .email("이메일 형식이 아닙니다.")
        .required("아이디를 입력해주세요!"),
      userName: Yup.string().required("이름을 입력해주세요."),
      pwd: Yup.string()
        .min(4, "비밀번호는 4자리 이상이여야 합니다.")
        .matches(/[a-zA-Z]/, "패스워드에는 반드시 영문을 포함해야합니다.")
        .required("패스워드를 입력해주세요."),
      pwdCheck: Yup.string()
        .min(4, "비밀번호는 4자리 이상이여야 합니다.")
        .required("패스워드를 재입력해주세요")
        .oneOf([Yup.ref("pwd"), null], "비밀번호가 일치하지 않습니다."),
    }),

    onSubmit: (values) => {
      // dispatch 자리
      dispatch(actionSignupForDb(values));
    },
  });

  //input 입력값 확인을 위한 함수
  // const [id, setId] = React.useState("");
  // const [user_name, setUserName] = React.useState("");
  // const [pw, setPw] = React.useState("");
  // const [pw_chk, setPwChk] = React.useState("");

  // const input_ID = (e) => {
  //   setId(e.target.value)
  // }
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
  //   console.log(id, user_name, pw, pw_chk)
  // }

  return (
    //회원가입 레이아웃
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
          Register
        </Text>
      </Box>
      {/* //action="" accept-charset="utf-8" method="post"  */}
      <FromBox name="registerForm" onSubmit={formik.handleSubmit}>
        {/* 아이디 input */}

        <Grid width="400px" height="80px" padding="3% 0px">
          <Text bold color={theme.fontColor} size="20px">
            이메일
          </Text>
          <Input
            padding="0px 1%;"
            placeholder="이메일을 입력해주세요."
            // _onChange={input_ID}
            id="userId"
            name="userId"
            type="userId"
            _onChange={formik.handleChange}
            value={formik.values.userId}
            height="40px"
            border_radius="15px"
            margin="10px 0 10px 0"
          />
          {/* 닉네임 input */}
          {formik.touched.userId && formik.errors.userId ? (
            <HelperMsg>{formik.errors.userId}</HelperMsg>
          ) : null}
        </Grid>
        <Grid width="400px" height="80px" padding="3% 0px">
          <Text bold color={theme.fontColor} size="20px">
            닉네임
          </Text>
          <Input
            padding="0px 1%;"
            placeholder="닉네임을 입력해주세요."
            // _onChange={input_UserName}
            id="userName"
            name="userName"
            type="userName"
            _onChange={formik.handleChange}
            value={formik.values.userName}
            height="40px"
            border_radius="15px"
            margin="10px 0 10px 0"
          />
          {formik.touched.userName && formik.errors.userName ? (
            <HelperMsg>{formik.errors.userName}</HelperMsg>
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
            border_radius="15px"
            margin="10px 0 10px 0"
          />
          {formik.touched.pwd && formik.errors.pwd ? (
            <HelperMsg>{formik.errors.pwd}</HelperMsg>
          ) : null}
        </Grid>
        {/* 비밀번호 확인 input */}
        <Grid width="400px" height="80px" padding="3% 0px">
          <Text bold color={theme.fontColor} size="20px">
            비밀번호 확인
          </Text>
          <Input
            padding="0px 1%;"
            placeholder="비밀번호를 확인해주세요."
            // _onChange={input_PwChk}
            id="pwdCheck"
            name="pwdCheck"
            type="password"
            _onChange={formik.handleChange}
            value={formik.values.pwdCheck}
            height="40px"
            border_radius="15px"
            margin="10px 0 10px 0"
          />

          {formik.touched.pwdCheck && formik.errors.pwdCheck ? (
            <HelperMsg>{formik.errors.pwdCheck}</HelperMsg>
          ) : null}
        </Grid>

        {/* 회원가입 버튼 */}
        <Grid width="150px" height="70px" padding="5% 0px 3% 0px">
          <InputBtn type="submit" value="회원가입" />
          {/* <Button
                bg_color={"#376a48"}
                _onClick={registerBtn}>회원가입</Button> */}
        </Grid>
      </FromBox>
    </Grid>
  );
};

const Box = styled.div`
  width: 100%;
  height: 10%;
  padding: auto;
  text-align: center;
  padding-top: 3%;
`;

const FromBox = styled.form`
  width: 70%;
  height: 100%;
  margin: 2% auto;
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
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;
  color: ${theme.warningColor};
`;

export default SignUp;
