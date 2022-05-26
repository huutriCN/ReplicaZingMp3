// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchHotVideo = (data) => ({
  type: actionType.LOAD_HOT_VIDEO,
  payload: data,
});
