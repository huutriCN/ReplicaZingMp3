// libs
import classNames from "classnames";
// others
import styles from "./styles.module.scss";
import headers from "../../dataSources/Header";

const Header = () => (
  <div className={styles["header-wrapper"]}>
    <div className={styles["header-wrapper-inner"]}>
      <div className={styles["header-logo"]}>
        <a
          href="/home"
          className={styles["logo-text"]}
          title="Zing Mp3 đỉnh cao âm nhạc"
        >
          <img src="logo.png" alt="" />
        </a>
      </div>
      <div className={styles["header-content"]}>
        <div>
          <form className={styles["header-search"]}>
            <input
              className={styles["search-input"]}
              placeholder="Nhập nội dung cần tìm"
            />
            <span className={styles["search-btn"]}>
              <button className={styles["search-icon"]} type="submit">
                Tìm kiếm
              </button>
            </span>
          </form>
        </div>
        <ul className={styles["header-menu"]}>
          {headers.menuItem.map((item) => (
            <li
              key={item.id}
              className={classNames(styles["header-menu-item"])}
            >
              <a href={item.href} title={item.title}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["header-auth"]}>
        <a href="/home" title="Đăng nhập">
          Đăng nhập
        </a>
      </div>
    </div>
  </div>
);
export default Header;
