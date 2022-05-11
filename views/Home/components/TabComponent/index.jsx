// libs
import classNames from "classnames";
// others
import styles from "./styles.module.scss";

const TabComponent = ({ tabList, currentActiveTab }) => (
  <ul className={styles["tabs-wrapper"]}>
    {tabList.map((tab, index) => (
      <li
        key={tab.link}
        className={classNames({
          [styles["tab-item"]]: true,
          [styles.active]: currentActiveTab === index,
        })}
      >
        <a href={tab.link}>{tab.title}</a>
      </li>
    ))}
  </ul>
);

export default TabComponent;
