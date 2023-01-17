import { useTranslation } from "react-i18next";
import { ProjectsItem } from "./ProjectsItem";
import { TechName } from "./TechName";
import { SectionTitles } from "./SectionTitles";

import imgRickMorty from "../assets/rickmorty.png";
import imgAg3 from "../assets/ag3.png";
import imgOlympia from "../assets/olympia.png";
import imgMedicom from "../assets/medicom.png";
import imgTasks from "../assets/tasks.png";
import imgInterio from "../assets/interio.png";
import imgFylo from "../assets/fylo.png";
import imgUniqlo from "../assets/uniqlo.png";
import imgMotosport from "../assets/motosport.png";
import imgPatronis from "../assets/patronis.png";

import "../styles/projects.scss";

export const Projects = () => {
  const [t] = useTranslation("global");

  return (
    <section className="projects_section" id="projects">
      <div className="container">
        <SectionTitles
          number="3"
          name={t("section_titles.projects")}
        />

        <div className="projects_grid">
          <ProjectsItem
            extlink="https://jsarturo-rickandmorty.netlify.app/"
            imgsrc={imgRickMorty}
            repolink="https://github.com/JessArthuro/wiki-rickandmorty"
            name="Wiki - Rick and Morty"
            description={t("projects.description_morty")}
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
            name="AG3 Luxury Travel"
            description={t("projects.description_ag3")}
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
            description={t("projects.description_olympia")}
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
            description={t("projects.description_medicom")}
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
            description={t("projects.description_todos")}
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
            description={t("projects.description_interio")}
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
            description={t("projects.description_fylo")}
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
            description={t("projects.description_uniqlo")}
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
            description={t("projects.description_motosport")}
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
            description={t("projects.description_patronis")}
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
