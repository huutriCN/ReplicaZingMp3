// libs
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ArtistComponent from "../../components/ArtistComponent";
// actions
import { fetchHotArtist } from "@/redux/actions/HotArtist.action";
// mocks
import data from "@/mocks/HotArtist";
// others
import styles from "./styles.module.scss";
import dataSource from "@/dataSources/HotArtists";

const HotArtists = () => {
  const dispatch = useDispatch();
  const hotArtists = useSelector((state) => state.hotArtistReducer.hotArtists);

  useEffect(() => {
    dispatch(fetchHotArtist(data));
  }, []);

  return (
    <div className={styles["artists-wrapper"]}>
      <TitleComponent
        showedPlay={false}
        title={dataSource.title}
        size="large"
      />
      <div className={styles["artists-wrapper-inner"]}>
        <div className={styles["artist-first"]}>
          <ArtistComponent {...data[0]} />
        </div>
        <div className={styles["artist-small"]}>
          {hotArtists.map((artist) => (
            <ArtistComponent key={artist.name} {...artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotArtists;
