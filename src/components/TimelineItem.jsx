import "../styles/experience.scss";

export const TimelineItem = ({ img, title, date, activities }) => {
  return (
    <article className="timeline_item" data-aos="fade-up" data-aos-delay="100">
      <div className="timeline_item-content">
        <img className="timeline_item-logo" src={img} alt="" />
        <h3 className="timeline_item-title">{title}</h3>
        <h5 className="timeline_item-date">{date}</h5>

        <ul className="activities_list">{activities}</ul>
      </div>
    </article>
  );
};
