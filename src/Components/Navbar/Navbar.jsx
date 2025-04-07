import React from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Language } from "./../Languages/Language";
import { useTranslation } from "react-i18next";
import AuthModals from "./../../Pages/Auth/AuthModals";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const { t, i18n } = useTranslation();
  const navArr = t("header.nav", { returnObjects: true });

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              {t("header.title")}
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            {Array.isArray(navArr) &&
              navArr.map((i) => {
                return (
                  <li className="navItem">
                    <Link to={`/${i}`} className="navLink">
                      {i}
                    </Link>
                  </li>
                );
              })}

            <button className="btn">
              <Link to="/book">{t("header.book")}</Link>
            </button>
          </ul>

          <div className="closeNavBar" onClick={removeNavbar}>
            <IoCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
          <TbGridDots className="icon" />
        </div>

        <Language />

        <AuthModals />
      </header>
    </section>
  );
};

export default Navbar;
