import classNames from "classnames";

import styles from "./styles.module.scss";

const TabComponent = ({ tabList, currentActiveTab }) => (
  <ul className={styles["tabs-wrapper"]}>
    {tabList.map((tab, index) => {
      const className = currentActiveTab === index ? styles.active : {};
      return (
        <li
          key={tab.link}
          className={classNames(styles["tab-item"], className)}
        >
          <a href={tab.link}>{tab.title}</a>
        </li>
      );
    })}
  </ul>
);

export default TabComponent;
