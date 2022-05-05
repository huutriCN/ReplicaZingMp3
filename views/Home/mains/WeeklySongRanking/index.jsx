import TitleComponent from "../../components/TitleComponent";
import styles from "./styles.module.scss";

const WeeklySongRanking = () => (
  <div className={styles["ranking-wrapper"]}>
    <TitleComponent title="#ZingChart Tuần - Bài Hát" canPlay />
  </div>
);

export default WeeklySongRanking;
