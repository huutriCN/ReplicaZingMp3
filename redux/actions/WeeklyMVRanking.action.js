// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchMVRanking = (data) => ({
  type: actionType.LOAD_RANKING_MV,
  payload: data,
});
