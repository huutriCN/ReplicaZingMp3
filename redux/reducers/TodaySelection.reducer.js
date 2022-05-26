// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  todaySelection: [],
};

// eslint-disable-next-line default-param-last
export const todaySelectionReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_TODAY_SELECTION:
      return {
        ...state,
        todaySelection: action.payload,
      };
    default:
      return state;
  }
};
