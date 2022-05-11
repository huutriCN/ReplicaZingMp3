// components
import ImageComponent from "../ImageComponent";
import SongInfomation from "../SongInformation";

const VideoComponent = ({
  title,
  artists,
  thumbnail,
  imageWidth,
  imageHeight,
}) => (
  <div>
    <ImageComponent
      thumbnail={thumbnail}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
    />
    <SongInfomation title={title} artistsNames={artists} wrapText={false} />
  </div>
);
export default VideoComponent;
