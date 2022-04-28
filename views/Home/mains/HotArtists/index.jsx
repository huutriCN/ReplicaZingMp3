import Tracking from "../../components/Tracking";
import styles from "./styles.module.scss";

const HotArtists = () => (
  <div className={styles["artists-wrapper"]}>
    <Tracking trackingTitle="Hot Artists" />
  </div>
);

export default HotArtists;
