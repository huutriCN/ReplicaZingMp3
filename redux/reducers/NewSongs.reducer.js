// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  newSongs: [],
};

// eslint-disable-next-line default-param-last
export const newSongsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_NEW_SONGS:
      return {
        ...state,
        newSongs: action.payload,
      };
    default:
      return state;
  }
};
