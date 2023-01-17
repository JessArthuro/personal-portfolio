import imgUniqlo from "../assets/uniqlo.png";
import imgPatronis from "../assets/patronis.png";
import imgTasks from "../assets/tasks.png";
import imgMedicom from "../assets/medicom.png";
import imgOlympia from "../assets/olympia.png";
import imgRickMorty from "../assets/rickmorty.png";
import imgAg3 from "../assets/ag3.png";
import imgInterio from "../assets/interio.png";
import imgMotosport from "../assets/motosport.png";
import imgFylo from "../assets/fylo.png";

import { ProjectsItem } from "./ProjectsItem";
import { TechName } from "./TechName";
import "../styles/projects.scss";
import { SectionTitles } from "./SectionTitles";

export const Projects = () => {
  return (
    <section className="projects_section" id="projects">
      <div className="container">
        <SectionTitles
          number="3"
          name="Algunos proyectos que he desarrollado"
        />

        <div className="projects_grid">
          <ProjectsItem
            extlink="https://jsarturo-rickandmorty.netlify.app/"
            imgsrc={imgRickMorty}
            repolink="https://github.com/JessArthuro/wiki-rickandmorty"
            name="Wiki - Rick and Morty"
            description="Una aplicación web que consume la API de Rick and Morty. Incluye barra de búsqueda, paginación, filtros y enrutamiento dinámico."
            techname={
              <>
                <TechName name="React" />
                <TechName name="Bootstrap" />
                <TechName name="SCSS" />
              </>
            }
          />

          <ProjectsItem
            extlink="https://www.ag3luxury.com/es"
            imgsrc={imgAg3}
            repolink="https://github.com/CantunB/ag3_web"
            name="AG3 - Transportación Suv's & Van"
            description="Conoce esta aplicación web creada para reservar servicios de transportación turística en la ciudad de Cancún."
            // description="Meet this web application created to book tourist transportation services in the city of Cancun."
            techname={
              <>
                <TechName name="Laravel" />
                <TechName name="Bootstrap" />
                <TechName name="CSS" />
                <TechName name="Vue" />
              </>
            }
          />
          <ProjectsItem
            extlink="https://jsarturo-olympia.netlify.app/"
            imgsrc={imgOlympia}
            repolink="https://github.com/JessArthuro/olympia"
            name="Olympia"
            description="Sitio web para encontrar opciones de alojamiento, incluidos hoteles y resorts. Me ayudo a poner en práctica lo aprendido en React."
            techname={
              <>
                <TechName name="React" />
                <TechName name="SCSS" />
                <TechName name="Swiper" />
              </>
            }
          />
          <ProjectsItem
            extlink="https://jsarturo-medicom.netlify.app/"
            imgsrc={imgMedicom}
            repolink="https://github.com/JessArthuro/medicom"
            name="Medicom"
            description="Este sitio web contiene los datos más importantes de un hospital, como su trayectoria, los departamentos médicos y el equipo de doctores."
            techname={
              <>
                <TechName name="React" />
                <TechName name="SCSS" />
                <TechName name="SweetAlert2" />
                <TechName name="Swiper" />
              </>
            }
          />

          <ProjectsItem
            extlink="https://jsarturo-tasks.netlify.app/"
            imgsrc={imgTasks}
            repolink="https://github.com/JessArthuro/todo-app"
            name="TODO App"
            description="Aplicación web construida en React para poder crear, completar y eliminar TODOs usando persistencia de datos con localStorage."
            techname={
              <>
                <TechName name="React" />
                <TechName name="CSS" />
                <TechName name="Moment.js" />
              </>
            }
          />

          <ProjectsItem
            extlink="https://jessarthuro.github.io/interio/"
            imgsrc={imgInterio}
            repolink="https://github.com/JessArthuro/interio"
            name="Interio"
            description="Proyecto web en donde puse en práctica todas las habilidades que he adquirido en maquetación y también la optimización de elementos."
            techname={
              <>
                <TechName name="HTML" />
                <TechName name="SCSS" />
                <TechName name="JS" />
                <TechName name="Swiper" />
              </>
            }
          />

          <ProjectsItem
            extlink="https://jessarthuro.github.io/fylo/"
            imgsrc={imgFylo}
            repolink="https://github.com/JessArthuro/fylo"
            name="Fylo"
            description="Desarrolle esta página web para cumplir un reto de Frontend Mentor sobre una aplicación de almacenamiento en la nube."
            techname={
              <>
                <TechName name="Bootstrap" />
                <TechName name="JS" />
                <TechName name="ScrollReveal" />
              </>
            }
          />

          <ProjectsItem
            extlink="https://jessarthuro.github.io/uniqlo/"
            imgsrc={imgUniqlo}
            repolink="https://github.com/JessArthuro/uniqlo"
            name="Uniqlo"
            description="Un sitio web simple y minimalista que simula una tienda virtual. Puse en práctica la animación de elementos usando ScrollReveal."
            techname={
              <>
                <TechName name="HTML" />
                <TechName name="CSS" />
                <TechName name="JS" />
                <TechName name="Boxicons" />
              </>
            }
          />

          <ProjectsItem
            extlink="https://jessarthuro.github.io/motosport/"
            imgsrc={imgMotosport}
            repolink="https://github.com/JessArthuro/motosport"
            name="MotoSport"
            description="Página web que incluye distintos datos sobre motos deportivas. Personalmente, fue el proyecto que más disfrute construir."
            techname={
              <>
                <TechName name="HTML" />
                <TechName name="CSS" />
                <TechName name="JS" />
                <TechName name="Mixitup" />
              </>
            }
          />
          <ProjectsItem
            extlink="https://jessarthuro.github.io/patronis-bar/"
            imgsrc={imgPatronis}
            repolink="https://github.com/JessArthuro/patronis-bar"
            name="Patroni's Bar"
            description="Uno de los primeros sitios web que construí utilizando Bootstrap. Aprendí mucho sobre el sistema de cuadrículas (Grid)."
            techname={
              <>
                <TechName name="Bootstrap" />
                <TechName name="JS" />
                <TechName name="FontAwesome" />
                <TechName name="Swiper" />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
