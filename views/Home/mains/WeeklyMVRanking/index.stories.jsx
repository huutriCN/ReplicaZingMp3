import WeeklyMVRankingComponent from "./index";

export default {
  title: "views/Home/mains/WeeklyMVRanking",
  component: WeeklyMVRankingComponent,
};

export const PrimaryWeeklyMVRanking = () => (
  <WeeklyMVRankingComponent primary>
    {" "}
    Weekly MV Ranking
  </WeeklyMVRankingComponent>
);
