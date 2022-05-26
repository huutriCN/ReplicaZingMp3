// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchHotAlbum = (data) => ({
  type: actionType.LOAD_HOT_ALBUM,
  payload: data,
});
