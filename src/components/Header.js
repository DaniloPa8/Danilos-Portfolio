import styles from "./../styles/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = ({ backToTop, theme, setBackToTop }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className={theme ? styles.whiteHeader : styles.header}>
      <div className={theme ? styles.myNameWhite : styles.myName}>
        <p className={styles.nameText}> &#60; Pavićević Danilo &#47;&#62;</p>
        <p className={theme ? styles.whiteProffesion : styles.proffesion}>
          Engineer of Information Technologies
        </p>
      </div>
      <div
        className={styles.biography}
        onClick={() => window.location.replace("/#top")}
      >
        <p>Biography</p>
      </div>
      <div
        className={styles.education}
        onClick={() => window.location.replace("/#educationA")}
      >
        <p>Education</p>
      </div>
      <div
        className={styles.skills}
        onClick={() => window.location.replace("/#skillsA")}
      >
        <p>Skills</p>
      </div>
      <div
        className={styles.projects}
        onClick={() => window.location.replace("/#projectsA")}
      >
        <p>Projects</p>
      </div>
      <div
        className={styles.contact}
        onClick={() => window.location.replace("/#contactA")}
      >
        <p>Contact</p>
      </div>
      {backToTop ? (
        <div
          className={backToTop ? styles.backToTopAnimated : styles.backToTopNon}
          onClick={() => (backToTop ? window.location.replace("/#top") : null)}
          onAnimationEnd={() => {
            if (!backToTop) setBackToTop(false);
          }}
        >
          <p>Back To Top</p>
        </div>
      ) : (
        <div className={styles.backToTopNon}>
          <p> Back To Top</p>
        </div>
      )}
      <div
        className={hamburgerOpen ? styles.hamburgerOpen : styles.hamburgerDiv}
        onClick={() => setHamburgerOpen((prev) => !prev)}
      >
        <GiHamburgerMenu />
      </div>

      <div
        className={
          hamburgerOpen
            ? styles.dropdownContainer
            : styles.dropdownContainerFadeOut
        }
      >
        <ul
          className={
            hamburgerOpen
              ? theme
                ? styles.dropdownListWhite
                : styles.dropdownList
              : theme
              ? styles.dropdownListOutWhite
              : styles.dropdownListOut
          }
        >
          <li
            onClick={() => {
              window.location.replace("/#top");
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Biography
          </li>
          <li
            onClick={() => {
              window.location.replace("/#educationA");
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Education
          </li>
          <li
            onClick={() => {
              window.location.replace("/#skillsA");
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              window.location.replace("/#projectsA");
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              window.location.replace("/#contactA");
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
