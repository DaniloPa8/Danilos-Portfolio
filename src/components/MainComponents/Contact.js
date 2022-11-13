import styles from "./../../styles/MainStyles/Contact.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRef, useEffect, useState } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";

const Contact = ({ theme }) => {
  const [loaded, setLoaded] = useState(false);

  const contactRef = useRef();
  let intersect = useIntersectingViewport(contactRef);

  useEffect(() => {
    if (intersect) setLoaded(true);
  }, [intersect]);

  return (
    <div
      className={`${styles.contact} ${
        theme ? styles.contactLight : styles.contactDark
      } ${loaded ? styles.contactSlideIn : ""}`}
      id="contact"
      ref={contactRef}
    >
      <a className={styles.contactAnchor} id="contactA" />
      <h2
        className={`${styles.title} ${
          theme ? styles.titleLight : styles.titleDark
        }`}
        id="conTitle"
      >
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
        Contact
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
          className={`${styles.icons} ${
            theme ? styles.iconsLight : styles.iconsDark
          }`}
          onClick={() =>
            window.open(
              "https:www.linkedin.com/in/danilo-pavicevic-8a3a2215b/",
              "_blank"
            )
          }
        />
        <FaGithubSquare
          className={`${styles.icons} ${
            theme ? styles.iconsLight : styles.iconsDark
          }`}
          onClick={() => window.open("https:github.com/DaniloPa8", "_blank")}
        />
        <SiGmail
          className={`${styles.icons} ${
            theme ? styles.iconsLight : styles.iconsDark
          }`}
          onClick={() =>
            (window.location = "mailto:pavicevic.danilo103@gmail.com")
          }
        />
      </div>
    </div>
  );
};

export default Contact;
