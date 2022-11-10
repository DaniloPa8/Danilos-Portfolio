import styles from "./../styles/Contact.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRef, useEffect } from "react";
import useIntersectingViewport from "../hooks/useIntersectingViewport";
import {
  setIntersectStyles,
  removeIntersectStyles,
} from "./../utils/styleUtils";

const Contact = ({ theme }) => {
  const contactRef = useRef();
  let intersect = useIntersectingViewport(contactRef);

  useEffect(() => {
    if (intersect) {
      setIntersectStyles("contact", "conTitle", theme);
    }
    if (!intersect) {
      removeIntersectStyles("contact", "conTitle", theme);
    }
  }, [intersect, theme]);

  return (
    <div
      className={theme ? styles.contactWhite : styles.contact}
      id="contact"
      ref={contactRef}
    >
      <a className={styles.contactAnchor} id="contactA" />
      <h2 className={theme ? styles.titleWhite : styles.title} id="conTitle">
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
        Contact
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
      </h2>

      <div className={theme ? styles.headingWhite : styles.heading}>
        <p>
          I‘ve built this portfolio website to showcase my work and give clients
          and employers a way to reach out to me and see my work. Please do feel
          free to contact me on any of these platforms and I will make sure to
          get back to you as soon as possible.
        </p>
      </div>
      <div className={styles.rightSideContent}>
        <h3>
          Here are my socials, feel free to click on them and find out more
          about me or contact me!
        </h3>
        <FaLinkedin
          className={styles.icons}
          onClick={() =>
            window.open(
              "https:www.linkedin.com/in/danilo-pavicevic-8a3a2215b/",
              "_blank"
            )
          }
        />
        <FaGithubSquare
          className={styles.icons}
          onClick={() => window.open("https:github.com/DaniloPa8", "_blank")}
        />
        <SiGmail
          className={styles.icons}
          onClick={() =>
            (window.location = "mailto:pavicevic.danilo103@gmail.com")
          }
        />
      </div>
    </div>
  );
};

export default Contact;
