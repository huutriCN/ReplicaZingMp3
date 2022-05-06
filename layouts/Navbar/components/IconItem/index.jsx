import styles from "./styles.module.scss";

const IconItem = ({ id, link, itemTitle, itemText }) => (
  <li key={id} className={styles["item-wrapper"]}>
    <a href={link} title={itemTitle}>
      {itemText}
    </a>
  </li>
);

export default IconItem;
