// components
import DropdownMenu from "../DropdownMenu";
// others
import styles from "./styles.module.scss";

const TitleItem = ({ id, itemTitle, link, dropdownItems }) => (
  <li key={id} className={styles["item-wrapper"]}>
    <a href={link} title={itemTitle}>
      {itemTitle}
    </a>
    {dropdownItems && (
      <DropdownMenu
        id={id}
        columnList={dropdownItems}
        className={styles["item-dropdown"]}
      />
    )}
  </li>
);

export default TitleItem;
