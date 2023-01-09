import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ArrowDown from "../assets/arrow-down.svg";
import MxFlag from "../assets/mx-flag.svg";
import UsFlag from "../assets/us-flag.svg";
import logo from "../assets/logo.svg";
import "../styles/header.scss";

export const Header = () => {
  const [t, i18n] = useTranslation("global");

  const [menu, setMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <header className="header_section">
      <nav className="nav_content container">
        <a href="/">
          <img src={logo} alt="" className="logo_img" />
        </a>

        <div className="nav">
          <ol className={`nav_list ${menu ? "open_menu" : ""}`}>
            <li className="nav_item">
              <a className="nav_link" href="#">
                {t("header.about")}
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">
                {t("header.experience")}
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">
                {t("header.projects")}
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="#">
                {t("header.contact")}
              </a>
            </li>
          </ol>
          <button className="menu_btn" onClick={() => setMenu((prev) => !prev)}>
            <HiOutlineMenuAlt3 />
          </button>
          <button
            className={`close_menu ${menu ? "open_menu" : ""}`}
            onClick={() => setMenu(false)}
          >
            <IoMdClose />
          </button>
        </div>

        <div className={`languages ${menu ? "open_menu" : ""}`}>
          <span className="languages_icon">
            <HiLanguage />
          </span>
          <button
            ref={btnRef}
            className="languages_btn"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {i18n.language}
            <img className="arrow_icon" src={ArrowDown} alt="" />
          </button>

          <ul className={`languages_list ${isOpen ? "open" : ""}`}>
            <li onClick={() => i18n.changeLanguage("en")}>
              <img src={UsFlag} alt="" /> {t("header.english")}
            </li>
            <li onClick={() => i18n.changeLanguage("es")}>
              <img src={MxFlag} alt="" /> {t("header.spanish")}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
