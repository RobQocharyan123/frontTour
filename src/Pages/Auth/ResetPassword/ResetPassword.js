import { ResetPasswordBlock, ResetPasswordRightBlock } from "./styled.js";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResetPassword = ({
  isResetPassword,
  setIsResetpassword,
  setIsLoginOpen,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onResetPassword = async (values) => {
    const data = {
      new_password: values.password,
    };
    console.log(data, "this is data");
    setIsLoginOpen(true);
    setIsResetpassword(false);
  };

  const handleCancel = () => {
    setIsResetpassword(false);
    form.resetFields();
  };

  return (
    <>
      <ResetPasswordRightBlock
        title={t("login.resetPassword")}
        open={isResetPassword}
        onCancel={handleCancel}
        footer={null}
      >
        <ResetPasswordBlock>
          <Form
            form={form}
            name="ResetPassword"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onResetPassword}
          >
            <Form.Item
              label={t("login.password")}
              name="password"
              labelAlign="left"
              colon={false}
              rules={[
                {
                  required: true,
                  message: t("login.passwordError3"),
                },
                {
                  min: 5,
                  message: t("login.passwordError1"),
                },
                {
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!.<>,?@$!%*?&])[A-Za-z\d#$%^&*!.<>,?@$!%*?&]{5,}$/,
                  message: t("login.passwordError2"),
                },
              ]}
              validateTrigger={["onBlur", "onChange"]}
            >
              <Input.Password placeholder={t("login.password")} />
            </Form.Item>

            <Form.Item
              label={t("login.repeatPassword")}
              name="repeat_password"
              labelAlign="left"
              colon={false}
              rules={[
                {
                  required: true,
                  message: t("login.confirmPasswordError1"),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(t("login.confirmPasswordError2")),
                    );
                  },
                }),
              ]}
              validateTrigger={["onBlur", "onChange"]}
            >
              <Input.Password placeholder={t("login.repeatPassword")} />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ResetPasswordBlock>
      </ResetPasswordRightBlock>
    </>
  );
};

export default ResetPassword;
