// eslint-disable-next-line import/no-extraneous-dependencies
import { PlayCircleOutlined } from "@ant-design/icons";
/// others
import styles from "./styles.module.scss";

const ImageComponent = ({
  rankingNumber,
  thumbnail,
  imageWidth,
  imageHeight,
  showIcon = true,
}) => (
  <div className={styles["component-wrapper"]}>
    <div className={styles["component-wrapper-inner"]}>
      <img
        src={thumbnail}
        alt=""
        className={styles["component-img"]}
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      />
      {showIcon && <PlayCircleOutlined className={styles["component-icon"]} />}
      {rankingNumber && <span className={styles["component-mask"]} />}
      <span className={styles["component-blurmask"]} />
      {rankingNumber && (
        <span
          className={styles["component-number"]}
        >{`0${rankingNumber}`}</span>
      )}
    </div>
  </div>
);

export default ImageComponent;
