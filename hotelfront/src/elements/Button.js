import React from "react";
import styled from "styled-components";

const Button = (props) => {

  const { _onClick, children, ...rest } = props;

  return <ButtonEle {...rest} onClick={_onClick }>{children}</ButtonEle>;

};

Button.defaultProps = {
  children: null,
  bg_color: "#0E693F",
  width: "100%",
  margin: "auto",
  height: "100%",
  _onClick: () => {},
  type: "button",
  hover_color: "white",
  border_radius: "0px",
};

const ButtonEle = styled.button`
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg_color};
  color: ${(props) => props.hover_color};
  border-radius: ${(props) => props.border_radius};
  transition: background-color 0.3s;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.hover_color};
    color: ${(props) => props.bg_color};
    border: 1px solid ${(props) => props.bg_color};
  }
`;

export default Button;
