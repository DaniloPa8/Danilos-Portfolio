import styles from "./../../styles/MainStyles/Projects.module.css";
import project1 from "./../../images/stakeapp.JPG";
import { useRef, useEffect } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";
import {
  setIntersectStyles,
  removeIntersectStyles,
} from "./../../utils/styleUtils";

const Projects = ({ theme }) => {
  const projectsRef = useRef();
  let intersect = useIntersectingViewport(projectsRef);

  useEffect(() => {
    if (intersect) {
      setIntersectStyles("projects", "proTitle", theme);
    }
    if (!intersect) {
      removeIntersectStyles("projects", "proTitle", theme);
    }
  }, [intersect, theme]);

  return (
    <div
      className={theme ? styles.projectsWhite : styles.projects}
      id="projects"
      ref={projectsRef}
    >
      <a className={styles.projectsAnchor} id="projectsA" />
      <h2 className={theme ? styles.titleWhite : styles.title} id="proTitle">
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
        Projects
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
      </h2>
      <div className={theme ? styles.headingWhite : styles.heading}>
        <p>
          Here you can see my demo projects that I had done so far. Clicking on
          them will take you to the GitHub page where you can inspect the source
          code. When I am not busy with work I am always building something new
          and amazing, so there are many more projects coming!
        </p>
      </div>
      <div className={styles.projectsList}>
        <div
          className={theme ? styles.firstProjectWhite : styles.firstProject}
          onClick={() =>
            window.open("https://github.com/DaniloPa8/StakeAppGoerli", "_blank")
          }
        >
          <img
            alt="Project Screenshot"
            src={project1}
            className={
              theme ? styles.firstProjectImageWhite : styles.firstProjectImage
            }
          ></img>
          <p> StakeApp</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
