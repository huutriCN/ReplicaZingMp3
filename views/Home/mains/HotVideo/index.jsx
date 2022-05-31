/// components
import TitleComponent from "../../components/TitleComponent";
import VideoComponent from "../../components/VideoComponent";
// hooks
import useSelect from "@/hooks/useSelect";
// actions
import { fetchHotVideo } from "@/redux/actions/HotVideo.action";
// mocks
import data from "@/mocks/HotVideo";

/// others
import tracking from "@/dataSources/HotVideo";
import styles from "./styles.module.scss";

const HotVideo = () => {
  const hotVideos = useSelect(
    fetchHotVideo,
    (state) => state.hotVideoReducer.hotVideo,
    data,
  );

  return (
    <div className={styles["hot-video-wrapper"]}>
      <TitleComponent showedPlay={false} title={tracking.title} size="large" />
      <div className={styles["hot-video-wrapper-inner"]}>
        {hotVideos.map((videoItem) => (
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
};

export default HotVideo;
