import React from 'react';
import {useSelector} from 'react-redux';

import {getCookie} from '../shared/cookie';
;
const Permit = (props) => {
  const user_name = useSelector((state)=>state.user.user_info.nickname)
  const review_name = useSelector((state) => state.review.list.nickname)
  const accessToken = `${getCookie("token")}`;

  if (accessToken && (user_name === review_name)) {
    return <React.Fragment>{props.children}</React.Fragment>
  }
  return null;
};

export default Permit;