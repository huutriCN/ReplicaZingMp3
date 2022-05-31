/// components
import Playlist from "../../components/Playlist";

// others
import styles from "./styles.module.scss";
import playlist from "@/dataSources/PersonalPlaylist";

const PersonalPlaylist = () => (
  <div className={styles["personal-playlist-wrapper"]}>
    <Playlist
      playlistTitle={playlist.playlistTitle}
      playlistDesc={playlist.playlistDesc}
    />
  </div>
);

export default PersonalPlaylist;
