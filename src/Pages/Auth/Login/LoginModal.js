import { Button, Modal, Checkbox, Form, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { userLoginService } from '../../../Components/Services/authService.js';
import Input from './../../../utils/index.js';
import { toast } from 'react-toastify';
import {
  ButtonBlock,
  LoginBlock,
  LoginModalBlock,
  NewUserLinkBlock,
  RegisterLink,
  RememberBlock,
} from './styled.js';
const { Link: AntLink } = Typography;

const LoginModal = ({
  isLoginOpen,
  setIsLoginOpen,
  setIsRegisterOpen,
  setIsForgetPassword,
}) => {
  const [isRemember, setIsRemember] = useState(false);
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleOk = () => {
    setIsLoginOpen(false);
  };
  const handleCancel = () => {
    setIsLoginOpen(false);
    form.resetFields();
  };

  const handelGoRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handelGoResetPassword = () => {
    setIsForgetPassword(true);
    setIsLoginOpen(false);
  };

  const handleSubmit = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
      limit: isRemember,
    };

    try {
      const res = await userLoginService({ data, setIsLoginOpen });

      if (!res.success) {
        toast.error(res?.message);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <LoginModalBlock
      title={t('login.login')}
      open={isLoginOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <LoginBlock>
        <Form name="login" onFinish={handleSubmit} form={form}>
          <Form.Item
            label={t('login.email')}
            name="email"
            colon={false}
            labelAlign="left"
            rules={[{ required: true, message: 'Email is require' }]}
          >
            <Input type={'email'} placeholder={t('login.email')} />
          </Form.Item>
          <Form.Item
            label={t('login.password')}
            name="password"
            colon={false}
            labelAlign="left"
            rules={[{ required: true, message: 'Password is require' }]}
          >
            <Input
              inptype="password"
              password
              placeholder={t('login.password')}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" label={null}>
            <RememberBlock>
              <Checkbox
                checked={isRemember}
                onChange={(ev) => setIsRemember(ev.target.checked)}
              >
                {t('login.rememberMe')}
              </Checkbox>
              <AntLink to="/forgotPassword" onClick={handelGoResetPassword}>
                {t('login.forgotPassword')}
              </AntLink>
            </RememberBlock>
          </Form.Item>
          <Form.Item label={null}>
            <ButtonBlock>
              <Button type="primary" htmlType="submit">
                {t('login.login')}
              </Button>
            </ButtonBlock>
          </Form.Item>

          <NewUserLinkBlock>
            {t('login.haveNotAccaunt')}
            <RegisterLink to="" onClick={handelGoRegister}>
              {t('login.register')}
            </RegisterLink>
          </NewUserLinkBlock>
        </Form>
      </LoginBlock>
    </LoginModalBlock>
  );
};
export default LoginModal;
