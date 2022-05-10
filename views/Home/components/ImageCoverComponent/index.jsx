// libs
import classNames from "classnames";
// components
import SongDescription from "../SongDescription";
// others
import styles from "./styles.module.scss";

const ImageCoverComponent = ({
  rankingNumber,
  artistsNames,
  newsTitle,
  title,
  size = "small",
  image = "cover.jpg",
}) => {
  const sizeImage = size === "large" ? styles["img-large"] : "";
  return (
    <div className={classNames(styles["component-wrapper"], sizeImage)}>
      <a href="/home">
        <img src={image} alt="" className={styles["component-image"]} />
      </a>
      {artistsNames && (
        <SongDescription
          className={styles["component-desc"]}
          color="white"
          title={title}
          artistsNames={artistsNames}
          rankingNumber={rankingNumber}
        />
      )}
      {newsTitle && (
        <h3 className={styles["component-desc"]}>
          <a href={newsTitle} className={styles["component-title"]}>
            {newsTitle}
          </a>
        </h3>
      )}
      <span className={styles["component-mask"]} />
    </div>
  );
};

export default ImageCoverComponent;
