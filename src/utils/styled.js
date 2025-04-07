import { styled } from "styled-components";
import { switchProp } from "styled-tools";
import { css } from "styled-components";

export const InputWrapper = styled.div`
  .ant-input {
    background: transparent;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0px 1000px #fff inset;

      transition: background-color 5000s ease-in-out 0s;
    }
    * {
      color: "#fff";
      background-color: "#fff";
    }
  }

  ${switchProp("inptype", {
    auth: css`
      .ant-input {
        padding: 6px 10px 6px 12px;
        width: 400px;
        height: 36px;
        background: #ffffff;
        border: 1px solid #cbd5e1;
        border-radius: 12px;
      }
    `,
    password: css`
      .ant-input-password {
        width: 300px;
        height: 45px;
        .ant-input {
          width: 100%;
          height: 100%;
        }
      }
    `,
    custom: css`
      .ant-input {
        height: 36px;
        border: 1px solid rgba(0, 0, 0, 0.5);
      }
    `
  })}
`;
