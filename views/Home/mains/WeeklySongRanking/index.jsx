// Components
import TabComponent from "../../components/TabComponent";
import TitleComponent from "../../components/TitleComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
import SongDescription from "../../components/SongDescription";

// mocks
import data from "@/mocks/WeelySongRanking";

// others
import styles from "./styles.module.scss";
import ranking from "@/dataSources/WeeklySongRanking";

const WeeklySongRanking = () => (
  <div className={styles["ranking-wrapper"]}>
    <TitleComponent title={ranking.title} showedPlay={ranking.showPlay} />
    <TabComponent
      tabList={ranking.tabList}
      currentActiveTab={ranking.currentActiveTab}
    />
    {data[0].songList.map((song, index) => {
      if (index === 0)
        return (
          <ImageCoverComponent
            rankingNumber={index + 1}
            key={song.encodeId}
            {...song}
          />
        );
      return (
        <SongDescription
          rankingNumber={index + 1}
          key={song.encodeId}
          {...song}
        />
      );
    })}
  </div>
);

export default WeeklySongRanking;
