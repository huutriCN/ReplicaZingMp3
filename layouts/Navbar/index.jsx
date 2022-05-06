// components
import NavbarButtons from "./mains/NavbarButtons";
import NavbarMenu from "./mains/NavbarMenu";

// others
import styles from "./styles.module.scss";

const Navbar = () => (
  <div className={styles["navbar-wrapper"]}>
    <div className={styles["navbar-wrapper-inner"]}>
      <NavbarMenu />
      <NavbarButtons />
    </div>
  </div>
);

export default Navbar;
