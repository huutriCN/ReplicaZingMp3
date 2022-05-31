/// components
import ChartComponent from "../../components/ChartComponent";
import RankingSong from "../../components/RankingSong";
// hooks
import useSelect from "@/hooks/useSelect";
// actions
import { fetchChartRanking } from "@/redux/actions/ChartRanking.action";
// mocks
import data from "@/mocks/ChartRanking";
// others
import styles from "./styles.module.scss";

const ChartRanking = () => {
  const rankingSong = useSelect(
    fetchChartRanking,
    (state) => state.chartRankingReducer.rankingSong,
    data,
  );

  return (
    <div className={styles["chart-ranking-wrapper"]}>
      <ChartComponent songList={rankingSong} />
      {rankingSong.map((song, index) => (
        <RankingSong key={song.title} rankingNumber={index} {...song} />
      ))}
    </div>
  );
};

export default ChartRanking;
