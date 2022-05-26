// constants
import actionType from "@/constants/ActionType";

// eslint-disable-next-line import/prefer-default-export
export const fetchPartners = (data) => ({
  type: actionType.LOAD_PARTNERS,
  payload: data,
});
