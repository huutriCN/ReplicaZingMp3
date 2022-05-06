import styles from "./styles.module.scss";

const FooterCopyRight = () => (
  <div className={styles["copyright-wrapper"]}>
    <div>
      <img src="icon_zing_mp3_60.png" alt="Zing Mp3" />
    </div>
    <div className={styles["copyright-desc"]}>
      <p>© 2015 VNG Corporation</p>
      <p>Giấy phép MXH số 314/GP-BTTTT.</p>
    </div>
  </div>
);

export default FooterCopyRight;
