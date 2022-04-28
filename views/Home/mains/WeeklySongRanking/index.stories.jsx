import WeeklySongRankingComponent from "./index";

export default {
  title: "views/Home/mains/WeeklySongRanking",
  component: WeeklySongRankingComponent,
};

export const PrimaryWeeklySongRanking = () => (
  <WeeklySongRankingComponent primary>
    Weekly Song Ranking
  </WeeklySongRankingComponent>
);
