import { SET_CURRENT_STEP } from "../constants/actions";

export default (state = 0, action) => {
  if (action.type === SET_CURRENT_STEP) {
    return action.payload;
  }

  return state;
};