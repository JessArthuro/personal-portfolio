import { useTranslation } from "react-i18next";
import { SocialLink } from "./SocialLink";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { BtnPrimary } from "./BtnPrimary";
import "../styles/hero.scss";

export const Hero = () => {
  const [t] = useTranslation("global");

  return (
    <section className="hero_section">
      <div className="container hero_data">
        <h1 className="hero_title" data-aos="fade-right" data-aos-delay="800">
          {t("hero.title")}
        </h1>
        <h2 className="hero_name" data-aos="fade-right" data-aos-delay="1000">
          Jesús Arturo
        </h2>
        <h3
          className="hero_subtitle"
          data-aos="fade-right"
          data-aos-delay="1200"
        >
          {t("hero.subtitle")}
        </h3>
        <p
          className="hero_description"
          data-aos="fade-right"
          data-aos-delay="1400"
        >
          {t("hero.description")}
        </p>

        <div
          className="hero_links"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="1600"
        >
          <BtnPrimary link={true} name={t("hero.button")} href="#about" />

          <div className="social_links">
            <SocialLink
              link="https://github.com/JessArthuro"
              icon={<FiGithub />}
              arialabel="Github"
              />
            <SocialLink
              link="https://www.linkedin.com/in/jsarturo-dev/"
              icon={<SlSocialLinkedin />}
              arialabel="Linkedin"
              />
            <SocialLink
              link="https://www.instagram.com/jess_arthuro/"
              icon={<RxInstagramLogo />}
              arialabel="Instagram"
            />
          </div>
        </div>

        <div
          className="scroll_down"
          data-aos="zoom-in"
          data-aos-offset="80"
          data-aos-anchor-placement="bottom-bottom"
        >
          <a href="#about" className="scroll_link" aria-label="Button to indicate scrolling down"></a>
        </div>

        <div
          className="top_left_edges"
          data-aos="fade-down"
          data-aos-delay="1600"
        ></div>
        <div
          className="bottom_right_edges"
          data-aos="fade-down"
          data-aos-delay="1600"
        ></div>
      </div>
    </section>
  );
};
