import "../styles/section_titles.scss";

export const SectionTitles = ({ number, name, isExperience }) => {
  return (
    <h2
      className={`section_title ${isExperience ? "is_experience" : ""}`}
      data-number={number}
    >
      {/* <span>{`//`}</span> {name} */}
      {name}
    </h2>
  );
};
