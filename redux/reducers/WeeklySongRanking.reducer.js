// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  weeklySongRanking: [],
};

// eslint-disable-next-line default-param-last
export const weeklySongRankingReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_RANKING_SONG:
      return {
        ...state,
        weeklySongRanking: action.payload,
      };
    default:
      return state;
  }
};
