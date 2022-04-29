import styles from "./styles.module.scss";

const Topic = ({ topicTitle }) => (
  <div className={styles["topic-wrapper"]}>{topicTitle}</div>
);

export default Topic;
