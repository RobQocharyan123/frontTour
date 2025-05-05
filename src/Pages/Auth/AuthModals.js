import { Button, Dropdown } from 'antd';
import { useState } from 'react';
import { AuthGeneralBlock, UserLogOutDivBlock } from './styled.js';
import LoginModal from './Login/LoginModal.js';
import RegisterModal from './Register/Register.js';
import ForgotPassword from './ForgetPassword/ForgetPassword.js';
import VerificationPage from './VerificationCode/VerificationCode.js';
import ResetPassword from './ResetPassword/ResetPassword.js';
import { useDispatch } from 'react-redux';
import { verificationOtp } from '../../Components/Services/authService.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const AuthModals = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isverification, setIsverification] = useState(false);
  const [isResetPassword, setIsResetpassword] = useState(false);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const [isOpenLogOut, setIsOpenLogOut] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    window.location.reload();
  };
  const userData = JSON.parse(localStorage.getItem('userData'));

  const handleVerifyOtp = async () => {
    const result = await verificationOtp();
    if (result?.success) {
      setIsverification(true);
      toast.success(result?.message);
    } else {
      toast.error(result?.message);
    }
  };

  const items = [
    {
      key: '1',
      label: (
        <Button type="primary" onClick={handleLogOut} style={{ width: '100%' }}>
          {t('login.logOut')}
        </Button>
      ),
    },
  ];
  return (
    <AuthGeneralBlock>
      {userData ? (
        <>
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            className="dropdownLogOut"
          >
            <div className="logOut">
              {userData.email.slice(0, 2).toUpperCase()}
            </div>
          </Dropdown>
        </>
      ) : (
        <Button type="primary" onClick={() => setIsLoginOpen(true)}>
          {t('login.login')}
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
