import styles from "./Playlist.module.scss";

const Playlist = ({ className }) => (
  <div className={`${styles.playlist} ${className}`}>Personal Playlist</div>
);

export default Playlist;
