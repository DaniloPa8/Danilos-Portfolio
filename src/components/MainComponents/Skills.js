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
import { useRef, useEffect } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";
import {
  setIntersectStyles,
  removeIntersectStyles,
} from "./../../utils/styleUtils";
import SkillIcon from "../SkillIcon";

const Skills = ({ theme }) => {
  const skillsRef = useRef();
  let intersect = useIntersectingViewport(skillsRef);

  useEffect(() => {
    if (intersect) {
      setIntersectStyles("skills", "skillsTitle", theme);
    }
    if (!intersect) {
      removeIntersectStyles("skills", "skillsTitle", theme);
    }
  }, [intersect, theme]);
  return (
    <div className={styles.skills} id="skills" ref={skillsRef}>
      <a className={styles.skillsAnchor} id="skillsA" />
      <h2 className={theme ? styles.titleWhite : styles.title} id="skillsTitle">
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
        Skills
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
      </h2>
      <div className={styles.content}>
        <div className={theme ? styles.headingWhite : styles.heading}>
          <p>
            After graduating from my university, I decided to embark upon a path
            of becoming a Web Developer. Web development is the subject I had
            always been fascinated with and in the modern world that we live in
            I belive we can say that everything is powered by the Web. As the
            best way to learn is by getting your hands dirty thats exactly what
            I did, got some courses and started absorbing knowledge. Along that
            journey I managed to learn a lot and to come to a point where I
            could consider myself a Web Developer.
          </p>
          <p>
            To the right you can take a look at the things that I would consider
            my skills, things that I use in my day-to-day work and the thing
            that I feel the most comfortable using. Of course there are many
            more that I had experience with, and even more that I would love to
            learn in the future but lets keep it concise for now.
          </p>
        </div>

        <div className={styles.icons}>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiReact className={styles.icon} />
            <p>React</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiCss3 className={styles.icon} />
            <p>CSS</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiHtml5 className={styles.icon} />
            <p>HTML5</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiJsBadge className={styles.icon} />
            <p>JavaScript</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiMongodb className={styles.icon} />
            <p>MongoDB</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiNodejs className={styles.icon} />
            <p>NodeJS</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <SiSolidity className={styles.icon} />
            <p>Solidity</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiFirebase className={styles.icon} />
            <p>Firebase</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <DiGit className={styles.icon} />
            <p>Git</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <FaEthereum className={styles.icon} />
            <p>Ethereum</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <FaFigma className={styles.icon} />
            <p>Figma</p>
          </div>
          <div
            className={theme ? styles.iconContainerWhite : styles.iconContainer}
          >
            <SiTypescript className={styles.icon} />
            <p>Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
