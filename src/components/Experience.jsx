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
            date="Diciembre 2021 - Julio 2022"
            activities={
              <>
                <ActivitiesItem text="Realice la maquetación y desarrollo frontend del sitio web de esta empresa especializada en el transporte turístico. Tecnologías utilizadas: Laravel, Bootstrap y Vue." />

                <ActivitiesItem text="Actualice el contenido de sus redes sociales y aplique estrategias de marketing para generar campañas publicitarias más exitosas." />

                <ActivitiesItem text="Con la creación del sitio web y la actualización del contenido de sus redes sociales se logró incrementar el número de clientes en un 70%." />
              </>
            }
          />

          <TimelineItem
            img={imgSmapac}
            title="SMAPAC"
            date="Diciembre 2019 - Marzo 2020"
            activities={
              <>
                <ActivitiesItem text="Desarrolle el frontend para un sistema que constaba de 3 procesos: crear requisiciones, actualizar órdenes de compra y registrar productos en un inventario. Tecnologías utilizadas: Laravel, Bootstrap y JS." />

                <ActivitiesItem text="Se logró disminuir en un 50% el tiempo de registro y actualización de dichos procesos." />
              </>
            }
          />

          <TimelineItem
            img={imgHitzone}
            title="HITZONE BOXFIT"
            date="Agosto 2019 - Enero 2020"
            activities={
              <>
                <ActivitiesItem text="Realice la maquetación y desarrollo de un sistema de control de clientes para facilitar el registro de usuarios y administrar mensualidades. Tecnologías utilizadas: NodeJs, Bootstrap y DataTables." />

                <ActivitiesItem text="Se automatizó su antiguo registro con papel y lápiz, obteniendo un incremento del 80% de rendimiento." />
              </>
            }
          />

          <TimelineItem
            img={imgCbta}
            title="CBTA No. 62"
            date="Agosto 2018 - Marzo 2019"
            activities={
              <>
                <ActivitiesItem text="Diseñe y desarrolle una página web para exponer las distintas especialidades con las que cuenta la escuela. Tecnologías utilizadas: HTML, CSS y JS." />

                <ActivitiesItem text="Realice mantenimiento preventivo y correctivo del área de centro de cómputo." />

                <ActivitiesItem text="La creación de la página web logro que más personas pudieran conocer la oferta educativa de la institución." />
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
