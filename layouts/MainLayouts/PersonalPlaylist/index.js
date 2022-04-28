import Playlist from "../../../components/Playlist";
import styles from "./styles.module.scss";

const PersonalPlaylist = () => (
  <div className={styles["playlist-wrapper"]}>
    <Playlist playlistTitle="Personal Playlist" />
  </div>
);

export default PersonalPlaylist;
