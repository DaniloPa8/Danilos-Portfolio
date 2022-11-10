import { useEffect, useState } from "react";
import App from "../App";
import styles from "./../styles/LandingPage.module.css";

const LandingPage = () => {
  const [loadedTheme, setLoadedTheme] = useState(
    localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    loadedTheme
      ? (document.body.style.background = "radial-gradient(#939393, #c7c7c7)")
      : (document.body.style.background = "radial-gradient(#000000, #1c1c1c)");
  }, []);

  const [passLanding, setPassLanding] = useState(false);
  if (!passLanding)
    return (
      <div className={styles.container}>
        <div className={loadedTheme ? styles.leftSideWhite : styles.leftSide}>
          <p>Danilo's Portfolio</p>
        </div>
        <div className={loadedTheme ? styles.lineWhite : styles.line}>.</div>
        <div className={styles.rightSide}>
          <button
            onClick={() => setPassLanding(true)}
            className={loadedTheme ? styles.continueWhite : styles.continue}
          >
            Continue
          </button>
        </div>
      </div>
    );
  else if (passLanding) return <App loadedTheme={loadedTheme} />;
};

export default LandingPage;
