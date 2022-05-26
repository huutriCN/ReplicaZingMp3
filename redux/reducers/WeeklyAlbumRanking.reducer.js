// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  rankingAlbum: [],
};

// eslint-disable-next-line default-param-last
export const rankingAlbumReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_RANKING_ALBUM:
      return {
        ...state,
        rankingAlbum: action.payload,
      };
    default:
      return state;
  }
};
