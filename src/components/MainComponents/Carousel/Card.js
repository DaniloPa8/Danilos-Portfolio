import styles from "./../../../styles/MainStyles/Carousel.module.css";

const Card = ({ theme, selectedStyle, name, text }) => {
  return (
    <div
      className={`${styles.card} ${
        theme ? styles.cardLight : styles.cardDark
      } ${selectedStyle}`}
    >
      <h2>{name}</h2>
      <p> {text}</p>
    </div>
  );
};
export default Card;
