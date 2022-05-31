// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/// components
import TitleComponent from "../../components/TitleComponent";
import AlbumComponent from "../../components/AlbumComponent";
// actions
import { fetchHotAlbum } from "@/redux/actions/HotAlbum.action";
// mocks
import data from "@/mocks/HotAlbum";
/// others
import tracking from "@/dataSources/HotAlbum";
import styles from "./styles.module.scss";

const HotALbum = () => {
  const dispatch = useDispatch();

  const hotAlbum = useSelector((state) => state.hotAlbumReducer.hotAlbum);

  useEffect(() => {
    dispatch(fetchHotAlbum(data));
  }, []);

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
