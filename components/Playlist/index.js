import styles from "./styles.module.scss";

const Playlist = ({ playlistTitle }) => (
  <div className={styles["playlist-wrapper"]}>{playlistTitle}</div>
);

export default Playlist;
