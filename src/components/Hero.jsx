import { useTranslation } from "react-i18next";
import { SocialLink } from "./SocialLink";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import "../styles/hero.scss";

export const Hero = () => {
  const [t] = useTranslation("global");

  return (
    <section className="hero_section">
      <div className="container hero_data">
        <h1 className="hero_title">{t("hero.title")}</h1>
        <h2 className="hero_name">Jesús Arturo.</h2>
        <h3 className="hero_subtitle">{t("hero.subtitle")}</h3>
        <p className="hero_description">{t("hero.description")}</p>
        <a href="#contact" className="hero_btn">
          {t("hero.button")}
        </a>

        <div className="left_side">
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
              link="https://www.facebook.com/jesusarturo.carmonaaguirre"
              icon={<SlSocialFacebook />}
            />
            <SocialLink
              link="https://www.instagram.com/jess_arthuro/"
              icon={<RxInstagramLogo />}
            />
            <SocialLink
              link="https://twitter.com/JessArthuro"
              icon={<RxTwitterLogo />}
            />
          </div>
        </div>

        <div className="right_side">
          <a className="email_link" href="mailto:jsarturo.dev@gmail.com">
            jsarturo.dev@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
