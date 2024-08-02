import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import { SocialLink } from "./SocialLink";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { TiHeartFullOutline } from "react-icons/ti";
import "../styles/footer.scss";

export const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer>
      <section className="container">
        <div className="footer_data">
          <div className="footer_logo">
            <img src={logo} alt="" className="footer_img" width={64} height={62} />
            {t("footer.logo")}
          </div>

          <div className="footer_links">
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

        <div className="footer_copyright">
          <p className="author">
            {t("footer.author_1")}
            <span className="heart">
              <TiHeartFullOutline />
            </span>
            {t("footer.author_2")} Js.Arturo
          </p>
        </div>
      </section>
    </footer>
  );
};
