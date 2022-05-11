// eslint-disable-next-line import/no-extraneous-dependencies
import { ShareAltOutlined } from "@ant-design/icons";
/// components
import ChartSong from "../ChartSong";
/// others
import styles from "./styles.module.scss";

const ChartComponent = ({ songList }) => (
  <div className={styles["chart-wrapper"]}>
    <div className={styles["chart-wrapper-inner"]}>
      <div className={styles["chart-heading"]}>
        <a href="/home" className={styles["heading-btn"]}>
          #zingchart
        </a>
        <ShareAltOutlined className={styles["heading-icon"]} />
      </div>
      <div className={styles["chart-content"]} />
      <ul className={styles["songs-wrapper"]}>
        {songList.slice(0, 3).map((song, index) => (
          <li key={song.title} className={styles["songs-item"]}>
            <ChartSong rankingNumber={index} {...song} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ChartComponent;
