// eslint-disable-next-line import/no-extraneous-dependencies
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";

import styles from "./style.module.scss";

const TitleComponent = ({ title, canPlay }) => (
  <div className={styles["component-wrapper"]}>
    <div className={styles["title-wrapper"]}>
      <a href="/home" className={styles["title-content"]}>
        {title}
      </a>
      <RightOutlined />
    </div>
    {canPlay && <PlayCircleOutlined className={styles["title-icon"]} />}
  </div>
);

export default TitleComponent;
