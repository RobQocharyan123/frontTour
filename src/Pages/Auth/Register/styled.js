import { Col, Modal } from "antd";
import { styled } from "styled-components";

export const RegisterRightBlock = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterBlock = styled(Col)`
  width: 500px;
  border-radius: 20px;
  background-color: #fff;
  padding: 30px;
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${() =>
    localStorage.getItem("language") === "am"
      ? "Arial, sans-serif !important"
      : "Inter, serif !important"};

  span,
  a,
  .ant-form-item-label,
  input {
    font-family: ${() =>
      localStorage.getItem("language") === "am"
        ? "Arial, sans-serif !important"
        : "Inter, serif !important"};
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
    margin-top: 15px;

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
    .ant-form-item .ant-col-16 {
      max-width: 100%;
    }
    .ant-select .ant-select-selection-item {
      overflow: visible;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.5);
    }

    .ant-input-group-wrapper-outlined .ant-input-group-addon {
      border: 2px solid #000;
      border-right: none;
    }
    .ant-input-group-wrapper-outlined.ant-input-group-wrapper-status-error
      .ant-input-group-addon {
      border: 1px solid #ff4d4f;
      border-right: none;
    }

    .ant-form-item .ant-form-item-explain-error {
      font-size: 12px;
    }
    .ant-form-item {
      margin-bottom: 10px !important;
    }

    .ant-input-affix-wrapper {
      width: 100%;
      border: 2px solid #000;
      border-radius: 10px;
      height: 56px;
      display: flex;
      align-items: center;
    }

    .ant-form-item .ant-form-item-label {
      margin-left: 10px;
    }
    .ant-form-item .ant-form-item-label > label {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000;
    }

    .ant-form-item-control-input-content {
      span:hover {
        border-color: #4096ff;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    width: 400px;
    padding: 10px;

    form {
      margin-top: 20px;
    }

    .ant-form-item .ant-form-item-label > label {
      height: 0;
    }
  }
`;

export const RegisterButtonBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterModalBlock = styled(Modal)`
  .ant-modal-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .ant-modal-title {
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
  }

  .ant-modal-content {
    top: -90px;
    padding: 5px;
  }
`;
