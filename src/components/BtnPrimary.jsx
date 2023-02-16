import "../styles/btn_primary.scss";

export const BtnPrimary = ({
  link,
  btn,
  name,
  href,
  projects,
  handleClick,
}) => {
  return (
    <>
      {link && (
        <a href={href} className="btn_primary">
          {name}
        </a>
      )}
      {btn && (
        <button
          className={`btn_primary ${projects ? "in_projects" : ""}`}
          onClick={handleClick}
        >
          {name}
        </button>
      )}
    </>
  );
};
