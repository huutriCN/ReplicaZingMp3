// components
import ImageComponent from "../ImageComponent";

// others
import styles from "./styles.module.scss";

const NewsComponent = ({ thumbnail, title, imageWidth, imageHeight }) => (
  <div className={styles["news-wrapper"]}>
    <div className={styles["news-wrapper-inner"]}>
      <ImageComponent
        thumbnail={thumbnail}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        showIcon={false}
      />
      <h3 className={styles["news-title"]}>
        <a href={title}>{title}</a>
      </h3>
    </div>
  </div>
);
export default NewsComponent;
