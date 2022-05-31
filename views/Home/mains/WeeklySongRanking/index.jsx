// libs
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Components
import TabComponent from "../../components/TabComponent";
import TitleComponent from "../../components/TitleComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
import SongDescription from "../../components/SongDescription";
// actions
import { fetchSongRanking } from "@/redux/actions/WeeklySongRanking.action";
// mocks
import data from "@/mocks/WeelySongRanking";

// others
import styles from "./styles.module.scss";
import ranking from "@/dataSources/WeeklySongRanking";

const WeeklySongRanking = () => {
  const dispatch = useDispatch();
  const rankingSong = useSelector(
    (state) => state.weeklySongRankingReducer.weeklySongRanking,
  );

  useEffect(() => {
    dispatch(fetchSongRanking(data));
  }, []);

  return (
    <div className={styles["weekly-song-ranking-wrapper"]}>
      <TitleComponent title={ranking.title} showedPlay={ranking.showPlay} />
      <TabComponent
        tabList={ranking.tabList}
        currentActiveTab={ranking.currentActiveTab}
      />
      {rankingSong.map((song, index) => {
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
};

export default WeeklySongRanking;
