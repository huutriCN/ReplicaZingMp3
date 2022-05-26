// libs
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
/// components
import TitleComponent from "../../components/TitleComponent";
import VideoComponent from "../../components/VideoComponent";
// actions
import { fetchHotVideo } from "@/redux/actions/HotVideo.action";
// mocks
import data from "@/mocks/HotVideo";

/// others
import tracking from "@/dataSources/HotVideo";
import styles from "./styles.module.scss";

const HotVideo = () => {
  const dispatch = useDispatch();
  const hotVideos = useSelector((state) => state.hotVideoReducer.hotVideo);

  useEffect(() => {
    dispatch(fetchHotVideo(data));
  }, []);

  return (
    <div className={styles["tracking-wrapper"]}>
      <TitleComponent showedPlay={false} title={tracking.title} size="large" />
      <div className={styles["content-wrapper"]}>
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
