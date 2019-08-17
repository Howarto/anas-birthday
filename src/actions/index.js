import { SET_CURRENT_STEP, SET_ANIMATING_TEXT } from "../constants/actions";

export const setCurrentStep = (value) => ({
  type: SET_CURRENT_STEP,
  payload: value
});

export const setAnimatingText = (value) => ({
  type: SET_ANIMATING_TEXT,
  payload: value
});
