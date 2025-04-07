import { Col, Modal } from "antd";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LoginModalBlock = styled(Modal)`
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

export const LoginBlock = styled(Col)`
  background-color: #fff;
  padding: 30px;
  justify-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;





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
      font-family: ${() =>
        localStorage.getItem("language") === "am"
          ? "Arial, sans-serif !important"
          : "Inter, serif !important"};

      &::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
      }
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
      font-family: ${() =>
        localStorage.getItem("language") === "am"
          ? "Arial, sans-serif !important"
          : "Inter, serif !important"};
    }
  }

  @media screen and (max-width: 1700px) {
    width: 450px;
  }

  @media screen and (max-width: 1400px) {
    width: 400px;
    padding: 10px;

    form {
      margin-top: 20px;
    }
  }
`;

export const NewUserLinkBlock = styled(Col)`
  font-family: ${() =>
    localStorage.getItem("language") === "am"
      ? "Arial, sans-serif !important"
      : "Inter, serif !important"};
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const ErrorMessageBlock = styled(Col)`
  width: 435px;
  height: 97px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: rgba(255, 43, 43, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
`;

export const ButtonBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RememberBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a,
  span {
    font-family: ${() =>
      localStorage.getItem("language") === "am"
        ? "Arial, sans-serif !important"
        : "Inter, serif !important"};
  }
`;

export const RegisterLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  color: #0059ff;
  margin-left: 5px;
  font-family: ${() =>
    localStorage.getItem("language") === "am"
      ? "Arial, sans-serif !important"
      : "Inter, serif !important"};
`;

export const LogInTitle = styled(Col)`
  color: #000000;
  font-size: 48px;
  font-weight: 500;
  font-family: ${() =>
    localStorage.getItem("language") === "am"
      ? "Arial, sans-serif !important"
      : "Inter, serif !important"};
`;
