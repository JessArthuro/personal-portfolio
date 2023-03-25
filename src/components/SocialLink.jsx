import "../styles/social_link.scss";

export const SocialLink = ({ link, icon, arialabel }) => {
  return (
    <a
      className="social_link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to my ${arialabel} profile`}
    >
      {icon}
    </a>
  );
};
