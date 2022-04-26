import styles from "./Tracking.module.scss";

const Tracking = ({ className, trackingTitle }) => (
  <div className={`${styles.tracking} ${className}`}>{trackingTitle}</div>
);

export default Tracking;
