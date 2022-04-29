import Image from "next/image";
import styles from "./styles.module.scss";
import footers from "../../../../dataSources/Footer";

const FooterCopyRight = () => (
  <div className={styles["copyright-wrapper"]}>
    <div>
      <Image src={footers.footerCopyright.image} />
    </div>
    <div className={styles["copyright-desc"]}>
      <p>© 2015 VNG Corporation</p>
      <p>Giấy phép MXH số 314/GP-BTTTT.</p>
    </div>
  </div>
);

export default FooterCopyRight;
