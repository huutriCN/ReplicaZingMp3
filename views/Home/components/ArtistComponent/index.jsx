// others
import styles from "./styles.module.scss";

const ArtistComponent = ({ thumbnail, name }) => (
  <div className={styles["artist-wrapper"]}>
    <a href={name} className={styles["artist-wrapper-inner"]}>
      <img src={thumbnail} alt="" />
      <h4 className={styles["artist-name"]}>{name}</h4>
    </a>
  </div>
);

export default ArtistComponent;
