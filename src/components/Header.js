import styles from "./../styles/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = ({ backToTop, theme, setBackToTop }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div
      className={`${styles.header} ${
        theme ? styles.headerLight : styles.headerDark
      }`}
    >
      <div
        className={`${styles.myName} ${
          theme ? styles.myNameLight : styles.myNameDark
        }`}
      >
        <p className={styles.nameText}> &#60; Pavićević Danilo &#47;&#62;</p>
        <p
          className={`${styles.proffesion} ${
            theme ? styles.proffesionLight : styles.proffesionDark
          }`}
        >
          Engineer of Information Technologies
        </p>
      </div>
      <div
        className={`${styles.biography} ${
          theme ? styles.biographyLight : styles.biographyDark
        }`}
        onClick={() => (window.location = "#biography")}
      >
        <p>Biography</p>
      </div>
      <div
        className={`${styles.education} ${
          theme ? styles.educationLight : styles.educationDark
        }`}
        onClick={() => (window.location = "#educationA")}
      >
        <p>Education</p>
      </div>
      <div
        className={`${styles.skills} ${
          theme ? styles.skillsLight : styles.skillsDark
        }`}
        onClick={() => (window.location = "#skillsA")}
      >
        <p>Skills</p>
      </div>
      <div
        className={`${styles.projects} ${
          theme ? styles.projectsLight : styles.projectsDark
        }`}
        onClick={() => (window.location = "#projectsA")}
      >
        <p>Projects</p>
      </div>
      <div
        className={`${styles.contact} ${
          theme ? styles.contactLight : styles.contactDark
        }`}
        onClick={() => (window.location = "#contactA")}
      >
        <p>Contact</p>
      </div>
      {backToTop ? (
        <div
          className={`${
            backToTop ? styles.backToTopAnimated : styles.backToTopNon
          } ${
            theme ? styles.backToTopAnimatedLight : styles.backToTopAnimatedDark
          }`}
          onClick={() => (backToTop ? (window.location = "#top") : null)}
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
        className={`${
          hamburgerOpen
            ? theme
              ? styles.hamburgerOpenLight
              : styles.hamburgerOpenDark
            : styles.hamburgerDiv
        }`}
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
          className={`${
            hamburgerOpen
              ? theme
                ? styles.dropdownListWhite
                : styles.dropdownList
              : theme
              ? styles.dropdownListOutWhite
              : styles.dropdownListOut
          }`}
        >
          <li
            onClick={() => {
              window.location = "#top";
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Biography
          </li>
          <li
            onClick={() => {
              window.location = "#educationA";
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Education
          </li>
          <li
            onClick={() => {
              window.location = "#skillsA";
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              window.location = "#projectsA";
              setTimeout(() => {
                setHamburgerOpen(false);
              }, 500);
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              window.location = "#contactA";
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
