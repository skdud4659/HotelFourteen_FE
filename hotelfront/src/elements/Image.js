import React from 'react';
import styled from 'styled-components';
import bg_IMG from '../img/bg.jpg'

const Image = (props) => {

  const {width, height, margin, src} = props

  const styles = {
    width:width,
    height:height,
    margin:margin,
  }

  return (
    <React.Fragment>
      <DefaultImage {...styles} src={src}/>
    </React.Fragment>
  );
}

Image.defaultProps = {
  width : "100%",
  height : "100%",
  margin : false,
  src: bg_IMG,
}

const DefaultImage = styled.image`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};

  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Image;