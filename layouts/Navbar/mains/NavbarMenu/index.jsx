// components
import DropdownMenu from "../../components/DropdownMenu";

// others
import styles from "./styles.module.scss";
import navbars from "../../../../dataSources/Navbar";

const NavbarMenu = () => (
  <ul className={styles["menu-wrapper"]}>
    {navbars.menuItem.map((item) => {
      if (item.itemType === "icon") {
        return (
          <li key={item.id} className={styles["item-icon"]}>
            <a href={item.link} title={item.itemTitle}>
              {item.text}
            </a>
          </li>
        );
      }
      if (item.itemType === "text") {
        return (
          <li key={item.id} className={styles["item-menu"]}>
            <a href={item.link} title={item.itemTitle}>
              {item.itemTitle}
            </a>
            {item.dropdownItems && (
              <DropdownMenu
                id={item.id}
                columnList={item.dropdownItems}
                className={styles["item-dropdown"]}
              />
            )}
          </li>
        );
      }
      if (item.itemType === "separation") {
        return (
          <li key={item.id} className={styles["item-separation"]}>
            {item.text}
          </li>
        );
      }
      return null;
    })}
  </ul>
);

export default NavbarMenu;
