import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import { SkillsItem } from "./SkillsItem";
import myImg from "../assets/yo.jpg";
import "../styles/about.scss";

export const About = () => {
  const [t] = useTranslation("global");

  return (
    <section className="about_section" id="about">
      <div className="container">
        <SectionTitles number="1" name={t("section_titles.about")} />

        <div className="about_grid">
          <div className="about_data" data-aos="fade-up" data-aos-delay="100">
            <p>{t("about.text1")}</p>
            <p>{t("about.text2")}</p>
            <p>{t("about.text3")}</p>
            <p>{t("about.text4")}</p>
            <p>{t("about.text5")}</p>

            <ul className="skills_list">
              <SkillsItem name="HTML" />
              <SkillsItem name="CSS" />
              <SkillsItem name="Sass" />
              <SkillsItem name="JS" />
              <SkillsItem name="React" />
              <SkillsItem name="Bootstrap" />
              <SkillsItem name="Tailwindcss" />
              <SkillsItem name="Webpack" />
              <SkillsItem name="Git" />
              <SkillsItem name="NPM" />
              <SkillsItem name="VS Code" />
            </ul>
          </div>
          <div
            className="about_picture"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img className="about_image" src={myImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
