// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import TabComponent from "../../components/TabComponent";
import TitleComponent from "../../components/TitleComponent";
import ImageCoverComponent from "../../components/ImageCoverComponent";
import AlbumDesciption from "../../components/AlbumDescription";
// actions
import { fetchWeeklyAlbumRanking } from "@/redux/actions/WeeklyAlbumRanking.action";
// mocks
import data from "@/mocks/WeeklyAlbumRanking";
// others
import styles from "./styles.module.scss";
import ranking from "@/dataSources/WeeklyAlbumRanking";

const WeeklyAlbumRanking = () => {
  const dispatch = useDispatch();
  const rankingAlbum = useSelector(
    (state) => state.rankingAlbumReducer.rankingAlbum,
  );

  useEffect(() => {
    dispatch(fetchWeeklyAlbumRanking(data));
  }, []);

  useEffect(() => {
    console.log(rankingAlbum);
  });

  return (
    <div className={styles["ranking-wrapper"]}>
      <TitleComponent title={ranking.title} showedPlay={ranking.showedPlay} />
      <TabComponent
        tabList={ranking.tabList}
        currentActiveTab={ranking.currentActiveTab}
      />
      {rankingAlbum.map((song, index) => {
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
          <AlbumDesciption
            key={song.encodeId}
            rankingNumber={index + 1}
            {...song}
          />
        );
      })}
    </div>
  );
};

export default WeeklyAlbumRanking;
