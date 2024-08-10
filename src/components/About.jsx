import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import myImg from "../assets/yo.jpg";
import "../styles/about.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { SkillsList } from "../data";

export const About = () => {
  const [t] = useTranslation("global");

  return (
    <section className="about_section nav_section" id="about">
      <div className="container">
        <SectionTitles number="1" name={t("section_titles.about")} />

        <div className="about_grid">
          <div className="about_data" data-aos="fade-up" data-aos-delay="100">
            <p>{t("about.text1")}</p>
            <p>{t("about.text2")}</p>
            <p>{t("about.text3")}</p>
            <p>{t("about.text4")}</p>

            <div className="slider_container">
              <Splide
                aria-label="Skills List"
                options={{
                  type: "loop",
                  gap: "1.5rem",
                  drag: "free",
                  arrows: false,
                  pagination: false,
                  autoWidth: true,
                  autoHeight: true,
                  autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 0.65,
                  },
                }}
                extensions={{ AutoScroll }}
              >
                {SkillsList.map((item, index) => {
                  return (
                    <SplideSlide key={index}>
                      <p>
                        <span>#</span> {item.name}
                      </p>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
          </div>
          <div
            className="about_picture"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img className="about_image" src={myImg} alt="" width="278" height="368" />
          </div>
        </div>
      </div>
    </section>
  );
};
