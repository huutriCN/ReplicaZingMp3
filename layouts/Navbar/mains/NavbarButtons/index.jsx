// others
import styles from "./styles.module.scss";

const NavbarButtons = () => (
  <div className={styles["buttons-wrapper"]}>
    <a href="/home" className={styles["btn-ads"]} title="Tắt quảng cáo">
      <i className={styles["btn-icon"]}>upload</i>
      <span>Tắt quảng cáo</span>
    </a>
    <a href="/home" title="Upload" className={styles["btn-upload"]}>
      Upload
    </a>
  </div>
);

export default NavbarButtons;
