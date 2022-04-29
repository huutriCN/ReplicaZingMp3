import Topic from "../../components/Topic";
import styles from "./styles.module.scss";

const HotTopic = () => (
  <div className={styles["topic-wrapper"]}>
    <Topic topicTitle="Hot Topic" />
  </div>
);

export default HotTopic;
