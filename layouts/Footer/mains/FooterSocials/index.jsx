import classNames from "classnames";
import styles from "./styles.module.scss";
import footers from "../../../../dataSources/Footer";

const FooterSocials = () => (
  <div className={styles["social-wrapper"]}>
    <ul className={styles["social-list"]}>
      {footers.footerSocials.map((social) => (
        <li
          key={social.id}
          className={classNames(styles["social-icon-btn"], styles[social.icon])}
        >
          <a href={social.href} title={social.title}>
            {social.title}
          </a>
        </li>
      ))}
    </ul>
    <a
      className={styles["social-certificate"]}
      title="DCMA Protected"
      href="/home"
    >
      <img src="cert.png" alt="DCMA Certificate" />
    </a>
    <div className={styles["social-versions"]}>
      <a title="Phiên bản mobile" href="/home">
        Phiên bản mobile
      </a>
    </div>
  </div>
);

export default FooterSocials;
