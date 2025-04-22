import React, { useState } from "react";
import "./ContactUs.css";
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { IoMdMail } from "react-icons/io";

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
          <div>
           
            <IoMdMail />

              <a href="mailto:robkocharyan20@gmail.com">robkocharyan20@gmail.com</a>

          </div>
        </div>
      </div>
    </div>
  );
};
