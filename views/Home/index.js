import styles from "./Home.module.scss";
import ChartRanking from "../../layouts/MainLayouts/ChartRanking";
import HotArtists from "../../layouts/MainLayouts/HotArtists";
import HotTopic from "../../layouts/MainLayouts/HotTopic";
import HotVideo from "../../layouts/MainLayouts/HotVideo";
import News from "../../layouts/MainLayouts/News";
import NewSongs from "../../layouts/MainLayouts/NewSongs";
import Partners from "../../layouts/MainLayouts/Partners";
import PersonalPlaylist from "../../layouts/MainLayouts/PersonalPlaylist";
import TodaySelection from "../../layouts/MainLayouts/TodaySelection";
import WeeklyAlbumRanking from "../../layouts/MainLayouts/WeeklyAlbumRanking";
import WeeklyMVRanking from "../../layouts/MainLayouts/WeeklyMVRanking";
import WeeklySongRanking from "../../layouts/MainLayouts/WeeklySongRanking";
import HotALbum from "../../layouts/MainLayouts/HotAlbum";

const Home = () => (
  <section className={styles["home-wrapper"]}>
    <div className={styles["home-wrapper-inner"]}>
      <ChartRanking />
      <HotArtists />
      <HotALbum />
      <HotVideo />
      <HotTopic />
      <HotVideo />
      <News />
      <NewSongs />
      <Partners />
      <PersonalPlaylist />
      <TodaySelection />
      <WeeklyAlbumRanking />
      <WeeklyMVRanking />
      <WeeklySongRanking />
    </div>
  </section>
);
export default Home;
