// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  rankingSong: [],
};

// eslint-disable-next-line default-param-last
export const chartRankingReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_CHART_RANKING:
      return {
        ...state,
        rankingSong: action.payload,
      };
    default:
      return state;
  }
};
