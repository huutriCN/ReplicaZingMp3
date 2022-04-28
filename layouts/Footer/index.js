import classNames from "classnames";
import styles from "./styles.module.scss";

const Footer = () => (
  <div className={styles["footer-wrapper"]}>
    <div className={styles["footer-wrapper-inner"]}>
      <div className={styles["footer-copyright"]}>
        <div>
          <img src="/static/icon_zing_mp3_60.png" alt="" />
        </div>
        <div className={styles["copyright-desc"]}>
          <p>© 2015 VNG Corporation</p>
          <p>Giấy phép MXH số 314/GP-BTTTT.</p>
        </div>
      </div>
      <div className={styles["footer-link"]}>
        <a title="Giới thiệu" href="/home">
          Giới thiệu
        </a>
        <a title="Điều khoản" href="/home">
          Điều khoản
        </a>
        <a title="Quảng cáo" href="/home">
          Quảng cáo
        </a>
        <a title="FAQs" href="/home">
          FAQs
        </a>
        <a title="Copyright" href="/home">
          Copyright
        </a>
        <a title="Zing Mp3 VIP" href="/home">
          Zing Mp3 VIP
        </a>
        <a title="Ứng dụng" href="/home">
          Ứng dụng
        </a>
        <a title="Góp ý" href="/home">
          Góp ý
        </a>
        <a title="APIs" href="/home">
          APIs
        </a>
        <a title="Liên hệ" href="/home">
          Liên hệ
        </a>
      </div>
      <div className={styles["footer-social"]}>
        <ul className={styles["social-wrapper"]}>
          <li className={classNames(styles.icon, styles.facebook)}>
            <a href="/home" title="Facebook">
              Facebook
            </a>
          </li>
          <li className={classNames(styles.icon, styles.zalo)}>
            <a href="/home" title="Zalo">
              Zalo
            </a>
          </li>
          <li className={classNames(styles.icon, styles.google)}>
            <a href="/home" title="Google">
              Google
            </a>
          </li>
          <li className={classNames(styles.icon, styles.youtube)}>
            <a href="/home" title="Youtube">
              Facebook
            </a>
          </li>
        </ul>
        <a className={styles.certificate} title="DCMA Protected" href="/home">
          <img src="/static/cert.png" alt="DCMA Certificate" />
        </a>
        <div className={styles.versions}>
          <a title="Phiên bản mobile" href="/home">
            Phiên bản mobile
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
