// libs
import classNames from "classnames";

// components
// eslint-disable-next-line import/no-extraneous-dependencies
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";

// others
import styles from "./style.module.scss";

const TitleComponent = ({ title, showedPlay, size }) => {
  const style = size === "large" ? styles["size-large"] : "";
  return (
    <div className={styles["component-wrapper"]}>
      <div className={styles["title-wrapper"]}>
        <a href="/home" className={classNames(styles["title-content"], style)}>
          {title}
        </a>
        <RightOutlined />
      </div>
      {showedPlay && <PlayCircleOutlined className={styles["title-icon"]} />}
    </div>
  );
};

export default TitleComponent;
