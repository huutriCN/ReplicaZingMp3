// components
import TitleComponent from "../../components/TitleComponent";
import ArtistComponent from "../../components/ArtistComponent";

// mocks
import data from "../../../../mocks/HotArtist";

// others
import styles from "./styles.module.scss";

const HotArtists = () => (
  <div className={styles["artists-wrapper"]}>
    <TitleComponent showedPlay={false} title="Nghệ Sĩ Hot" size="large" />
    <div className={styles["artists-wrapper-inner"]}>
      <div className={styles["artist-first"]}>
        <ArtistComponent {...data[0]} />
      </div>
      <div className={styles["artist-small"]}>
        {data.map((artist) => (
          <ArtistComponent key={artist.name} {...artist} />
        ))}
      </div>
    </div>
  </div>
);

export default HotArtists;
