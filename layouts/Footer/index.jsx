import styles from "./styles.module.scss";
import FooterCopyright from "./mains/FooterCopyright";
import FooterLink from "./mains/FooterLink";
import FooterSocials from "./mains/FooterSocials";

const Footer = () => (
  <div className={styles["footer-wrapper"]}>
    <div className={styles["footer-wrapper-inner"]}>
      <FooterCopyright />
      <FooterLink />
      <FooterSocials />
    </div>
  </div>
);

export default Footer;
