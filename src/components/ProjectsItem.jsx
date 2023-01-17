import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../styles/projects.scss";

export const ProjectsItem = ({
  extlink,
  imgsrc,
  name,
  repolink,
  description,
  techname,
}) => {
  return (
    <article className="projects_item">
      <div className="item_info">
        <img className="item_image" src={imgsrc} alt="" />

        <div className="item_heading">
          <h3 className="item_title">
            <a href={extlink} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h3>
          <div className="item_links">
            <a
              className="repo_link"
              href={repolink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              className="external_link"
              href={extlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
        <p className="item_description">{description}</p>
      </div>

      <ul className="item_technologies">{techname}</ul>
    </article>
  );
};
