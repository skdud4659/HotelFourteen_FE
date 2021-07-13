import React from "react";
import styled from "styled-components";

import { Text } from "../elements";

const Input = (props) => {

  const {
    width,
    padding,
    bg,
    name,
    height,
    border,
    size,
    margin,
    label,
    value,
    placeholder,
    _onChange,
    type,
    need_value,
    multiline,
    border_radius,
    color,
  } = props;


  const styles = {
    padding: padding,
    width: width,
    margin: margin,
    height: height,
    border: border,
    size: size,
    bg: bg,
    border_radius,
    color,
  };

  if (need_value) {
    return (
      <React.Fragment>
        <Text>{label}</Text>
        <InputBox
          {...styles}
          placeholder={placeholder}
          type={type}
          onChange={_onChange}
          value={value}
        />
      </React.Fragment>
    );
  }

  if (multiline) {
    return (
      <React.Fragment>
        <TextArea
          rows={17}
          {...styles}
          placeholder={placeholder}
          type={type}
          onChange={_onChange}
        />
      </React.Fragment>
    );
  }
  if (multiline_value) {
    return (
      <React.Fragment>
        <TextArea
          rows={17}
          {...styles}
          placeholder={placeholder}
          type={type}
          onChange={_onChange}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Text>{label}</Text>
      <InputBox
        {...styles}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={_onChange}
        required
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  width: "100%",
  padding: false,

  height : "100%",
  border : false,
  size : "14px",
  margin : false,
  label : "",
  value : "",
  placeholder : "",
  _onChange : () => {},
  type : "text",
  need_value : false,
  multiline :false,
  multiline_value :false,
  name : "",
  bg: null,
  border_radius: "",
  color: "",
};

const InputBox = styled.input`
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  border: none;
  color: ${(props) => props.color};

  //css 만들면 focus 조절
`;

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  resize: none;
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  border: none;
  color: ${(props) => props.color};
  //css 만들면 focus 조절
`;

export default Input;
