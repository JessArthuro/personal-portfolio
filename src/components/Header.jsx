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
    const handleClickOutside = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [btnRef]);

  const [headerScroll, setHeaderScroll] = useState(false);

  const handleScrolling = () => {
    let scrollHeightLimit = 10;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > scrollHeightLimit) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".nav_section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav_link[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav_link[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <header
      className={`header_section ${headerScroll ? "header_scrolling" : ""}`}
    >
      <nav
        className="nav_content container"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <a href="/" className="logo_link">
          <img src={logo} alt="" className="logo_img" />
        </a>

        <div className="nav">
          <ol className={`nav_list ${menu ? "open_menu" : ""}`}>
            <li className="nav_item">
              <a
                className="nav_link"
                href="#about"
                onClick={() => setMenu(false)}
              >
                {t("header.about")}
              </a>
            </li>
            <li className="nav_item">
              <a
                className="nav_link"
                href="#experience"
                onClick={() => setMenu(false)}
              >
                {t("header.experience")}
              </a>
            </li>
            <li className="nav_item">
              <a
                className="nav_link"
                href="#projects"
                onClick={() => setMenu(false)}
              >
                {t("header.projects")}
              </a>
            </li>
            <li className="nav_item">
              <a
                className="nav_link"
                href="#contact"
                onClick={() => setMenu(false)}
              >
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
