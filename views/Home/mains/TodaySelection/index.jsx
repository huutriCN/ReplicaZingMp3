import Tracking from "../../components/Tracking";
import styles from "./styles.module.scss";

const TodaySelection = () => (
  <div className={styles["selection-wrapper"]}>
    <Tracking trackingTitle="Today Selection" />
  </div>
);

export default TodaySelection;
