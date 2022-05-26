// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchWeeklyAlbumRanking = (data) => ({
  type: actionType.LOAD_RANKING_ALBUM,
  payload: data,
});
