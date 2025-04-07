import { Col, Modal } from "antd";
import { styled } from "styled-components";

export const VerificationRightBlock = styled(Modal)`
  .ant-modal-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-modal-title {
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
  }
`;

export const VerificationBlock = styled(Col)`
  width: 438px;
  border-radius: 20px;
  background-color: #fff;
  padding: 30px;
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  span,
  a,
  li,
  button,
  input,
  label {
    font-family: ${() =>
      localStorage.getItem("language") === "am"
        ? "Arial, sans-serif !important"
        : "Inter, serif !important"};
  }
  .ant-form-item-explain {
    display: none !important;
  }

  .ant-form-item .ant-form-item-label {
    overflow: visible;
  }

  .ant-form-item-required::before {
    display: none !important;
  }

  .ant-row {
    flex-direction: column;
  }

  .ant-col {
    min-height: auto;
  }

  form {
    width: 100%;
    margin-top: 60px;

    input {
      width: 100%;
      height: 56px;
      border: 2px solid #000;
      border-radius: 10px;
      margin: 0;

      &::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .ant-col-16 {
      max-width: 100%;
    }

    .ant-input-affix-wrapper {
      width: 100%;
      border: 2px solid #000;
      border-radius: 10px;
      height: 56px;
      display: flex;
      align-items: center;

      input {
        width: 100%;
        border-radius: 10px;
        margin: 0;
      }
    }

    .ant-form-item .ant-form-item-label {
      margin-left: 10px;
    }
    .ant-form-item .ant-form-item-label > label {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000;
      font-family: ${() =>
        localStorage.getItem("language") === "am"
          ? "Arial, sans-serif !important"
          : "Inter, serif !important"};
    }

    .ant-col-offset-8 {
      margin-inline-start: 0;
    }

    #login_remember {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ant-btn-variant-solid {
      width: 189px;
      height: 56px;
      border-radius: 10px;
      color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      background-color: #000000;
    }
    button {
      &:hover {
        background-color: #3e3737 !important;
      }
      span::hover {
        background-color: none !important;
      }
    }

    .ant-form-item-control-input-content {
      display: flex;
      justify-content: center;

      span:hover {
        border-color: #4096ff;
      }
    }

    .ant-input-outlined::focus-within {
      box-shadow: none !important;
    }
  }

  @media screen and (max-width: 1400px) {
    width: 400px;
    padding: 10px;
    font-family: ${() =>
      localStorage.getItem("language") === "am"
        ? "Arial, sans-serif !important"
        : "Inter, serif !important"};

    form {
      margin-top: 20px;
    }
  }
`;
