import { SectionTitles } from "./SectionTitles";
import "../styles/about.scss";

export const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="container">
        <SectionTitles number="1" name="About" />
      </div>
    </section>
  );
};
