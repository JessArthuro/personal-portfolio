import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectsItem } from "./ProjectsItem";
import { TechName } from "./TechName";
import { SectionTitles } from "./SectionTitles";

import imgOlympia from "../assets/projects/olympia.jpg";
import imgAg3 from "../assets/projects/ag3.jpg";
import imgRickMorty from "../assets/projects/rickmorty.jpg";
import imgMedicom from "../assets/projects/medicom.jpg";
import imgTasks from "../assets/projects/tasks.jpg";
import imgInterio from "../assets/projects/interio.jpg";
import imgFylo from "../assets/projects/fylo.jpg";
import imgUniqlo from "../assets/projects/uniqlo.jpg";
import imgMotosport from "../assets/projects/motosport.jpg";
import imgPatronis from "../assets/projects/patronis.jpg";

import "../styles/projects.scss";
import { BtnPrimary } from "./BtnPrimary";

export const Projects = () => {
  const [t] = useTranslation("global");

  const [showItems, setShowItems] = useState(false);

  return (
    <section className="projects_section nav_section" id="projects">
      <div className="container">
        <SectionTitles number="3" name={t("section_titles.projects")} />

        <div className="projects_grid">
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
            extlink="https://www.ag3luxury.com/en"
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

          {/* <ProjectsItem
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
          /> */}

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
          {/* <ProjectsItem
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
          /> */}
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

          {showItems ? (
            <>
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
            </>
          ) : null}
        </div>

        <BtnPrimary
          btn={true}
          projects={true}
          name={showItems ? t("projects.btn_less") : t("projects.btn_more")}
          handleClick={() => setShowItems((prev) => !prev)}
        />
      </div>
    </section>
  );
};
