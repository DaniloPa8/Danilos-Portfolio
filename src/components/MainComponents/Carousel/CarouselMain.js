import styles from "./../../../styles/MainStyles/Carousel.module.css";
import Card from "./Card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import useIntersectingViewport from "./../../../hooks/useIntersectingViewport";

const CarouselMain = ({ data, theme }) => {
  const carouselRef = useRef();
  let intersect = useIntersectingViewport(carouselRef);

  const [loaded, setLoaded] = useState(false);
  const [direction, setDirection] = useState(Math.floor(Math.random() * 2));
  const [index, setIndex] = useState(3);

  useEffect(() => {
    if (intersect) setLoaded(true);
  }, [intersect]);

  const moveLeft = () => {
    if (index === 1) setIndex(data.length - 2);
    else if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const moveRight = () => {
    if (index === data.length - 2) setIndex(1);
    else if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div
      className={`${styles.carousel} ${
        loaded
          ? direction
            ? styles.carouselSlideInLeft
            : styles.carouselSlideInRight
          : ""
      }`}
      ref={carouselRef}
    >
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <FaArrowAltCircleLeft
            className={styles.leftArrow}
            onClick={moveLeft}
          />
          <FaArrowAltCircleRight
            className={styles.rightArrow}
            onClick={moveRight}
          />
          {data.map((el, i) => {
            let cardClass =
              i > index
                ? styles.nextCard
                : i === index
                ? styles.activeCard
                : styles.prevCard;
            if (theme && cardClass === styles.nextCard)
              cardClass = styles.nextCardWhite;
            if (theme && cardClass === styles.prevCard)
              cardClass = styles.prevCardWhite;
            if (theme && cardClass === styles.activeCard)
              cardClass = styles.activeCardWhite;

            return (
              <Card {...el} selectedStyle={cardClass} theme={theme} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CarouselMain;
