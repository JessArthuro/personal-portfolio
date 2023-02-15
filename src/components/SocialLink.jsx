import "../styles/social_link.scss";

export const SocialLink = ({ link, icon }) => {
  return (
    <a
      className="social_link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
