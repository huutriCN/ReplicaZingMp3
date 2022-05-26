// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchChartRanking = (data) => ({
  type: actionType.LOAD_CHART_RANKING,
  payload: data,
});
