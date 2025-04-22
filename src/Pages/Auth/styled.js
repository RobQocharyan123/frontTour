import styled from "styled-components";
import { Col } from "antd";

export const AuthGeneralBlock = styled(Col)`
  position: absolute;
  top: 24px;
  right: 10px;
  z-index: 5;

  .logOut{
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    background-color: gray;
    color: #FFF;
    border-radius: 50%;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;

  }

  .dropdownLogOut{
    button{
      width: 100%;
    }
  }
`;



