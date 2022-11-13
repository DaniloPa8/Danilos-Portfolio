import styles from "./../../styles/MainStyles/Projects.module.css";
import project1 from "./../../images/stakeapp.JPG";
import { useRef, useEffect, useState } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";

const Projects = ({ theme }) => {
  const projectsRef = useRef();
  const [loaded, setLoaded] = useState(false);

  let intersect = useIntersectingViewport(projectsRef);

  useEffect(() => {
    if (intersect) setLoaded(true);
  }, [intersect]);

  return (
    <div
      className={`${styles.projects} ${
        theme ? styles.projectsLight : styles.projectsDark
      } ${loaded ? styles.projectsSlideIn : ""}`}
      id="projects"
      ref={projectsRef}
    >
      <a className={styles.projectsAnchor} id="projectsA" />
      <h2
        className={`${styles.title} ${
          theme ? styles.titleLight : styles.titleDark
        }`}
        id="proTitle"
      >
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
        Projects
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
      </h2>
      <div
        className={`${styles.heading} ${
          theme ? styles.headingLight : styles.headingDark
        }`}
      >
        <p>
          Here you can see my projects that I had done so far. Clicking on them
          will take you to the GitHub page where you can inspect the source
          code. When I am not busy with work I am always building something new
          and amazing, so there are many more projects coming!
        </p>
      </div>
      <div className={styles.projectsList}>
        <div
          className={`${styles.firstProject} ${
            theme ? styles.firstProjectLight : styles.firstProjectDark
          }`}
          onClick={() =>
            window.open("https://github.com/DaniloPa8/StakeAppGoerli", "_blank")
          }
        >
          <img
            alt="Project Screenshot"
            src={project1}
            className={`${styles.firstProjectImage} ${
              theme
                ? styles.firstProjectImageLight
                : styles.firstProjectImageDark
            }`}
          ></img>
          <p> StakeApp</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
