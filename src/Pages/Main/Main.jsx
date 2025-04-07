import React, { useEffect, useState } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Details from "./details/Details";

const Main = () => {
  const { t } = useTranslation();
  const arr = t("main.arr", { returnObjects: true });
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section" id="details">
      {!details && (
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            {t("main.title")}
          </h3>
        </div>
      )}

      <div className="secContent grid">
        {details ? (
          <Details details={details} setDetails={setDetails} />
        ) : (
          Array.isArray(arr) &&
          arr.map((item, index) => (
            <div key={index} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>

                <span className="continent flex">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      item.location,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiOutlineLocationMarker className="icon" />
                  </a>
                  <span className="name">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>

                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{item.description}</p>
                </div>

                <button className="btn flex" onClick={() => setDetails(item)}>
                  {t("main.details")}
                  <BsClipboard2Check className="icon" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Main;
