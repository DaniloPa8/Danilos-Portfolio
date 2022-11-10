import { useEffect, useRef } from "react";
import useIntersectingViewport from "../../hooks/useIntersectingViewport";
import styles from "./../../styles/MainStyles/Education.module.css";
import CarouselMain from "./Carousel/CarouselMain";
import {
  setIntersectStyles,
  removeIntersectStyles,
} from "./../../utils/styleUtils";

import { data1, data2, data3 } from "../../data/eduData";

const Education = ({ theme }) => {
  const educationRef = useRef();
  let intersect = useIntersectingViewport(educationRef);

  useEffect(() => {
    if (intersect) {
      setIntersectStyles("education", "eduTitle", theme);
    }
    if (!intersect) {
      removeIntersectStyles("education", "eduTitle", theme);
    }
  }, [intersect, theme]);

  return (
    <div
      className={theme ? styles.educationWhite : styles.education}
      ref={educationRef}
      id="education"
    >
      <h2 className={theme ? styles.titleWhite : styles.title} id="eduTitle">
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
        Education
        <span className={theme ? styles.spacerWhite : styles.spacer}>.</span>
      </h2>
      <a className={styles.educationAnchor} id="educationA" />

      <div className={theme ? styles.headingWhite : styles.heading}>
        <p className={styles.headingText}>
          So as it is already mentioned in my biography, my education was of a
          mixed type. We had classes about both the bussines aspect of the IT
          industry as well as Computer science courses. Lets take a closer look
          at which classes I had and learn a bit more about them. First carousel
          is going to introduce you to the Computer Science subjects that I had
          while the second one will display the Bussines subjects. The third
          carousel containes all my certifications so far, some of which I got
          while studying and other after I graduted.
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
