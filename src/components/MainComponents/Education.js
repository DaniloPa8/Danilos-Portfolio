import { useEffect, useRef, useState } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";
import styles from "./../../styles/MainStyles/Education.module.css";
import CarouselMain from "./Carousel/CarouselMain";

import { data1, data2, data3 } from "../../data/eduData";

const Education = ({ theme }) => {
  const [loaded, setLoaded] = useState(false);

  const educationRef = useRef();
  let intersect = useIntersectingViewport(educationRef);

  useEffect(() => {
    if (intersect) setLoaded(true);
  }, [intersect]);

  return (
    <div
      className={`${styles.education} ${
        theme ? styles.educationLight : styles.educationDark
      } ${loaded ? styles.educationSlideIn : ""}`}
      ref={educationRef}
      id="education"
    >
      <h2
        className={`${styles.title} ${
          theme ? styles.titleLight : styles.titleDark
        }`}
        id="eduTitle"
      >
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
        Education
        <span
          className={`${styles.spacer} ${
            theme ? styles.spacerLight : styles.spacerDark
          }`}
        >
          .
        </span>
      </h2>
      <a className={styles.educationAnchor} id="educationA" />

      <div
        className={`${styles.heading} ${
          theme ? styles.headingLight : styles.headingDark
        }`}
      >
        <p className={styles.headingText}>
          So as is already mentioned in my biography, my education was of a
          mixed type. We had classes about both the business aspect of the IT
          industry as well as Computer science courses. Let's take a closer look
          at which classes I had and learn a bit more about them. The first
          carousel is going to introduce you to the Computer Science subjects
          that I had while the second one will display the Business subjects.
          The third carousel contains all my certifications so far, some of
          which I got while studying and others after I graduated.
        </p>
      </div>
      <div className={styles.carouselWrap}>
        <div className={styles.carouselOne}>
          <h3 className={styles.subHeading1}>
            University Education - Computer Science subjects
          </h3>
          <CarouselMain data={data1} theme={theme} />
        </div>
        <div className={styles.carouselTwo}>
          <h3 className={styles.subHeading2}>
            University Education - Bussines subjects
          </h3>
          <CarouselMain data={data2} theme={theme} />
        </div>
        <div className={styles.carouselThree}>
          <h3 className={styles.subHeading3}>
            Certifications - Self-deveopment
          </h3>
          <CarouselMain data={data3} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Education;
