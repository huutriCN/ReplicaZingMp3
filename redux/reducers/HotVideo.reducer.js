// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  hotVideo: [],
};

// eslint-disable-next-line default-param-last
export const hotVideoReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_HOT_VIDEO:
      return {
        ...state,
        hotVideo: action.payload,
      };
    default:
      return state;
  }
};
