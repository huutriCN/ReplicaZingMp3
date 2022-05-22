/// components
import ChartComponent from "../../components/ChartComponent";
import RankingSong from "../../components/RankingSong";

// mocks
import data from "@/mocks/ChartRanking";

// others
import styles from "./styles.module.scss";

const ChartRanking = () => (
  <div className={styles["ranking-wrapper"]}>
    <ChartComponent songList={data} />
    {data.map((song, index) => (
      <RankingSong key={song.title} rankingNumber={index} {...song} />
    ))}
  </div>
);

export default ChartRanking;
