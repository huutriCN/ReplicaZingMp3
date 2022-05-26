// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  news: [],
};

// eslint-disable-next-line default-param-last
export const newsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
