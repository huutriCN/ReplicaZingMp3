import styles from "./styles.module.scss";

const Tracking = ({ trackingTitle }) => (
  <div className={styles["tracking-wrapper"]}>{trackingTitle}</div>
);

export default Tracking;
