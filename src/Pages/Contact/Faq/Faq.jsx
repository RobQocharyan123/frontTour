import React, { useState } from "react";
import "./Faq.css";
import { useTranslation } from "react-i18next";
import { Accordion } from "./According";

export const Faq = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const accordion = t("faq.accordion", { returnObjects: true });

  return (
    <div className="faq">
      <div className="faqText">
        <h1>{t("faq.title")}</h1>
        <p>{t("faq.faqText")}</p>
      </div>
      <div className="faqAcordion">
        {Array.isArray(accordion) &&
          accordion.map((item) => {
            return <Accordion big={item.big} small={item.small} />;
          })}
      </div>
    </div>
  );
};
