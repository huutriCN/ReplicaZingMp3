/// components
import TitleComponent from "../../components/TitleComponent";
import VideoComponent from "../../components/VideoComponent";

// mocks
import data from "../../../../mocks/HotVideo";

/// others
import tracking from "../../../../dataSources/HotVideo";
import styles from "./styles.module.scss";

const HotVideo = () => (
  <div className={styles["tracking-wrapper"]}>
    <TitleComponent showedPlay={false} title={tracking.title} size="large" />
    <div className={styles["content-wrapper"]}>
      {data.map((videoItem) => (
        <VideoComponent
          key={videoItem.title}
          imageHeight={tracking.HOTVIDEO_IMAGE_HEIGHT}
          imageWidth={tracking.HOTVIDEO_IMAGE_WIDTH}
          {...videoItem}
        />
      ))}
    </div>
  </div>
);

export default HotVideo;
