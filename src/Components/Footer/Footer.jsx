import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/video.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import "aos/dist/aos.css";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { Tooltip } from "antd";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const agancyArr = t("footer.agancyArr", { returnObjects: true });

  const partnersArr = t("footer.partnersArr", { returnObjects: true });
  const lastArr = t("footer.lastArr", { returnObjects: true });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>{t("footer.smallTitle")}</small>
            <h2>{t("footer.bigTitle")}</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder={t("footer.enterEmail")}
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              {t("footer.send")}
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> {t("footer.title")}
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              {t("footer.description")}
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">{t("footer.agancy")}</span>

              {Array.isArray(agancyArr) &&
                agancyArr.map((i) => {
                  return (
                    <Tooltip title={i}>
                      <li className="footerList flex">
                        <FiChevronRight className="icon" />
                        {i}
                      </li>
                    </Tooltip>
                  );
                })}
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">{t("footer.partners")}</span>

              {Array.isArray(partnersArr) &&
                partnersArr.map((i) => {
                  return (
                    <Tooltip title={i}>
                      <li className="footerList flex">
                        <FiChevronRight className="icon" />
                        {i}
                      </li>
                    </Tooltip>
                  );
                })}
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">{t("footer.last")}</span>

              {Array.isArray(lastArr) &&
                lastArr.map((i) => {
                  return (
                    <Tooltip title={i}>
                      <li className="footerList flex">
                        <FiChevronRight className="icon" />
                        {i}
                      </li>
                    </Tooltip>
                  );
                })}
            </div>
          </div>

          <div className="footerDiv flex">
            <small>{t("footer.subOne")}</small>
            <small>{t("footer.subTwo")}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
