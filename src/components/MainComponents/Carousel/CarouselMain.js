import styles from "./../../../styles/MainStyles/Carousel.module.css";
import Card from "./Card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";

const CarouselMain = ({ data, theme }) => {
  const [index, setIndex] = useState(3);

  const moveLeft = () => {
    if (index === 1) setIndex((prev) => (prev = data.length - 2));
    else if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const moveRight = () => {
    if (index === data.length - 2) setIndex((prev) => (prev = 1));
    else if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className={styles.carousel}>
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

            return <Card {...el} selectedStyle={cardClass} theme={theme} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default CarouselMain;
