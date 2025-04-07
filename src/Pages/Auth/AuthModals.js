import { Button } from "antd";
import { useState } from "react";
import { AuthGeneralBlock } from "./styled.js";
import LoginModal from "./Login/LoginModal.js";
import RegisterModal from "./Register/Register.js";
import ForgotPassword from "./ForgetPassword/ForgetPassword.js";
import VerificationPage from "./VerificationCode/VerificationCode.js";
import ResetPassword from "./ResetPassword/ResetPassword.js";

const AuthModals = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isverification, setIsverification] = useState(false);
  const [isResetPassword, setIsResetpassword] = useState(false);

  const loginUser = localStorage.getItem("authToken");

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <AuthGeneralBlock>
      {loginUser ? (
        <Button type="primary" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button type="primary" onClick={() => setIsLoginOpen(true)}>
          Login
        </Button>
      )}

      <LoginModal
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        setIsRegisterOpen={setIsRegisterOpen}
        setIsForgetPassword={setIsForgetPassword}
      />
      <RegisterModal
        isRegisterOpen={isRegisterOpen}
        setIsRegisterOpen={setIsRegisterOpen}
        setIsLoginOpen={setIsLoginOpen}
      />

      <ForgotPassword
        setIsForgetPassword={setIsForgetPassword}
        isForgetPassword={isForgetPassword}
        setIsLoginOpen={setIsLoginOpen}
      />

      <VerificationPage
        isverification={isverification}
        setIsverification={setIsverification}
      />

      <ResetPassword
        isResetPassword={isResetPassword}
        setIsResetpassword={setIsResetpassword}
        setIsLoginOpen={setIsLoginOpen}
      />
    </AuthGeneralBlock>
  );
};

export default AuthModals;
