import styles from "./styles.module.scss";

const Separation = ({ id, itemText }) => (
  <li key={id} className={styles["item-wrapper"]}>
    {itemText}
  </li>
);

export default Separation;
