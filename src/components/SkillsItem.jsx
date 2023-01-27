import { BsArrowRightShort } from "react-icons/bs";

export const SkillsItem = ({ name }) => {
  return (
    <li>
      <BsArrowRightShort />
      {name}
    </li>
  );
};
