// components
import DescriptionTools from "../DescriptionTools";
import ImageComponent from "../ImageComponent";
import SongInfomation from "../SongInformation";

// others
import styles from "./styles.module.scss";

const VPopComponent = ({
  thumbnail,
  title,
  artistsNames,
  imageWidth,
  imageHeight,
}) => (
  <div className={styles["song-wrapper"]}>
    <div className={styles["song-wrapper-inner"]}>
      <ImageComponent
        thumbnail={thumbnail}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
      <SongInfomation title={title} artistsNames={artistsNames} />
      <div className={styles["song-tools"]}>
        <DescriptionTools />
      </div>
    </div>
  </div>
);

export default VPopComponent;
