// components
import TitleComponent from "../../components/TitleComponent";
import VPopComponent from "../../components/VPopComponent";

/// mocks
import data from "../../../../mocks/NewSongs";

// others
import styles from "./styles.module.scss";
import NewSong from "../../../../dataSources/NewSongs";

const NewSongs = () => (
  <div className={styles["session-wrapper"]}>
    <div className={styles["session-wrapper-inner"]}>
      <TitleComponent showedPlay={false} title={NewSong.title} size="large" />
      {data.map((song) => (
        <VPopComponent
          key={song.title}
          imageWidth={NewSong.NEWS_IMAGE_WIDTH}
          imageHeight={NewSong.NEWS_IMAGE_HEIGHT}
          {...song}
        />
      ))}
    </div>
  </div>
);

export default NewSongs;
