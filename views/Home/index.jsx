// components
import ChartRanking from "./mains/ChartRanking";
import HotArtists from "./mains/HotArtists";
import HotTopic from "./mains/HotTopic";
import HotVideo from "./mains/HotVideo";
import News from "./mains/News";
import NewSongs from "./mains/NewSongs";
import Partners from "./mains/Partners";
import PersonalPlaylist from "./mains/PersonalPlaylist";
import TodaySelection from "./mains/TodaySelection";
import WeeklyAlbumRanking from "./mains/WeeklyAlbumRanking";
import WeeklyMVRanking from "./mains/WeeklyMVRanking";
import WeeklySongRanking from "./mains/WeeklySongRanking";
import HotALbum from "./mains/HotAlbum";
// others
import styles from "./styles.module.scss";

const Home = () => (
  <section className={styles["home-wrapper"]}>
    <div className={styles["home-wrapper-inner"]}>
      <ChartRanking />
      <HotTopic />
      <PersonalPlaylist />
      <TodaySelection />
      <HotArtists />
      <HotALbum />
      <HotVideo />
      <HotVideo />
      <News />
      <NewSongs />
      <Partners />
      <WeeklyAlbumRanking />
      <WeeklyMVRanking />
      <WeeklySongRanking />
    </div>
  </section>
);
export default Home;
