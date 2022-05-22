// context
import { useLocale } from "../../../../contexts/LocaleContext";
// others
import styles from "./styles.module.scss";
import navbars from "@/dataSources/Navbar";

const NavbarMenu = () => {
  const { localeDataSource } = useLocale();
  return (
    <ul className={styles["menu-wrapper"]}>
      {navbars.menuItem.map((item) => (
        <item.itemType
          itemTitle={localeDataSource[item.properties.title]}
          {...item.properties}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default NavbarMenu;
