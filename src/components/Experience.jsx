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
    <section className="experience_section" id="experience">
      <div className="container">
        <SectionTitles
          isExperience={true}
          number="2"
          name={t("section_titles.experience")}
        />

        <div className="timeline">
          <div className="line"></div>

          <TimelineItem
            img={imgAg3}
            title="AG3 LUXURY TRAVEL"
            date={t("experience.ag3_dates")}
            activities={
              <>
                <ActivitiesItem text={t("experience.ag3_text1")} />
                <ActivitiesItem text={t("experience.ag3_text2")} />
                <ActivitiesItem text={t("experience.ag3_text3")} />
              </>
            }
          />

          <TimelineItem
            img={imgSmapac}
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

// useEffect(() => {
//   let triangle = document.getElementById("dashed-path");
//   let length = triangle.getTotalLength();

//   triangle.style.strokeDasharray = length;
//   triangle.style.strokeDashoffset = length;

//   const myFunction = () => {
//     let scrollpercent =
//       (document.body.scrollTop + document.documentElement.scrollTop) /
//       (document.documentElement.scrollHeight -
//         document.documentElement.clientHeight);

//     let draw = length * scrollpercent;

//     triangle.style.strokeDashoffset = length - draw;
//   };

//   window.addEventListener("scroll", myFunction);
//   return () => window.removeEventListener("scroll", myFunction);
// }, []);

{
  /* <svg
  width="10px"
  height="298px"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  fill="#000000"
>
  <g id="Layer_1">
    <title>Layer 1</title>
    <g id="svg_1" stroke="null" strokeWidth="0">
      <path id="svg_2" stroke="null" transform="rotate(-45 130.745 135.425)" />
    </g>
    <g stroke="null">
      <path
        stroke="#fff"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m4.91112,1.84374l0,294.28324"
        id="dashed-path"
      />
    </g>
  </g>
</svg>; */
}
