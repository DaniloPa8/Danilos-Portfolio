import styles from "./../styles/Main.module.css";
import Biography from "./MainComponents/Biography";
import Education from "./MainComponents/Education";
import Skills from "./MainComponents/Skills";
import Projects from "./MainComponents/Projects";
import { useEffect } from "react";
import Contact from "./MainComponents/Contact";

const Main = ({ setBackToTop, theme }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let target = document.getElementById("biography");
      if (window.scrollY > target.offsetTop + target.offsetHeight) {
        setBackToTop(true);
      } else if (window.screenY < target.offsetTop + target.offsetHeight) {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div className={styles.main}>
      <Biography theme={theme} />
      <Education theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </div>
  );
};

export default Main;
