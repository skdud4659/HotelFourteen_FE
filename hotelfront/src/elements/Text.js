import React from 'react';
import styled from 'styled-components';

const Text = (props) => {

  const {margin, color, size, children, bold} = props

  const styles = {
    margin : margin,
    color : color,
    size : size,
    children : children,
    bold : bold,
  }

  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
}

Input.defaultProps = {
  margin : false,
  color : 'black',
  size : "14px",
  children : false,
  bold : false,
}

const P = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.bold? '700' : '400'};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
`;

export default Text;