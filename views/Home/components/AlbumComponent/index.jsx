// components
import ImageComponent from "../ImageComponent";
import SongInformation from "../SongInformation";

const AlbumComponent = ({
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
    <SongInformation title={title} artistsNames={artists} wrapText={false} />
  </div>
);

export default AlbumComponent;
