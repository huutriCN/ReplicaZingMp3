// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchNews = (data) => ({
  type: actionType.LOAD_NEWS,
  payload: data,
});
