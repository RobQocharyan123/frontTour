import {
  RegisterBlock,
  RegisterButtonBlock,
  RegisterModalBlock,
  RegisterRightBlock,
} from './styled.js';
import { Button, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Input from '../../../utils/index.js';
import { userRegisterService } from './../../../Components/Services/authService.js';
import { toast } from 'react-toastify';

const RegisterModal = ({
  isRegisterOpen,
  setIsRegisterOpen,
  setIsLoginOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const handleSubmit = async (values) => {
    const data = {
      name: values?.name,
      email: values?.email,
      password: values?.password,
    };
    try {
      const res = await userRegisterService(data);

      if (res.success) {
        toast.success('Your Accaunt has been created');
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
      } else {
        toast.error(res?.message);
        form.resetFields();
        setIsRegisterOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('isRefreshed');
    };
  }, [navigate]);

  const handleCancel = () => {
    setIsRegisterOpen(false);
    form.resetFields();
  };

  return (
    <>
      <RegisterModalBlock
        title={t('login.register')}
        open={isRegisterOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={null}
      >
        <RegisterRightBlock>
          <RegisterBlock>
            <Form
              form={form}
              name="register"
              initialValues={{
                prefix: '+374',
              }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Form.Item
                label={t('login.name')}
                name="name"
                labelAlign="left"
                colon={false}
                rules={[{ required: true, message: 'Username is required' }]}
              >
                <Input placeholder={t('login.name')} />
              </Form.Item>

              <Form.Item
                label={t('login.email')}
                name="email"
                labelAlign="left"
                colon={false}
                rules={[{ required: true, message: 'Email is required' }]}
              >
                <Input type={'email'} placeholder={t('login.email')} />
              </Form.Item>

              <Form.Item
                label={t('login.password')}
                name="password"
                labelAlign="left"
                colon={false}
                rules={[
                  {
                    required: true,
                    message: t('login.passwordError3'),
                  },
                  {
                    min: 5,
                    message: t('login.passwordError1'),
                  },
                  {
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.<>,?@$!%*?&])[A-Za-z\d#$%^&*!.<>,?@$!%*?&]{5,}$/,
                    message: t('login.passwordError2'),
                  },
                ]}
              >
                <Input
                  password
                  placeholder={t('login.password')}
                  autoComplete="new-password"
                />
              </Form.Item>

              <Form.Item
                label={t('login.confirmPassword')}
                name="confirmPassword"
                labelAlign="left"
                colon={false}
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: t('login.confirmPasswordError1'),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(t('login.confirmPasswordError2'))
                      );
                    },
                  }),
                ]}
              >
                <Input password placeholder={t('login.confirmPassword')} />
              </Form.Item>

              <Form.Item label={null}>
                <RegisterButtonBlock>
                  <Button type="primary" htmlType="submit">
                    {t('login.register')}
                  </Button>
                </RegisterButtonBlock>
              </Form.Item>
            </Form>
          </RegisterBlock>
        </RegisterRightBlock>
      </RegisterModalBlock>
    </>
  );
};

export default RegisterModal;
