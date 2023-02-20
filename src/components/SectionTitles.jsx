import "../styles/section_titles.scss";

export const SectionTitles = ({ number, name, isExperience, isContact }) => {
  return (
    <h2
      className={`section_title ${isExperience ? "is_experience" : ""} ${
        isContact ? "is_contact" : ""
      }`}
      data-number={number}
      data-aos="fade-up"
    >
      {name}
    </h2>
  );
};
