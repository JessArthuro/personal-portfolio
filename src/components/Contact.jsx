import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import "../styles/contact.scss";
import { BtnPrimary } from "./BtnPrimary";

export const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <section className="contact_section" id="contact">
      <div className="container contact_info">
        <SectionTitles
          isContact={true}
          number="4"
          name={t("section_titles.contact")}
        />

        <h3 className="contact_subtitle">{t("contact.subtitle")}</h3>
        <p className="contact_description">{t("contact.description")}</p>

        <BtnPrimary
          link={true}
          name={t("contact.btn")}
          href="mailto:jsarturo.dev@gmail.com"
        />
      </div>
    </section>
  );
};
