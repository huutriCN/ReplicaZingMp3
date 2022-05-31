/// components
import ImageComponent from "../ImageComponent";
import NumberComponent from "../NumberComponent";

/// others
import styles from "./styles.module.scss";

const ChartSong = ({
  thumbnail,
  artistsNames,
  title,
  rankingNumber,
  percent,
}) => (
  <div className={styles["chart-song-wrapper"]}>
    <div className={styles["chart-song-wrapper-inner"]}>
      <NumberComponent rankingNumber={rankingNumber} />
      <ImageComponent
        imageHeight="30px"
        imageWidth="30px"
        thumbnail={thumbnail}
      />
      <div className={styles["song-information"]}>
        <h3 className={styles["song-title"]}>
          <a href={title}>{title}</a>
        </h3>
        <div className={styles["song-artist"]}>
          {artistsNames.map((artist, index) => (
            <h4 key={artist}>
              <a href={artist}>{index !== 0 ? `, ${artist}` : ` ${artist}`}</a>
            </h4>
          ))}
        </div>
      </div>
      <NumberComponent percent={percent} rankingNumber={rankingNumber} />
    </div>
  </div>
);

export default ChartSong;
