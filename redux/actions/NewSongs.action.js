// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchNewSongs = (data) => ({
  type: actionType.LOAD_NEW_SONGS,
  payload: data,
});
