import styles from "./../../styles/MainStyles/Skills.module.css";
import {
  DiReact,
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejs,
  DiFirebase,
  DiGit,
} from "react-icons/di";
import { FaEthereum, FaFigma } from "react-icons/fa";
import { SiTypescript, SiSolidity } from "react-icons/si";
import { useRef, useEffect, useState } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";

const Skills = ({ theme }) => {
  const iconContainerStyle = `${styles.iconContainer} ${
    theme ? styles.iconContainerLight : styles.iconContainerDark
  }`;

  const [loaded, setLoaded] = useState(false);

  const skillsRef = useRef();
  let intersect = useIntersectingViewport(skillsRef);

  useEffect(() => {
    if (intersect) setLoaded(true);
  }, [intersect]);

  return (
    <div
      className={` ${styles.skills} ${
        theme ? styles.skillsLight : styles.skillsDark
      } ${loaded ? styles.skillsSlideIn : ""}`}
      id="skills"
      ref={skillsRef}
    >
      <a className={styles.skillsAnchor} id="skillsA" />
      <h2
        className={`${styles.title} ${
          theme ? styles.titleLight : styles.titleDark
        }`}
        id="skillsTitle"
      >
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
        Skills
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
      </h2>
      <div className={styles.content}>
        <div
          className={`${styles.heading} ${
            theme ? styles.headingLight : styles.headingDark
          }`}
        >
          <p>
            After graduating from my university, I decided to embark upon a path
            of becoming a Web Developer. Web development is a subject I had
            always been fascinated with and in the modern world that we live in
            I believe we can say that everything is powered by the Web. As the
            best way to learn is by getting your hands dirty that's exactly what
            I did, got some courses, and started absorbing knowledge. Along that
            journey, I managed to learn a lot and come to a point where I could
            consider myself a Web Developer.
          </p>
          <p>
            To the right, you can take a look at the things that I would
            consider my skills, things that I use in my day-to-day work, and the
            thing that I feel the most comfortable using. Of course, there are
            many more than I had experience with, and even more that I would
            love to learn in the future but let's keep it concise for now.
          </p>
        </div>

        <div className={styles.icons}>
          <div className={iconContainerStyle}>
            <DiReact className={styles.icon} />
            <p>React</p>
          </div>
          <div className={iconContainerStyle}>
            <DiCss3 className={styles.icon} />
            <p>CSS</p>
          </div>
          <div className={iconContainerStyle}>
            <DiHtml5 className={styles.icon} />
            <p>HTML5</p>
          </div>
          <div className={iconContainerStyle}>
            <DiJsBadge className={styles.icon} />
            <p>JavaScript</p>
          </div>
          <div className={iconContainerStyle}>
            <DiMongodb className={styles.icon} />
            <p>MongoDB</p>
          </div>
          <div className={iconContainerStyle}>
            <DiNodejs className={styles.icon} />
            <p>NodeJS</p>
          </div>
          <div className={iconContainerStyle}>
            <SiSolidity className={styles.icon} />
            <p>Solidity</p>
          </div>
          <div className={iconContainerStyle}>
            <DiFirebase className={styles.icon} />
            <p>Firebase</p>
          </div>
          <div className={iconContainerStyle}>
            <DiGit className={styles.icon} />
            <p>Git</p>
          </div>
          <div className={iconContainerStyle}>
            <FaEthereum className={styles.icon} />
            <p>Ethereum</p>
          </div>
          <div className={iconContainerStyle}>
            <FaFigma className={styles.icon} />
            <p>Figma</p>
          </div>
          <div className={iconContainerStyle}>
            <SiTypescript className={styles.icon} />
            <p>Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
