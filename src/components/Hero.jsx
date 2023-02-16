import { useTranslation } from "react-i18next";
import { SocialLink } from "./SocialLink";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";

import "../styles/hero.scss";
import { BtnPrimary } from "./BtnPrimary";

export const Hero = () => {
  const [t] = useTranslation("global");

  return (
    <section className="hero_section">
      <div className="container hero_data">
        <h1 className="hero_title">{t("hero.title")}</h1>
        <h2 className="hero_name">Jesús Arturo</h2>
        <h3 className="hero_subtitle">{t("hero.subtitle")}</h3>
        <p className="hero_description">{t("hero.description")}</p>

        <div className="hero_links">
          <BtnPrimary link={true} name={t("hero.button")} href="#about" />

          <div className="social_links">
            <SocialLink
              link="https://github.com/JessArthuro"
              icon={<FiGithub />}
            />
            <SocialLink
              link="https://www.linkedin.com/in/jsarturo-dev/"
              icon={<SlSocialLinkedin />}
            />
            <SocialLink
              link="https://twitter.com/JessArthuro"
              icon={<RxTwitterLogo />}
            />
            <SocialLink
              link="https://www.instagram.com/jess_arthuro/"
              icon={<RxInstagramLogo />}
            />
          </div>
        </div>

        <div className="scroll_down">
          <a href="#about" className="scroll_link"></a>
        </div>

        <div className="top_left_edges"></div>
        <div className="bottom_right_edges"></div>
      </div>
    </section>
  );
};
