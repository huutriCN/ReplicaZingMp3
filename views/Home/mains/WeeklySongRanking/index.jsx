// Components
import TabComponent from "../../components/TabComponent";
import TitleComponent from "../../components/TitleComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
import SongDescription from "../../components/SongDescription";

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
    <ImageCoverComponent />
    <SongDescription />
    <SongDescription />
    <SongDescription />
    <SongDescription />
    <SongDescription />
    <SongDescription />
    <SongDescription />
    <SongDescription />
  </div>
);

export default WeeklySongRanking;
