import Image from "next/image";
import SongDescription from "../SongDescription";
import styles from "./styles.module.scss";
import cover from "../../../../public/cover.jpg";

const ImageCoverComponent = (props) => (
  <div className={styles["component-wrapper"]}>
    <a href="/home">
      <Image src={cover} />
    </a>
    <SongDescription className={styles["component-desc"]} {...props} />
    <span className={styles["component-mask"]} />
  </div>
);

export default ImageCoverComponent;
