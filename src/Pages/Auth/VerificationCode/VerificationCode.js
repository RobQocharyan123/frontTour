import { VerificationBlock, VerificationRightBlock } from "./styled.js";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const VerificationPage = ({ isverification, setIsverification }) => {
  const userId = useSelector(
    (state) => state?.userRegistr?.registrationData.user_id,
  );
  const location = useLocation();
  const userIdEmail = useSelector((state) => state?.auth?.authData);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const data = {
      code: values?.verification,
    };

    console.log(data, "this is data");
  };

  const handleCancel = () => {
    setIsverification(false);
  };

  return (
    <>
      <VerificationRightBlock
        title={t("login.verification")}
        open={isverification}
        onCancel={handleCancel}
        footer={null}
      >
        <VerificationBlock>
          <Form
            name="verification"
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
              label={t("login.verificationCode")}
              name="verification"
              labelAlign="left"
              colon={false}
              rules={[{ required: true }]}
              validateTrigger={["onBlur", "onChange"]}
            >
              <Input placeholder={t("login.verificationCode")} />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                {t("login.submit")}
              </Button>
            </Form.Item>
          </Form>
        </VerificationBlock>
      </VerificationRightBlock>
    </>
  );
};

export default VerificationPage;
