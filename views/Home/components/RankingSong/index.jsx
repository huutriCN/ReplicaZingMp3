// libs
// eslint-disable-next-line import/no-extraneous-dependencies
import { MinusOutlined } from "@ant-design/icons";
// components
import DescriptionTools from "../DescriptionTools";
import ImageComponent from "../ImageComponent";
import NumberComponent from "../NumberComponent";
import SongInfomation from "../SongInformation";
// others
import styles from "./styles.module.scss";

const RankingSong = ({ rankingNumber, title, artistsNames, thumbnail }) => (
  <div className={styles["song-wrapper"]}>
    <div className={styles["song-wrapper-inner"]}>
      <div className={styles["song-ranking"]}>
        <NumberComponent rankingNumber={rankingNumber} size="large" />
      </div>
      <div className={styles["song-minus"]}>
        <MinusOutlined />
      </div>
      <div className={styles["song-desc"]}>
        <ImageComponent
          thumbnail={thumbnail}
          imageHeight="62px"
          imageWidth="62px"
        />
        <div className={styles["song-info"]}>
          <SongInfomation title={title} artistsNames={artistsNames} />
        </div>
      </div>
      <div className="song-tools">
        <DescriptionTools display />
      </div>
    </div>
  </div>
);

export default RankingSong;
