// libs
import classNames from "classnames";

// components
// eslint-disable-next-line import/no-extraneous-dependencies
import { RightOutlined, PlayCircleOutlined } from "@ant-design/icons";

// others
import styles from "./style.module.scss";

const TitleComponent = ({ title, showedPlay, size }) => (
  <div className={styles["title-component-wrapper"]}>
    <div className={styles["title-wrapper"]}>
      <a
        href="/home"
        className={classNames({
          [styles["title-content"]]: true,
          [styles["size-large"]]: size === "large",
        })}
      >
        {title}
      </a>
      <RightOutlined />
    </div>
    {showedPlay && <PlayCircleOutlined className={styles["title-icon"]} />}
  </div>
);

export default TitleComponent;
