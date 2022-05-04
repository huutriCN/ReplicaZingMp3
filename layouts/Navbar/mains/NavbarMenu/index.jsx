// others
import styles from "./styles.module.scss";
import navbars from "../../../../dataSources/Navbar";

const NavbarMenu = () => (
  <ul className={styles["menu-wrapper"]}>
    {navbars.menuItem.map((item) => (
      <item.itemType {...item.properties} key={item.id} />
    ))}
  </ul>
);

export default NavbarMenu;
