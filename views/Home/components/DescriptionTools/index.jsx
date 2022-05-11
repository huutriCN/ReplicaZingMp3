// libs
import classNames from "classnames";

// others
import styles from "./styles.module.scss";
import tools from "../../../../dataSources/DescriptionTools";

const DescriptionTools = ({ display = false }) => (
  <div
    className={classNames({
      [styles["tools-wrapper"]]: true,
      [styles["tools-hide"]]: !display,
    })}
  >
    {tools.map(({ Tool, title }) => (
      <Tool key={title} className={styles["tool-item"]} />
    ))}
  </div>
);

export default DescriptionTools;
