// components
import ImageComponent from "../ImageComponent";

/// others
import styles from "./styles.module.scss";

// eslint-disable-next-line import/order
import { Button } from "antd";

const Selection = ({ title, artist, imageWidth, imageHeight, thumbnail }) => (
  <div className={styles["selection-wrapper"]}>
    <ImageComponent
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      thumbnail={thumbnail}
    />
    <h3 className={styles["selection-title"]}>
      <a href="/home">{title}</a>
    </h3>
    <h4 className={styles["selection-artist"]}>
      <a href="/home">{artist}</a>
    </h4>
    <div>
      <Button />
    </div>
  </div>
);

export default Selection;
