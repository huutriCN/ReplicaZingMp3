/// components
import TitleComponent from "../../components/TitleComponent";
import AlbumComponent from "../../components/AlbumComponent";
// hooks
import useSelect from "@/hooks/useSelect";
// actions
import { fetchHotAlbum } from "@/redux/actions/HotAlbum.action";
// mocks
import data from "@/mocks/HotAlbum";
/// others
import tracking from "@/dataSources/HotAlbum";
import styles from "./styles.module.scss";

const HotALbum = () => {
  const hotAlbum = useSelect(
    fetchHotAlbum,
    (state) => state.hotAlbumReducer.hotAlbum,
    data,
  );

  return (
    <div className={styles["hot-album-wrapper"]}>
      <TitleComponent showedPlay={false} title={tracking.title} size="large" />
      <div className={styles["hot-album-wrapper-inner"]}>
        {hotAlbum.map((albumItem) => (
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
};

export default HotALbum;
