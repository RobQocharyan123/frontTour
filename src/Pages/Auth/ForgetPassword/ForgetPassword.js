import { ForgotPasswordBlock, ForgotPasswordGeneralBlock } from "./styled.js";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgotPassword = ({ setIsForgetPassword, isForgetPassword }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const data = {
      email: values?.email,
    };
    console.log(data, "this is data");
    setIsForgetPassword(false);
  };

  const handleCancel = () => {
    setIsForgetPassword(false);
    form.resetFields();
  };

  return (
    <>
      <ForgotPasswordGeneralBlock
        title={t("login.forgotPassword")}
        open={isForgetPassword}
        onCancel={handleCancel}
        footer={null}
      >
        <ForgotPasswordBlock>
          <Form
            form={form}
            name="ForgotPassword"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
          >
            <Form.Item
              label={t("login.email")}
              name="email"
              labelAlign="left"
              colon={false}
              rules={[{ required: true }]}
              validateTrigger={["onBlur", "onChange"]}
            >
              <Input type={"email"} placeholder={t("login.email")} />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                {t("login.submit")}
              </Button>
            </Form.Item>
          </Form>
        </ForgotPasswordBlock>
      </ForgotPasswordGeneralBlock>
    </>
  );
};

export default ForgotPassword;
