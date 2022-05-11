// components
import Topic from "../../components/Topic";

// styles
import styles from "./styles.module.scss";
import topic from "../../../../dataSources/HotTopic";

const HotTopic = () => (
  <div className={styles["topic-wrapper"]}>
    <Topic topicTitle={topic.topicTitle} />
  </div>
);

export default HotTopic;
