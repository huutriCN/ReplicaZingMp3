// libs
import { combineReducers } from "redux";
// reducers
import { chartRankingReducer } from "./ChartRanking.reducer";
import { hotAlbumReducer } from "./HotAlbum.reducer";
import { hotArtistReducer } from "./HotArtist.reducer";
import { hotVideoReducer } from "./HotVideo.reducer";
import { newSongsReducer } from "./NewSongs.reducer";
import { newsReducer } from "./News.reducer";
import { partnersReducer } from "./Partners.reducer";
import { todaySelectionReducer } from "./TodaySelection.reducer";
import { rankingAlbumReducer } from "./WeeklyAlbumRanking.reducer";
import { rankingMVReducer } from "./WeeklyMVRanking.reducer";
import { weeklySongRankingReducer } from "./WeeklySongRanking.reducer";

const rootReducer = combineReducers({
  chartRankingReducer,
  hotAlbumReducer,
  hotArtistReducer,
  hotVideoReducer,
  newSongsReducer,
  newsReducer,
  partnersReducer,
  todaySelectionReducer,
  rankingAlbumReducer,
  rankingMVReducer,
  weeklySongRankingReducer,
});

export default rootReducer;
