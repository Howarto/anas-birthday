import { SET_ANIMATING_TEXT } from "../constants/actions";

export default (state = false, action) => {
  if (action.type === SET_ANIMATING_TEXT) {
    return action.payload;
  }

  return state;
};