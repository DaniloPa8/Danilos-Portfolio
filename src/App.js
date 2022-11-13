import styles from "./styles/App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { TiLightbulb } from "react-icons/ti";

import { useEffect, useState } from "react";

const App = ({ loadedTheme }) => {
  const [displayBackToTop, setDisplayBackToTop] = useState(false);
  const [themeState, setThemeState] = useState(loadedTheme);

  useEffect(() => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
    document.body.style.background = "";
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeState);

    if (!themeState) {
      document.body.classList.remove(styles.bodyLight);
      document.body.classList.add(styles.bodyDark);
    } else {
      document.body.classList.remove(styles.bodyDark);
      document.body.classList.add(styles.bodyLight);
    }
  }, [themeState]);

  return (
    <div
      className={`${styles.App} ${
        themeState ? styles.AppLight : styles.AppDark
      }`}
    >
      <div
        className={`${styles.themeSwitch} ${
          themeState ? styles.themeSwitchLight : styles.themeSwitchDark
        }`}
        onClick={() => setThemeState((prev) => !prev)}
      >
        <TiLightbulb className={styles.bulb} />
      </div>
      <Header
        backToTop={displayBackToTop}
        setBackToTop={setDisplayBackToTop}
        theme={themeState}
      />
      <Main setBackToTop={setDisplayBackToTop} theme={themeState} />
    </div>
  );
};

export default App;
