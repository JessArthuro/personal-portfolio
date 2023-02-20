import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { GoToTop } from "./components/GoToTop";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out"
  });

  return (
    <>
      <Header />

      <main>
        <Hero />
        <GoToTop />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
