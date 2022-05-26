// constants
import ACTION_TYPE from "@/constants/ActionType";

const inititalState = {
  partners: [],
};

// eslint-disable-next-line default-param-last
export const partnersReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_PARTNERS:
      return {
        ...state,
        partners: action.payload,
      };
    default:
      return state;
  }
};
