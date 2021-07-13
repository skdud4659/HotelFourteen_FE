import React from 'react';
import {Grid, Image, Input, Button} from '../elements';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { addReviewDB, updateReviewDB } from '../redux/modules/review';

import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {history} from '../redux/configStore';


const Write = (props) => {
  const dispatch = useDispatch();

  //수정하기
  const review_list = useSelector((state) => state.review.list)
  const review_id = history.location.pathname.split('/')[2]
  const is_edit = review_id ? true : false;

  let _review = is_edit ? review_list.find((r) => r._id === review_id) : null;

  //수정 시 로드
  React.useEffect(() => {
    console.log(_review)
    if(is_edit && !_review) {
      window.alert('앗! 포스트 로드에 오류가 있어요! 관리자에게 문의해주세요.')
      history.goBack();
  
      return
    }
  },[])

  //input 값
  const [content, setContent] = React.useState(_review ? _review.content : "");
  const [title, setTitle] = React.useState(_review ? _review.title : "");

  const input_content = (e) => {
    setContent(e.target.value)
  }

  const input_title = (e) => {
    setTitle(e.target.value)
  }

  //작성 버튼
  const WriteBtn = () => {
    dispatch(addReviewDB(title, content))
  }

 //수정 버튼
  const EditBtn = () => {
    dispatch(updateReviewDB(title, content, review_id))
  }

  //뒤로가기 버튼
  const GoBack = () => {
    history.goBack()
  }

  //수정일 때
  if(is_edit) {
    return (
      <React.Fragment>
      {/* 글쓰기 상자 */}
      <Grid is_flex bg={'rgba(0,0,0,0.1)'} width="70%" height="100%" margin="2% auto" padding="2% 5% 5% 5%">
            {/* flex 좌측 */}
            <Grid>
              {/* 파일 */}
                {/* <Grid width="70px" height="auto" padding="5% 0px 0px 0px" margin="0px 0px 0px 5%"> 
                    <Input type={'file'} id="input"></Input>
                </Grid> */}
                {/* 미리보기 이미지 */}
                <Grid>
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/03/18/14/06/milky-way-2154049_1280.jpg"
                    width=" 600px"
                    height="400px"
                    margin="3% 0px 0px 5%"/> 
                </Grid>
            </Grid>
            {/* flex 우측 - textarea */}
            <Grid>
              <Grid>
                <Input
                  need_value
                  width="92%"
                  padding="2%"
                  placeholder="제목을 입력해주세요."
                  _onChange={input_title}
                  value={title}></Input>
              </Grid>
              <Grid>
              <Input
                multiline
                width="90%"
                margin="6% 5% 0px 0px;"
                padding="3%;"
                _onChange={input_content}
                placeholder="후기를 입력해주세요."
                value={content}/>  
              </Grid>
            </Grid>
          </Grid>
          {/* 작성 버튼 */}
          <Btn>
            <Button
              width="80px"
              height="80px"
              border_radius="50%"
              bg_color="rgba(0,0,0,0.0)" 
              _onClick={EditBtn}>
                <FontAwesomeIcon icon={faCheckCircle} size="5x" color="rgba(52, 118, 88, 1)"/>
            </Button>
          </Btn>
          {/* 뒤로가기 버튼 */}
          <BtnBack>
            <Button
              width="80px"
              height="80px"
              border_radius="50%"
              bg_color="rgba(0,0,0,0.0)" 
              _onClick={GoBack}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="5x" color="rgba(52, 118, 88, 1)"/>
            </Button>
          </BtnBack>
    </React.Fragment>
    )
  }

  //삭제일 때
  return (
    <React.Fragment>
      {/* 글쓰기 상자 */}
      <Grid is_flex bg={'rgba(0,0,0,0.1)'} width="70%" height="100%" margin="2% auto" padding="2% 5% 5% 5%">
            {/* flex 좌측 */}
            <Grid>
              {/* 파일 */}
                {/* <Grid width="70px" height="auto" padding="5% 0px 0px 0px" margin="0px 0px 0px 5%"> 
                    <Input type={'file'} id="input"></Input>
                </Grid> */}
                {/* 미리보기 이미지 */}
                <Grid>
                  <Image
                    src="https://cdn.pixabay.com/photo/2017/03/18/14/06/milky-way-2154049_1280.jpg"
                    width="90%"
                    height="400px"
                    margin="3% 0px 0px 5%"/> 
                </Grid>
            </Grid>
            {/* flex 우측 - textarea */}
            <Grid>
              <Grid>
                <Input
                  width="92%"
                  padding="2%"
                  placeholder="제목을 입력해주세요."
                  _onChange={input_title}></Input>
              </Grid>
              <Grid>
              <Input
                multiline
                width="90%"
                margin="6% 5% 0px 0px;"
                padding="3%;"
                _onChange={input_content}
                placeholder="후기를 입력해주세요."/>  
              </Grid>
            </Grid>
          </Grid>
          {/* 작성 버튼 */}
          <Btn>
            <Button
              width="80px"
              height="80px"
              border_radius="50%"
              bg_color="rgba(0,0,0,0.0)"
              _onClick={WriteBtn}>
                <FontAwesomeIcon icon={faCheckCircle} size="5x" color="rgba(52, 118, 88, 1)"/>
            </Button>
          </Btn>
          {/* 뒤로가기 버튼 */}
          <BtnBack>
            <Button
              width="80px"
              height="80px"
              border_radius="50%"
              bg_color="rgba(0,0,0,0.0)" 
              _onClick={GoBack}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="5x" color="rgba(52, 118, 88, 1)"/>
            </Button>
          </BtnBack>
    </React.Fragment>
  );
}


const Btn = styled.div`
  float: right;
  margin-right: 1%;
`;

const BtnBack = styled.div`
  float: left;
  margin-left: 1%;
`;


export default Write;

