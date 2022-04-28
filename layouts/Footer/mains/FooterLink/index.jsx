import styles from "./styles.module.scss";
import footers from "../../../../dataSources/Footer";

const FooterLink = () => (
  <div className={styles["link-wrapper"]}>
    {footers.footerLinks.map((link) => (
      <a title={link.title} href={link.href} key={link.id}>
        {link.title}
      </a>
    ))}
  </div>
);

export default FooterLink;
