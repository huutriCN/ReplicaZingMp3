import styles from "./Home.module.scss";
import ChartRanking from "../../sections/ChartRanking/main";
import Playlist from "../../components/Playlist";
import Topic from "../../components/Topic";
import Tracking from "../../sections/Tracking/main";
import Session from "../../sections/Session/main";
import Partners from "../../sections/Partners/main";

const Home = () => (
  <section className={styles.container}>
    <div className={styles.gridContainer}>
      <Playlist className={styles.personalPlaylist} />
      <Topic className={styles.hotTopic} />
      <Session
        className={styles.weeklySongRanking}
        sessionTitle="Weely Song Ranking"
      />
      <Session
        className={styles.weeklyMVRanking}
        sessionTitle="Weely MV Ranking"
      />
      <Session
        className={styles.weeklyAlbumRanking}
        sessionTitle="Weely Album Ranking"
      />

      <Session className={styles.news} sessionTitle="News" />

      <ChartRanking className={styles.chartRanking} />

      <Tracking
        className={styles.todaySelection}
        trackingTitle="Today Selection"
      />
      <Tracking className={styles.hotVideo} trackingTitle="Hot Video" />
      <Tracking className={styles.hotAlbum} trackingTitle="Hot Album" />

      <Session className={styles.newSongs} sessionTitle="New Songs" />

      <Session className={styles.hotArtist} sessionTitle="Hot Artists" />
      <Partners className={styles.partners} />
    </div>
  </section>
);
export default Home;
