import { useTranslation } from "react-i18next";
import { SectionTitles } from "./SectionTitles";
import "../styles/experience.scss";

export const Experience = () => {
  const [t] = useTranslation("global");

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

  return (
    <section className="experience_section" id="experience">
      <div className="container">
        <SectionTitles number="2" name={t("section_titles.experience")} />

        {/* <svg
          width="10px"
          height="298px"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="#000000"
        >
          <g id="Layer_1">
            <title>Layer 1</title>
            <g id="svg_1" stroke="null" strokeWidth="0">
              <path
                id="svg_2"
                stroke="null"
                transform="rotate(-45 130.745 135.425)"
              />
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
        </svg> */}

        <div className="timeline">
          <div className="line"></div>

          <div className="step">
            <div className="marker"></div>
            <div className="content">Item 1</div>
          </div>

          <div className="step">
            <div className="marker"></div>
            <div className="content">Item 2</div>
          </div>

          <div className="step">
            <div className="marker"></div>
            <div className="content">Item 3</div>
          </div>
        </div>
      </div>
    </section>
  );
};
