import { BsArrowRightShort } from "react-icons/bs";

export const ActivitiesItem = ({ text }) => {
  return (
    <li className="activities_item">
      <BsArrowRightShort className="arrow_icon" />
      {text}
    </li>
  );
};
