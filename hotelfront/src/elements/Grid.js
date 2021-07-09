import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { children, width, is_flex, padding, margin, height } = props;
  const styles = {
    width,
    is_flex,
    padding,
    margin,
    height,
  };
  return <Wrapper {...styles}>{children}</Wrapper>;
};

Grid.defaultProps = {
  children: null,
  width: "100%",
  height: "100%",
  is_flex: false,
  padding: "auto",
  margin: "auto",
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) =>
    props.is_flex &&
    `
  display: flex;
  justify-content : center;
  align-items: center;
  `}
  padding : ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export default Grid;
