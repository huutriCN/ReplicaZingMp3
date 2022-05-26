// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchSongRanking = (data) => ({
  type: actionType.LOAD_RANKING_SONG,
  payload: data,
});
