import React from 'react';
import { Grid, Button, Input, Text, Image } from "../elements";
import Book_list from './Book_list';

import {actionUserBookInfo} from '../redux/modules/book';
import {useDispatch, useSelector} from 'react-redux';


const Book_Detail = (props) => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(actionUserBookInfo())
  },[])

  const book_list = useSelector((state) => state.book.user_book_info)

  return (
    <React.Fragment>
      <Grid>
        {/* 예약 타이틀 */}
        <Grid height="5%">
          <Text color={'white'} bold size="30px">다가오는 예약</Text>
        </Grid>
          {book_list.map((b,idx) => {
            return (
            <Grid height="auto" margin="3% 0px">
              <Book_list key={b.id} {...b}/>
            </Grid>
            )
          })}
      </Grid>
    </React.Fragment>
  );
}

export default Book_Detail;