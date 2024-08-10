import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import { TimelineItem } from "./TimelineItem";
import { ActivitiesItem } from "./ActivitiesItem";
import imgAg3 from "../assets/logos/ag3.png";
import imgSmapac from "../assets/logos/smapac.png";
import imgHitzone from "../assets/logos/hitzone.png";
import imgCbta from "../assets/logos/cbta.png";
import "../styles/experience.scss";

export const Experience = () => {
  const [t] = useTranslation("global");

  return (
    <section className="experience_section nav_section" id="experience">
      <div className="container">
        <SectionTitles
          isExperience={true}
          number="2"
          name={t("section_titles.experience")}
        />

        <div className="timeline">
          <div className="line" data-aos="fade-up" data-aos-delay="100"></div>

          <TimelineItem
            img={imgAg3}
            width={75}
            title="AG3 LUXURY TRAVEL"
            date={t("experience.ag3_dates")}
            activities={
              <>
                <ActivitiesItem text={t("experience.ag3_text1")} />
                <ActivitiesItem text={t("experience.ag3_text2")} />
              </>
            }
          />

          <TimelineItem
            img={imgSmapac}
            width={84}
            title="SMAPAC"
            date={t("experience.smapac_dates")}
            activities={
              <>
                <ActivitiesItem text={t("experience.smapac_text1")} />
                <ActivitiesItem text={t("experience.smapac_text2")} />
              </>
            }
            />

          <TimelineItem
            img={imgHitzone}
            width={42}
            title="HITZONE BOXFIT"
            date={t("experience.hitzone_dates")}
            activities={
              <>
                <ActivitiesItem text={t("experience.hitzone_text1")} />
                <ActivitiesItem text={t("experience.hitzone_text2")} />
              </>
            }
            />

          <TimelineItem
            img={imgCbta}
            width={52}
            title="CBTA No. 62"
            date={t("experience.cbta_dates")}
            activities={
              <>
                <ActivitiesItem text={t("experience.cbta_text1")} />
                <ActivitiesItem text={t("experience.cbta_text2")} />
                <ActivitiesItem text={t("experience.cbta_text3")} />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
