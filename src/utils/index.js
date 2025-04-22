/**
 * @file.
 * contain Input component.
 */
import React from "react";
import { InputWrapper } from "./styled.js";
import { Input as AntInput } from "antd";
const Input = ({ password, inptype, ...props }) => (
  <InputWrapper inptype={inptype}>
    {password ? <AntInput.Password {...props} /> : <AntInput {...props} />}
  </InputWrapper>
);

export default Input;



