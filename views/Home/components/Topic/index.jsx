// compontents
// eslint-disable-next-line import/no-extraneous-dependencies
import { RightOutlined } from "@ant-design/icons";

// others
import styles from "./styles.module.scss";

const Topic = ({ topicTitle }) => (
  <div className={styles["topic-wrapper"]}>
    <h2 className={styles["topic-title"]}>{topicTitle}</h2>
    <a href="/home">
      <img
        src="today_selection.jpg"
        alt=""
        className={styles["topic-thumbnail"]}
      />
    </a>
    <a href="/home" className={styles["topic-others"]}>
      Xem thêm Chủ Đề khác
      <RightOutlined />
    </a>
  </div>
);

export default Topic;
