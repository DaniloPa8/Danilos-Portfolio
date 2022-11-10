import styles from "./../styles/MainStyles/Skills.module.css";
const SkillIcon = ({ name, IconComp, theme }) => {
  return (
    <div className={theme ? styles.iconContainerWhite : styles.iconContainer}>
      <IconComp className={styles.icon} key={name} />
      <p>{name}</p>
    </div>
  );
};
export default SkillIcon;
