import { SET_CURRENT_STEP } from "../constants/actions";

export const setCurrentStep = (value) => ({
  type: SET_CURRENT_STEP,
  payload: value
});