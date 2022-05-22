/// components
import TitleComponent from "../../components/TitleComponent";
import AlbumComponent from "../../components/AlbumComponent";

// mocks
import data from "@/mocks/HotAlbum";

/// others
import tracking from "@/dataSources/HotAlbum";
import styles from "./styles.module.scss";

const HotALbum = () => (
  <div className={styles["album-wrapper"]}>
    <TitleComponent showedPlay={false} title={tracking.title} size="large" />
    <div className={styles["content-wrapper"]}>
      {data.map((albumItem) => (
        <AlbumComponent
          key={albumItem.title}
          imageHeight={tracking.HOTALBUM_IMAGE_HEIGHT}
          imageWidth={tracking.HOTALBUM_IMAGE_WIDTH}
          {...albumItem}
        />
      ))}
    </div>
  </div>
);

export default HotALbum;
