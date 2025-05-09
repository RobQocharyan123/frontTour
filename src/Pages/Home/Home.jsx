import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaTripadvisor } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            {t("home.smallTitle")}
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            {t("home.bigTitle")}
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">{t("home.destination")}</label>

            <div className="input flex">
              <input type="text" placeholder={t("home.enterName")} />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">{t("home.date")}</label>

            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">{t("home.price")}</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={"5000"} min={"1000"} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>{t("home.filters")}</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <CiCircleList className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
