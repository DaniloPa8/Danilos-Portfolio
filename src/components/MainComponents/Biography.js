import styles from "./../../styles/MainStyles/Biography.module.css";
import image from "./../../images/profile.jpg";
import { useRef, useEffect, useState } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";

const Biography = ({ theme }) => {
  const biographyRef = useRef();
  let intersect = useIntersectingViewport(biographyRef);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (intersect) setLoaded(true);
  }, [intersect]);

  return (
    <div
      className={`${styles.biography} ${
        theme ? styles.biographyLight : styles.biographyDark
      } ${loaded ? styles.biographySlideIn : ""}`}
      id="biography"
      ref={biographyRef}
    >
      <a className={styles.topAnchor} id="top" />
      <h2
        className={`${styles.title} ${
          theme ? styles.titleLight : styles.titleDark
        }`}
        id="bioTitle"
      >
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
        Biography
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
      </h2>
      <a className={styles.biographyAnchor} id="biography" />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <img
            src={image}
            alt="Profile"
            className={`${styles.profileImage} ${
              theme ? styles.profileImageLight : styles.profileImageDark
            }`}
          />
        </div>

        <div className={styles.rightSide}>
          <p
            className={`${styles.hover} ${
              theme ? styles.hoverLight : styles.hoverDark
            }`}
          >
            <span
              className={`${styles.hoverText} ${
                theme ? styles.hoverTextLight : styles.hoverTextDark
              }`}
            >
              Hover
            </span>
            <span className={styles.clickText}> Click</span> below to find out
            more about me!
          </p>
          <div
            className={`${styles.textArea} ${
              theme ? styles.textAreaLight : styles.textAreaDark
            }`}
          >
            <p
              className={`${styles.p1} ${
                theme ? styles.p1Light : styles.p1Dark
              }`}
            >
              1. Hi! My name is Danilo Pavićević and I would love to welcome you
              to my portfolio website. Here you will learn more about me and
              find everything that may interest you, I hope you will have a
              great time. Now a little bit about myself. While studying IT at my
              university, which is a hybrid course of business management and
              informational Technologies, I have gained all the required
              knowledge needed for understanding blockchain and cryptocurrency
              technologies, as one can’t understand crypto without having both
              strong economics and technological background. For my final
              assignment at the university, I chose to build a smart contract
              that would implement an autonomous savings functionality.
            </p>
            <p
              className={`${styles.p2} ${
                theme ? styles.p2Light : styles.p2Dark
              }`}
            >
              2. That project inspired me to work and study further, as I liked
              Solidity and I had been interested in crypto for years. Getting
              involved and working on the blockchain was very inspiring to me.
              For years I had been a fan of blockchain technologies, and the
              opportunities that this technology offers, as well as ideas that
              blockchain promotes such as decentralization. Since there is
              little in the way of official courses on Solidity as it is still a
              young technology, I have been tutoring myself by watching
              tutorials, building projects to test my knowledge, and reading all
              the technical documentation on Ethereum and related technologies.
            </p>
            <p
              className={`${styles.p3} ${
                theme ? styles.p3Light : styles.p3Dark
              }`}
            >
              3. As Solidity knowledge only is not enough for the development of
              smart contracts I decided to expand my focus on JavaScript. After
              completing a Javascript basics course I became more and more
              interested in Web Development. This course was then followed by a
              React.js course, a Node.js course, and a Typescript course.
            </p>
            <p
              className={`${styles.p4} ${
                theme ? styles.p4Light : styles.p4Dark
              }`}
            >
              4. After completing all of these courses I have gained significant
              knowledge of how web development works. Even though I have built
              multiple projects along with these courses I have decided that it
              is time for me to do a larger solo project that would represent my
              knowledge and be accessible to all. That is how StakeApp was made,
              a React.js and Truffle project that implements savings on the
              blockchain and is currently hosted on Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
