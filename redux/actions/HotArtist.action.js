// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchHotArtist = (data) => ({
  type: actionType.LOAD_HOT_ARTISTS,
  payload: data,
});
