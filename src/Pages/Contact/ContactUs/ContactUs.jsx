import React, { useState } from "react";
import "./ContactUs.css";
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const { t, i18n } = useTranslation();

  const handleClick = () => {
    if (validation()) {
      const obj = {
        name: name,
        lastName: lastName,
        message: message
      }
      toast.success(t("contactUs.success"))

      setName("");
      setLastName("");
      setMessage("");
    }

  };

  const validation = () => {
    let error = true
    if (name.trim() === "") {
      toast.error(t("contactUs.requiredName"))
      error = false
    } else if (lastName.trim() === "") {
      toast.error(t("contactUs.requiredLastName"))
      error = false
    } else if (message.trim() === "") {
      toast.error(t("contactUs.requiredMessage"))
      error = false
    } else {
      error = true
    }

    return error
  }

  return (
    <div className="contactUs">
      <h1 className="big">{t("contactUs.sotrudichayte")}</h1>
      <div className="contactUsSections">
        <h1 className="small">{t("contactUs.sotrudichayte")}</h1>

        <div className="inputs">
          <div className="personalInputs">
            <div className="nameInput">
              <input
                type="text"
                placeholder={t("contactUs.name")}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="lastNameInput">
              <input
                type="text"
                placeholder={t("contactUs.lastName")}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <div className="comment">
            <textarea
              placeholder={t("contactUs.message")}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button onClick={handleClick}>{t("contactUs.send")}</button>
        </div>
        <div className="icons">
          <h2>{t("contactUs.support")}</h2>
          <ul>
            {/* <li>
              <div className="commentIcon">
                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.177 0.417969C7.98962 0.417969 0.54541 6.47927 0.54541 13.9608C0.54541 18.2975 3.04905 21.7997 6.94217 24.2792L3.74383 32.018L13.3389 26.8588C14.5521 27.088 15.8781 27.5037 17.177 27.5037C26.3644 27.5037 33.8086 21.4424 33.8086 13.9608C33.8086 6.47927 26.3644 0.417969 17.177 0.417969Z"
                    fill="#323232"
                  />
                </svg>
              </div>
              <a href="#">{t("contactUs.supportOnline")}</a>
            </li> */}
            <li>
              <div className="letterIcon">
                <svg
                  width="33"
                  height="26"
                  viewBox="0 0 33 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3353 14.2639C16.2495 15.1851 17.2455 14.6784 17.6321 14.2761L30.2498 1.79618C30.3212 1.72478 30.3908 1.68996 30.4726 1.65513C29.3478 0.674777 27.8833 0.0722656 26.2778 0.0722656H6.68997C5.23598 0.0722656 3.91256 0.568547 2.83472 1.38347L15.3236 14.2642L15.3353 14.2639Z"
                    fill="#323232"
                  />
                  <path
                    d="M11.7517 12.8603L1.84697 2.30078C1.07729 3.38736 0.607178 4.72643 0.607178 6.18215V19.526C0.607178 20.9104 1.01987 22.2007 1.73205 23.2524L11.7517 12.8603Z"
                    fill="#323232"
                  />
                  <path
                    d="M20.2217 14.3829L19.1159 15.4573C18.4943 16.0772 17.5888 16.4864 16.6485 16.4864C15.8248 16.4864 14.9542 16.1695 14.2019 15.4347L13.1206 14.3359L2.83472 24.5241C3.94046 25.4 5.32651 25.9259 6.84322 25.9259H26.4993C28.0038 25.9259 29.3794 25.4122 30.473 24.5467L20.2099 14.3826L20.2217 14.3829Z"
                    fill="#323232"
                  />
                  <path
                    d="M31.6574 2.74707C31.6574 2.74707 31.6104 2.8411 31.5651 2.88986L21.5579 13.005L31.5424 23.2525C32.265 22.199 32.7021 20.9104 32.7021 19.526V6.30789C32.7021 4.99495 32.3225 3.77601 31.6677 2.75911L31.6574 2.74707Z"
                    fill="#323232"
                  />
                </svg>
              </div>
              <a href="mailto:mvnnproject@gmail.com">mvnnproject@gmail.com</a>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
