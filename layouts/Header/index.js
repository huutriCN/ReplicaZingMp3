import classNames from "classnames";
import styles from "./styles.module.scss";

const Header = () => (
  <div className={styles["header-wrapper"]}>
    <div className={styles["header-wrapper-inner"]}>
      <div className={styles["header-logo"]}>
        <a
          href="/home"
          className={styles["logo-text"]}
          title="Zing Mp3 đỉnh cao âm nhạc"
        >
          <img src="/static/logo.png" alt="" />
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
          <li className={classNames(styles["header-menu-item"], styles.active)}>
            <a href="/home" title="Zing Mp3">
              MP3
            </a>
          </li>
          <li className={styles["header-menu-item"]}>
            <a href="/home" title="Zing News">
              News
            </a>
          </li>
          <li className={styles["header-menu-item"]}>
            <a href="/home" title="Zing TV">
              TV
            </a>
          </li>
          <li className={styles["header-menu-item"]}>
            <a href="/home" title="Zalo PC">
              Zalo PC
            </a>
          </li>
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
