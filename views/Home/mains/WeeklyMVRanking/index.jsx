// Components
import TabComponent from "../../components/TabComponent";
import TitleComponent from "../../components/TitleComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
import MVDescription from "../../components/MVDescription";

// mocks
import data from "../../../../mocks/WeeklyMVRanking";

// others
import styles from "./styles.module.scss";
import ranking from "../../../../dataSources/WeeklyMVRanking";

const WeeklyMVRanking = () => (
  <div className={styles["ranking-wrapper"]}>
    <TitleComponent title={ranking.title} showedPlay={ranking.showedPlay} />
    <TabComponent
      tabList={ranking.tabList}
      currentActiveTab={ranking.currentActiveTab}
    />
    {data[0].songList.map((song, index) => {
      if (index === 0)
        return (
          <ImageCoverComponent
            rankingNumber={index + 1}
            showedTools={false}
            key={song.encodeId}
            {...song}
          />
        );
      return (
        <MVDescription
          key={song.encodeId}
          rankingNumber={index + 1}
          {...song}
        />
      );
    })}
  </div>
);

export default WeeklyMVRanking;
