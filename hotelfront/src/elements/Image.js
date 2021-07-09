import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { width, height, margin } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
  };

  return (
    <React.Fragment>
      <DefaultImage {...styles} />
    </React.Fragment>
  );
};

Image.defaultProps = {
  width: "100%",
  height: "100%",
  margin: false,
};

const DefaultImage = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

export default Image;
