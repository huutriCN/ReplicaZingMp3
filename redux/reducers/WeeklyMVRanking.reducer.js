// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  rankingMV: [],
};

// eslint-disable-next-line default-param-last
export const rankingMVReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_RANKING_MV:
      return {
        ...state,
        rankingMV: action.payload,
      };
    default:
      return state;
  }
};
