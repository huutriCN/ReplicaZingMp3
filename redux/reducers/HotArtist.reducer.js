// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  hotArtists: [],
};

// eslint-disable-next-line default-param-last
export const hotArtistReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_HOT_ARTISTS:
      return {
        ...state,
        hotArtists: action.payload,
      };
    default:
      return state;
  }
};
