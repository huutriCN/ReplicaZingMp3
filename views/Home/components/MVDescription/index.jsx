/// components
import ImageComponent from "../ImageComponent";
import SongInfomation from "../SongInformation";

/// others
import styles from "./styles.module.scss";

const MVDesciption = ({
  title,
  artistsNames,
  thumbnail,
  rankingNumber,
  color = "dark",
}) => (
  <div className={styles["desc-wrapper"]}>
    <div className={styles["desc-wrapper-inner"]}>
      <ImageComponent rankingNumber={rankingNumber} thumbnail={thumbnail} />
      <SongInfomation title={title} artistsNames={artistsNames} color={color} />
    </div>
  </div>
);

export default MVDesciption;
