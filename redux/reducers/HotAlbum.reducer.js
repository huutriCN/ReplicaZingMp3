// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  hotAlbum: [],
};

// eslint-disable-next-line default-param-last
export const hotAlbumReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_HOT_ALBUM:
      return {
        ...state,
        hotAlbum: action.payload,
      };
    default:
      return state;
  }
};
