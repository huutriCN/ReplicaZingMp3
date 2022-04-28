import WeeklyAlbumRankingComponent from "./index";

export default {
  title: "views/Home/mains/WeeklyAlbumRanking",
  component: WeeklyAlbumRankingComponent,
};

export const PrimaryWeeklyAlbumRanking = () => (
  <WeeklyAlbumRankingComponent primary>
    Weekly Album Ranking
  </WeeklyAlbumRankingComponent>
);
