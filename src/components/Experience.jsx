import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import "../styles/experience.scss";

export const Experience = () => {
  const [t] = useTranslation("global");

  return (
    <section className="experience_section" id="experience">
      <div className="container">
        <SectionTitles number="2" name={t("section_titles.experience")} />
      </div>
    </section>
  );
};
