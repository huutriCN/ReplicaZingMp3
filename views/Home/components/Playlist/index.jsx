// eslint-disable-next-line import/no-extraneous-dependencies
import { PlayCircleOutlined } from "@ant-design/icons";

// others
import styles from "./styles.module.scss";

const Playlist = ({ playlistTitle, playlistDesc }) => (
  <div className={styles["playlist-wrapper"]}>
    <div className={styles["playlist-wrapper-inner"]}>
      <span className={styles["playlist-mask"]} />
      <div className={styles["thumbnail-wrapper"]}>
        <PlayCircleOutlined className={styles["playlist-icon"]} />
        <img
          src="discover_cover_240.jpg"
          alt=""
          className={styles["playlist-thumbnail"]}
        />
      </div>
      <div className={styles["playlist-intro"]}>
        <div className={styles["intro-title"]}>
          <a href="/home">{playlistTitle}</a>
        </div>
        <div className={styles["intro-desc"]}>
          <a href="/home">{playlistDesc}</a>
        </div>
      </div>
    </div>
  </div>
);

export default Playlist;
