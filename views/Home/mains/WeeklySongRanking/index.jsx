// Components
import TabComponent from "../../components/TabComponent";
import TitleComponent from "../../components/TitleComponent";

// others
import styles from "./styles.module.scss";
import ranking from "../../../../dataSources/WeeklySongRanking";

const WeeklySongRanking = () => (
  <div className={styles["ranking-wrapper"]}>
    <TitleComponent title={ranking.title} canPlay={ranking.canPlay} />
    <TabComponent
      tabList={ranking.tabList}
      currentActiveTab={ranking.currentActiveTab}
    />
  </div>
);

export default WeeklySongRanking;
