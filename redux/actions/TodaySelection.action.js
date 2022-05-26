// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchTodaySelection = (data) => ({
  type: actionType.LOAD_TODAY_SELECTION,
  payload: data,
});
