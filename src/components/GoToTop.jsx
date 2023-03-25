import { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";
import "../styles/go_to_top.scss";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScrolling = () => {
    let heightToAppear = 500;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToAppear) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrolling);
    return () => window.removeEventListener("scroll", listenToScrolling);
  }, []);

  return (
    <button
      aria-label="Button to navigate to the top of the page"
      className={`btn_top ${isVisible ? "visible" : ""}`}
      onClick={goToTop}
    >
      <FiChevronsUp className="btn_top-icon" />
    </button>
  );
};
