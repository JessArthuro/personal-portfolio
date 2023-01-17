import { SectionTitles } from "./SectionTitles";
import "../styles/about.scss";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [t] = useTranslation("global");

  return (
    <section className="about_section" id="about">
      <div className="container">
        <SectionTitles number="1" name={t("section_titles.about")} />
      </div>
    </section>
  );
};
