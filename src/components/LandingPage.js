import { useEffect, useState } from "react";
import App from "../App";
import styles from "./../styles/LandingPage.module.css";
import walkingMan from "./../images/walk.gif";
import walkingManWhite from "./../images/walkLight.gif";
const LandingPage = () => {
  const [loadedTheme, setLoadedTheme] = useState(
    localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    loadedTheme
      ? (document.body.style.background = "white")
      : (document.body.style.background = "black");
  }, []);

  const [passLanding, setPassLanding] = useState(false);
  if (!passLanding)
    return (
      <div className={styles.container}>
        {loadedTheme ? (
          <img src={walkingManWhite} className={styles.walkingMan} />
        ) : (
          <img src={walkingMan} className={styles.walkingMan} />
        )}

        <div
          className={`${styles.leftSide} ${
            loadedTheme ? styles.leftSideLight : styles.leftSideDark
          }`}
        >
          <p>Danilo's Portfolio</p>
        </div>
        <div
          className={`${styles.line} ${
            loadedTheme ? styles.lineLight : styles.lineDark
          }`}
        >
          .
        </div>
        <div className={styles.rightSide}>
          <div
            onClick={() => setPassLanding(true)}
            className={`${styles.continue} ${
              loadedTheme ? styles.continueLight : styles.continueDark
            }`}
          >
            ENTER
          </div>
        </div>
      </div>
    );
  else if (passLanding) return <App loadedTheme={loadedTheme} />;
};

export default LandingPage;
