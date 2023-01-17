import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import "../styles/contact.scss";

export const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <SectionTitles number="4" name={t("section_titles.contact")} />
      </div>
    </section>
  );
};
