import "../styles/experience.scss";

export const TimelineItem = ({ img, title, date, activities, width }) => {
  return (
    <article className="timeline_item" data-aos="fade-up" data-aos-delay="100">
      <div className="timeline_item-content">
        <img
          className="timeline_item-logo"
          src={img}
          alt=""
          width={width}
          height={52}
        />
        <h3 className="timeline_item-title">{title}</h3>
        <h4 className="timeline_item-date">{date}</h4>

        <ul className="activities_list">{activities}</ul>
      </div>
    </article>
  );
};
