// components
import TitleComponent from "../../components/TitleComponent";
import ArtistComponent from "../../components/ArtistComponent";
// hooks
import useSelect from "@/hooks/useSelect";
// actions
import { fetchHotArtist } from "@/redux/actions/HotArtist.action";
// mocks
import data from "@/mocks/HotArtist";
// others
import styles from "./styles.module.scss";
import dataSource from "@/dataSources/HotArtists";

const HotArtists = () => {
  const hotArtists = useSelect(
    fetchHotArtist,
    (state) => state.hotArtistReducer.hotArtists,
    data,
  );

  return (
    <div className={styles["hot-artists-wrapper"]}>
      <TitleComponent
        showedPlay={false}
        title={dataSource.title}
        size="large"
      />
      <div className={styles["hot-artists-wrapper-inner"]}>
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
