// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/// components
import ChartComponent from "../../components/ChartComponent";
import RankingSong from "../../components/RankingSong";
// actions
import { fetchChartRanking } from "@/redux/actions/ChartRanking.action";
// mocks
import data from "@/mocks/ChartRanking";
// others
import styles from "./styles.module.scss";

const ChartRanking = () => {
  const dispatch = useDispatch();
  const rankingSong = useSelector(
    (state) => state.chartRankingReducer.rankingSong,
  );

  useEffect(() => {
    dispatch(fetchChartRanking(data));
  }, []);

  return (
    <div className={styles["ranking-wrapper"]}>
      <ChartComponent songList={rankingSong} />
      {rankingSong.map((song, index) => (
        <RankingSong key={song.title} rankingNumber={index} {...song} />
      ))}
    </div>
  );
};

export default ChartRanking;
