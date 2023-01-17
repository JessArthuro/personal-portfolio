import "../styles/section_titles.scss";

export const SectionTitles = ({ number, name }) => {
  return (
    <h2 className="section_title" data-number={number}>
      <span>{`//`}</span> {name}
    </h2>
  );
};
