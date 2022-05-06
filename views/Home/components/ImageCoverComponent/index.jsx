// components
import SongDescription from "../SongDescription";
// others
import styles from "./styles.module.scss";

const ImageCoverComponent = (props) => (
  <div className={styles["component-wrapper"]}>
    <a href="/home">
      <img src="/cover.jpg" alt="" />
    </a>
    <SongDescription
      className={styles["component-desc"]}
      color="white"
      {...props}
    />
    <span className={styles["component-mask"]} />
  </div>
);

export default ImageCoverComponent;
